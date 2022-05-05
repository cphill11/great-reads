import React from "react";

// import WebsiteContainer from "./components/Website-container";

// const App = () =>  <WebsiteContainer />;
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import DiscussionBoard from "./pages/DiscussionBoard";
import SingleDiscussion from "./pages/SingleDiscussion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "../src/index.js";
import "../src/media-queries.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  console.log(token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={SearchBooks} />
            <Route exact path="/saved" component={SavedBooks} />
            <Route exact path="/discussion" component={DiscussionBoard} />
            <Route exact path="/thought/:id" component={SingleDiscussion} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
          <Footer></Footer>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
