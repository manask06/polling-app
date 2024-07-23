import { CREATE_POLL, DELETE_POLL, VOTE } from "@/app/graphql/mutations";
import { FETCH_POLL_BY_ID, GET_POLLS } from "@/app/graphql/queries";
import { getClient } from "./ApolloClient";

const client = getClient()

export interface PollOption {
  id: number
  text: string
  votes: number
}

export interface Poll {
  id: number
  title: string
  description: string
  options: PollOption[]
}

export async function fetchPolls(): Promise<Poll[]> {
  const { data } = await client.query({
    query: GET_POLLS
  })

  
  return data.polls
}

export async function fetchPollById(id: number): Promise<Poll> {
  const { data } = await client.query({
    query: FETCH_POLL_BY_ID,
    variables: { id }
  })
  console.log("🚀 ~ fetchPollById ~ data:", data)

  return data.poll
}


export async function votePoll(pollId: number, optionId: number): Promise<Poll> {
  const { data } = await client.mutate({
    mutation: VOTE,
    variables: { pollId, optionId },
  });
  return data.votePoll;
}

export async function createPoll(data: { title: string; description: string; options: string[] }): Promise<Poll> {
  const res: any = await client.mutate({
    mutation: CREATE_POLL,
    variables: data,
  });
  return res;
}

export async function deletePoll(id: number): Promise<boolean> {
  const { data } = await client.mutate({
    mutation: DELETE_POLL,
    variables: { id },
  });
  return data.deletePoll;
}