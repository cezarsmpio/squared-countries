const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');

const typeDefs = gql`
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

const server = new ApolloServer({
    typeDefs,
    resolvers,

});

const app = express();

server.applyMiddleware({ app, path: '/' });

module.exports = app;
