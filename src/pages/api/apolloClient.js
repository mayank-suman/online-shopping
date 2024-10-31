import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "api/graphql",
  cache: new InMemoryCache(),
});

export default client;

// https://www.youtube.com/watch?v=XzE-PzALyDc&t=158s
