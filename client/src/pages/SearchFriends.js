// import React, { useState, useEffect } from "react";
// import {
//   Jumbotron,
//   Container,
//   Col,
//   Form,
//   Button,
//   Card,
//   CardColumns,
// } from "react-bootstrap";

// import Auth from "../utils/auth";
// import { saveBookIds, getSavedBookIds } from "../utils/localStorage";
// import { useQuery, useMutation } from "@apollo/client";
// import { QUERY_USER, QUERY_ME } from "../utils/queries";
// import { SAVE_BOOK } from "../utils/mutations";

// const SearchUser = (props) => {
//   const { data, loading } = useQuery(QUERY_USER);

//   const [currentUsers, setUsers] = useState([data]);

//   const userData = data?.user || {};

//   useEffect(() => {
//     return () => setUsers(data);
//   });

//   console.log(currentUsers);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();

//     // if (!searchInput) {
//     //   return false;
//     // }

//     // try {
//     //   const response = await fetch(
//     //     `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
//     //   );

//     //   if (!response.ok) {
//     //     throw new Error("something went wrong!");
//     //   }

//     //   const { items } = await response.json();

//     //   const bookData = items.map((book) => ({
//     //     bookId: book.id,
//     //     authors: book.volumeInfo.authors || ["No author to display"],
//     //     title: book.volumeInfo.title,
//     //     description: book.volumeInfo.description,
//     //     image: book.volumeInfo.imageLinks?.thumbnail || "",
//     //   }));

//     //   setSearchedBooks(bookData);
//     //   setSearchInput("");
//     // } catch (err) {
//     //   console.error(err);
//     // }
//   };

//   return (
//     <>
//       <Jumbotron fluid className="myBooks">
//         <Container>
//           <h1>{userData.username}'s</h1>
//           <Form onSubmit={handleFormSubmit}>
//             <Form.Row>
//               <Col xs={12} md={8}>
//                 <Form.Control
//                   name="searchInput"
//                   // value={searchInput}
//                   // onChange={(e) => setSearchInput(e.target.value)}
//                   type="text"
//                   size="lg"
//                   placeholder="Search for a user"
//                 />
//               </Col>

//               <Col xs={12} md={4}>
//                 <Button type="submit" variant="success" size="lg">
//                   Submit Search
//                 </Button>
//               </Col>
//             </Form.Row>
//           </Form>
//         </Container>
//       </Jumbotron>
//       <Container>
//         <h2>
//           {userData.savedBooks?.length
//             ? `Viewing ${userData.savedBooks.length} saved ${
//                 userData.savedBooks.length === 1 ? "book" : "books"
//               }:`
//             : "They have no saved books!"}
//         </h2>

//         <CardColumns>
//           {userData.savedBooks?.map((book) => {
//             return (
//               <Card key={book.bookId} border="dark">
//                 {book.image ? (
//                   <Card.Img
//                     src={book.image}
//                     alt={`The cover for ${book.title}`}
//                     variant="top"
//                   />
//                 ) : null}
//                 <Card.Body>
//                   <Card.Title>{book.title}</Card.Title>
//                   <p className="small">Authors: {book.authors}</p>
//                   <Card.Text>{book.description}</Card.Text>
//                   {/* <Button
//                     className="btn-block btn-danger"
//                     onClick={() => handleDeleteBook(book.bookId)}
//                   >
//                     Delete this Book!
//                   </Button> */}
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
// };

// export default SearchUser;
