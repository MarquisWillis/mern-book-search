const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  input SaveBook {
    authors: [String]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }

# modify type defs
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(body: SaveBook): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
