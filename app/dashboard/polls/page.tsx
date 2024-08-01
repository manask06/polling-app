"use client"
import Poll from "@/app/components/Poll";
import { fetchPolls, Poll as PollType } from "@/app/lib/polls";
import { useEffect, useState } from "react";
import { useFetch } from '@/app/hooks/useFetch'
import Loading from "@/app/loading";

const PollListPage = () =>  {

  const { loading, error, data: polls } = useFetch<PollType[]>(fetchPolls);

  if (error) return <p className="text-red-500">Error: {error.message}</p>;
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Polls</h1> {
        loading ? <Loading /> : (
          polls?.map((poll) => (
            <Poll key={poll.id} poll={poll} />
          ))
        )
      }
    </div>
  )
}

export default PollListPage