import { gql, useQuery } from "@apollo/client";
import React from "react";

const GET_USERS = gql`
  query ExampleQuery {
    hello
  }
`;

function HelloQuery() {
  const { data, loading, error } = useQuery(GET_USERS);

  if (loading) {
    return <>loading</>;
  }

  return <div>{!error ? data?.hello : error}</div>;
}

export default HelloQuery;
