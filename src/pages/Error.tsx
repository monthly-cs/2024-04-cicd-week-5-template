import React from "react";
import { StBody } from "./Home";
import { useNavigate } from "react-router-dom";
import Button from "../component/Button";

const Error = () => {
  const navigate = useNavigate();

  return (
    <StBody>
      <div className="innerBody">
        <h1>Wrong Page!</h1>
        <Button text="back to Home" onClick={() => navigate(`/`)} />
      </div>
    </StBody>
  );
};

export default Error;
