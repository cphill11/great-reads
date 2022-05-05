// template; evaluate for viability
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
    rating: Float
  }
  input bookInput {
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
    rating: Float
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: bookInput!): User
    removeBook(bookId: ID!): User
  }
`;

// query type for getAllUsers; only queries & mutations (includes put/ post / delete fxn)
module.exports = typeDefs;
