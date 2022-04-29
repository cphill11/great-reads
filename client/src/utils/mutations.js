import { gql } from '@apollo/client';

export const LOGIN_USER = gql//   login(email: $email, password: $password) { // mutation login($email: String!, $password: String!) {
//     token
//     user {
//       _id
//       username
//     }
//   }
// }
`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
  
      _id
      username
      email
    }
  }
`;

export const ADD_USER = gql//   addUser(username: $username, email: $email, password: $password) { // mutation addUser($username: String!, $email: String!, $password: String!) {
//     token
//     user {
//       _id
//       username
//     }
//   }
// }
`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      _id
      username
      email
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookData: bookInput!) {
    saveBook(bookData: $bookData) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($bookID: ID!) {
    removeBook(bookID: $bookID) {
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
