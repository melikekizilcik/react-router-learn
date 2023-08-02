import React from "react";
import { useSearchParams } from "react-router-dom";

function Members() {
  const [searchParams, setSearchParams] = useSearchParams();
  const isActive = searchParams.get("filter") === "active";
  return (
    <>
      <div>Members</div>
      <button onClick={() => setSearchParams({ filter: "active" })}>
        Active members
      </button>
      <button onClick={() => setSearchParams()}>All members</button>
      {isActive ? <h2>Active members</h2> : <h2>All members</h2>}
    </>
  );
}

export default Members;
