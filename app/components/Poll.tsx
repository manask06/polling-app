"use client"
import { Poll as PollType} from "@/app/lib/polls";
import Link from "next/link";

interface PollProps {
  poll: PollType
}
export default function Poll({poll}: PollProps) {
  return (
    <div className="border p-4 mb-4">
      <h2 className="text-xl font-bold">{poll.title}</h2>
      <p>{poll.description}</p>
      <Link className="text-blue-500"href={`/polls/${poll.id}`}>
        View Poll
      </Link>
    </div>
  );
}