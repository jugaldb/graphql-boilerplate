const { GraphQLServer } = require('graphql-yoga');
var { resolvers } = require('../graphql/resolvers/index');
const { context } = require('../graphql/context/index');
const { middlewares } = require('../graphql/middlewares/index')
resolvers = resolvers

const OPTION = {
  GRAPHQL_ENDPOINT: '/graphql',
  PLAYGROUND: '/playground',
};

const typeDefs = './src/graphql/schema.graphql';

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context,
  middlewares,
});

const option = {
  port: 3000,
  cors: {
    credentials: true,
    origin: '*', // your frontend url.
  },
  endpoint: OPTION.GRAPHQL_ENDPOINT,
  playground: OPTION.PLAYGROUND, 
};

const app = server.express;

module.exports = { server, app, option };
