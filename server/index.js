const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const stable = require('stable');

const countries = require('./countries.json');

const typeDefs = gql`
    type Query {
        largestCountries(limit: Int): [Country!]!
        smallestCountries(limit: Int): [Country!]!
    }

    type Country {
        code: String
        name: String
        nativeName: String
        capital: String
        region: String
        subregion: String
        population: Int
        latlng: [Float]!
        demonym: String
        area: Float
        neighbors: [Country]!
        flag: String
        languages: [Language]
    }

    type Language {
        name: String
        nativeName: String
        isoCode: String
    }
`;

const resolvers = {
    Query: {
        largestCountries(_, { limit = 6 }, { countries }) {
            return stable(countries, (a, b) => b.area - a.area).slice(0, limit);
        },
        smallestCountries(_, { limit = 6 }, { countries }) {
            return stable(countries, (a, b) => a.area - b.area).slice(0, limit);
        },
    },
    Country: {
        code(country) {
            return country.alpha3Code;
        },
        neighbors(root, _, { countries }) {
            return root.borders.map(border => countries.find(country => country.alpha3Code === border));
        }
    },
    Language: {
        isoCode(language) {
            return language.iso639_1 || language.iso639_2;
        }
    }
};

const onlyCountriesWithArea = countries.filter(country => !!country.area);

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        countries: [...onlyCountriesWithArea],
    }
});

const app = express();

server.applyMiddleware({ app, path: '/' });

module.exports = app;
