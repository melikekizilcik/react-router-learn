import React from "react";

//import router
import { useNavigate } from "react-router-dom";

function Mission() {
  const navigate = useNavigate();
  return (
    <>
      <div>Our mission: .................</div>
      <button onClick={() => navigate("/")}>Go Back</button>
      {/* geri dönmek için navigate(-1) de yazılabilir */}
    </>
  );
}

export default Mission;
