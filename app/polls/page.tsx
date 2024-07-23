
import Poll from "@/app/components/Poll";
import { fetchPolls, Poll as PollType } from "@/app/lib/polls";
import { useEffect, useState } from "react";

const fetchDataWithDelay = async (delay: number = 10) => {
  await new Promise(resolve => setTimeout(resolve, delay));
  const response = await fetchPolls();
  return response;
};

const PollListPage = async () =>  {
  // const [polls, setPolls] = useState<PollType[]>([])

  // useEffect(() => {
  //   const getPolls = async () => {
  //     const data = await fetchPolls()
  //     setPolls(data)
  //   }

  //   getPolls()
  // }, [])
  // const data = await fetchPolls()
  const polls = await fetchDataWithDelay()
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Polls</h1>
      {polls.map((poll) => (
        <Poll key={poll.id} poll={poll} />
      ))}
    </div>
  )
}

export default PollListPage