import React from "react";
import Home from "./pages/Home";
import { ApolloLink, ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient } from "@apollo/client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { onError } from "apollo-link-error";
import JobStateContext from "./ContextAPI/JobStateContext";

const App = () => {
  // So, uhm, i am using Apollo client to handle my querries to the graphql server
  // it totally handles my error states and network errors without really doing much.
  // A good shortcut if you ask me.

  const client = new ApolloClient({
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          );
        if (networkError) console.log(`[Network error]: ${networkError}`);
      }),
      new HttpLink({
        uri: "https://api.graphql.jobs/",
        credentials: "same-origin",
      }),
    ]),
    cache: new InMemoryCache(),
  });

  return (
    <div className="h-screen mx-auto max-w-[1920px]">
      <ApolloProvider client={client}>
        <JobStateContext>
          <Home />
        </JobStateContext>
      </ApolloProvider>
    </div>
  );
};

export default App;
