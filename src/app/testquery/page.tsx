import React from "react";
import { useQuery } from "@apollo/client";

function page() {
  const { data, loading, error } = useQuery("hello", {
    variables: { id: 1000 },
  });

  return <div>page</div>;
}

export default page;
