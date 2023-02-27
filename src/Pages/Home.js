import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      Home
      <button
        onClick={() => {
          navigate("/form");
        }}
      >
        go to form page{" "}
      </button>
    </div>
  );
};

export default Home;
