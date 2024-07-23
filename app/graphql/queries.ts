import { gql } from "@apollo/client";

export const GET_POLLS = gql`
  query GetPolls {
    polls {
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

export const FETCH_POLL_BY_ID = gql `
  query GetPollById($id: ID!) {
        poll(id: $id) {
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

