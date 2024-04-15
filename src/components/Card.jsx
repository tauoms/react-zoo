import React from "react";

const Card = ({ name }) => {
  return (
    <div className="card">
      <img src={`https://source.unsplash.com/random/400×400/?${name}`} />
      <h2>{name}</h2>
    </div>
  );
};

export default Card;
