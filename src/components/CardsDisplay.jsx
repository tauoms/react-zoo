import React from "react";
import Card from "./Card";
import { animals } from "../animalsList";

const CardsDisplay = () => {
  return (
    <div className="cardsDisplay">
      {animals.map((animal) => (
        <Card name={animal.name} />
      ))}
    </div>
  );
};

export default CardsDisplay;
