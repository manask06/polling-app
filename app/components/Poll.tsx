"use client"
import { Poll as PollType} from "@/app/lib/polls";
import Link from "next/link";
import { LuMoreVertical } from "react-icons/lu";
import Menu from "./Menu";

interface PollProps {
  poll: PollType
}
export default function Poll({poll}: PollProps) {
  return (
    <div className="border p-4 mb-4">
      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-xl font-bold">{poll.title}</h2>
          <p>{poll.description}</p>
        </div>
        <div className="flex justify-end items-center relative">
          <Menu>
            <div className="absolute mt-0 w-40 right-0 bg-white border border-gray-200 z-30 rounded-md shadow-lg hidden group-hover:block transition-opacity duration-500 ease-in-out">
              <Link href={`polls/${poll.id}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">View poll</Link>
              <Link href={`polls/${poll.id}`} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Update poll</Link>
              <button className="block px-4 py-2 text-gray-700 hover:bg-red-400 hover:text-white w-full text-left ">Delete poll</button>
            </div>
          </Menu>
        </div>
        
      </div>
      
    </div>
  );
}