"use client"
import { Fragment, useState } from "react"
import { MdDeleteOutline } from "react-icons/md";
interface CreatePollFormProps {
  onSubmit: (pollData: {
    title: string
    description: string
    options: string[]
  }) => void
}

export default function CreatePollForm({ onSubmit }: CreatePollFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [options, setOptions] = useState(['', ''])

  const handleAddOption = () => {
    setOptions([...options, ''])
  }

  const handleChangeOption = (index: number, value: string) => {
    const newOptions = [...options]
    newOptions[index] = value
    setOptions(newOptions)
  }

  const deleteOption = (index: number) => {
    const newOptions = [...options]
    newOptions.splice(index, 1)
    setOptions(newOptions)
  }
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmit({ title, description, options })
  }
  return (
    <form onSubmit={handleSubmit} className="m-4 max-w-lg mx-auto bg-white md:p-6 phone:py-6 phone:px-0 rounded-lg phone:shadow-none md:shadow-xl ">
      <div className="flex flex-col mb-4 bg-gray-100 rounded-lg px-3 py-4">
        <input type="text" placeholder="Enter your title" className="flex-grow  bg-gray-100 focus:outline-none border-0
          focus:ring-transparent" value={title}
          onChange={(e) => setTitle(e.target.value)}
          required/>
        <hr className="h-px my-3 bg-gray-300 border-0" />
        <textarea placeholder="Enter your description" className="flex-grow  bg-gray-100 focus:outline-none border-0 focus:ring-transparent" value={description}
          onChange={(e) => setDescription(e.target.value)}
          required/>
      </div>

      <div className="flex flex-col  bg-gray-100 rounded-lg px-3 py-4 ">
        <div className="overflow-y-auto min-h-30 max-h-40">
          {
            options.map((option, index) => (
              <Fragment key={index}>
                <div className="flex">
                  <input placeholder={`Option ${index + 1}`} className="flex-grow  bg-gray-100 focus:outline-none border-0 focus:ring-transparent"
                  type="text"
                  value={option}
                  onChange={(e) => handleChangeOption(index, e.target.value)}
                  required/>
                  <MdDeleteOutline className="opacity-40 mr-2 text-red-400 hover:text-red-700 cursor-pointer" onClick={() => deleteOption(index)}/>
                </div>
                <hr className="h-px my-3 bg-gray-300 border-0" />
              </Fragment>
            ))
          }
        </div>
        <button className="mt-4 bg-gray-600 text-white rounded-full p-2 w-1/2 self-center" onClick={handleAddOption} >
          + Add Option
        </button>
      </div>
      
      
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-full mt-5 w-full">
        Publish Poll
      </button>
    </form>
  );
}