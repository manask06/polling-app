export const typeDefs = `
  type Poll {
  id: ID!
  title: String!
  description: String
  options: [PollOption!]!
}

type PollOption {
  id: ID!
  text: String!
  votes: Int!
  poll: Poll!
}

type Query {
  polls: [Poll!]!
}

type Mutation {
  createPoll(title: String!, description: String, options: [PollOptionInput!]!): Poll!
}

input PollOptionInput {
  text: String!
  votes: Int!
}
`

// votePoll(pollId: ID!, optionId: ID!): Poll!

