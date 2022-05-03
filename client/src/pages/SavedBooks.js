import React from "react";
// import { Redirect, useParams } from "react-router-dom";
import {
  Jumbotron,
  Container,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";

// import FriendList from "../components/FriendList";

import Auth from "../utils/auth";
import { removeBookId } from "../utils/localStorage";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { REMOVE_BOOK } from "../utils/mutations";
// import { ADD_FRIEND } from "../utils/mutations";
// create state to hold saved bookId values
const SavedBooks = () => {
  // const { username: userParam } = useParams(); //please don't break
  const { loading, data } = useQuery(QUERY_ME);
  const [removeBook] = useMutation(REMOVE_BOOK);
  // const [addFriend] = useMutation(ADD_FRIEND);

  const userData = data?.me || {};

  // const handleClick = async () => {
  //   try {
  //     await addFriend({
  //       variables: { id: user._id },
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeBook({
        variables: { bookId },
      });
      console.log(data);

      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>Loading Data...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className="myBooks">
        <Container>
          <h1>{userData.username}'s</h1>
        </Container>
      </Jumbotron>
      <Container>
        {/* <div> */}
        <h2>
          {userData.savedBooks?.length
            ? `Viewing ${userData.savedBooks.length} saved ${
                userData.savedBooks.length === 1 ? "book" : "books"
              }:`
            : "You have no saved books!"}
        </h2>

        {/* {userParam && (
            <button className="btn ml-auto" onClick={handleClick}>
              Add Friend
            </button>
          )} */}
        {/* </div> */}

        {/* <div className="col-12 col-lg-3 mb-3">
          <FriendList
            username={user.username}
            friendCount={user.friendCount}
            friends={user.friends}
          />
        </div> */}

        <CardColumns>
          {userData.savedBooks?.map((book) => {
            return (
              <Card key={book.bookId} border="dark">
                {book.image ? (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                ) : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button
                    className="btn-block btn-danger"
                    onClick={() => handleDeleteBook(book.bookId)}
                  >
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
