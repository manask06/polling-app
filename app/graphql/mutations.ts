import { gql } from "@apollo/client"

export const CREATE_POLL = gql`
  mutation CreatePoll($title: String!, $description: String!, $options: [PollOptionInput!]!) {
    createPoll(title: $title, description: $description, options: $options) {
      id
      title
      description
      options {
        text
      }
    }
  }
`
export const VOTE = gql`
  mutation VotePoll($pollId: ID!, $optionId: ID!) {
    votePoll(pollId: $pollId, optionId: $optionId) {
      id
      title
      description
      options {
        id
        text
        votes
      }
    }
  }
`

export const DELETE_POLL = gql`
  mutation DeletePoll($id: ID!) {
    deletePoll(id: $id)
  }
`;