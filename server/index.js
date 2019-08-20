const { GraphQLServer } = require('graphql-yoga');
const http = require('http');

const typeDefs = `
    type Query {
        countries: [String]
    }
`;

const resolvers = {
    Query: {
        countries() {
            return ['a'];
        }
    }
};

const server = new GraphQLServer({
    typeDefs,
    resolvers,
});



module.exports = server.express;
