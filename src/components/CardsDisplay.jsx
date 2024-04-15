import React from "react";
import Card from "./Card";
import { animals } from "../animalsList";

const CardsDisplay = () => {
  return (
    <div className="cardsDisplay">
      {animals.map((animal) => (
        <Card key={animal.name} {...animal} />
      ))}
    </div>
  );
};

export default CardsDisplay;
