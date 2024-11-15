"use client";
import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "../../pages/api/apolloClient";
import HelloQuery from "./HelloQuery";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

// Adds messages only in a dev environment
if (process.env.NODE_ENV !== "production") {
  loadDevMessages();
  loadErrorMessages();
}

function page() {
  return (
    <ApolloProvider client={client}>
      <HelloQuery />
    </ApolloProvider>
  );
}

export default page;
