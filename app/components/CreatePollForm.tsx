"use client"
import { useState } from "react"

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

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    onSubmit({ title, description, options })
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block mb-1">Options:</label>
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleChangeOption(index, e.target.value)}
            required
            className="w-full p-2 border rounded mb-2"
          />
        ))}
        <button type="button" onClick={handleAddOption} className="bg-gray-500 text-white px-4 py-2 rounded">
          Add Option
        </button>
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Create Poll
      </button>
    </form>
  );
}