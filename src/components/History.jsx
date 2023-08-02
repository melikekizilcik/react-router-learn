import React from "react";

//import router
import { Link, Outlet } from "react-router-dom";

function History() {
  return (
    <>
      <div>Our history:...............</div>
      <nav>
        <Link to="company">Our Companies</Link>
        <Link to="managementTeam">Management Team</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default History;
