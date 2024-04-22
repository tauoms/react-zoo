import Card from "./Card";
import { animals } from "../animalsList";
import { useState } from "react";

// const [animalsArr, setAnimalsArr] = useState(...animals);

const CardsDisplay = () => {
  const addLike = (name) => {
    console.log(`${name} addLike button clicked`);
    // console.log(animalsArr);
  };
  const removeLike = (name) => {
    console.log(`${name} removeLike button clicked`);
  };
  const removeCard = (name) => {
    console.log(`${name} removeCard button clicked`);
  };

  return (
    <main>
      {animals.map((animal) => (
        <Card
          key={animal.name}
          {...animal}
          addLike={() => addLike(animal.name)}
          removeLike={() => removeLike(animal.name)}
          removeCard={() => removeCard(animal.name)}
        />
      ))}
    </main>
  );
};

export default CardsDisplay;
