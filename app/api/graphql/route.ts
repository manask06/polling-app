import { resolvers } from '@/app/graphql/resolver'
import { typeDefs } from '@/app/graphql/schema'
import { createSchema, createYoga } from 'graphql-yoga'
import { NextApiRequest, NextApiResponse } from 'next'

// export default createYoga<{
//   req: NextApiRequest
//   res: NextApiResponse
// }>({
//   schema: createSchema({
//     typeDefs: typeDefs,
//     resolvers: resolvers
//   }),
//   graphqlEndpoint: '/api/graphql'
// })

// export const config = {
//   api: {
//     bodyParser: false
//   }
// }

const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
  }),
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response }
})

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }