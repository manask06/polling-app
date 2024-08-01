import { LuMoreVertical } from "react-icons/lu";
import './Menu.css'
export default function Menu({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        // <div className="relative hover:visible">
        //     <LuMoreVertical size='22'className="hover:text-gray-400 cursor-pointer"/>
        //     <div className="menu-items w-200 h-200 border-gray-100 bg-slate-200 absolute hidden ">
        //       <ul>
        //         <li>Edit</li>
        //         <li>Delete</li>
        //       </ul>
        //     </div>
        // </div>
        <div className="inline-block text-left group ">
            {/* <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Hover Me
            </button> */}
            <LuMoreVertical size='22'className="hover:text-gray-400 cursor-pointer"/>
            {children}
        </div>
    )
}