import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = ({ category }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(`/${category}`);
  };

  return (
    <button className="back-btn" onClick={goBack}>
      Back
    </button>
  );
};

export default BackButton;
