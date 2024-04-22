import Card from "./Card";
import { animals } from "../animalsList";
import { useState } from "react";

const CardsDisplay = () => {
  const [animalsArr, setAnimalsArr] = useState(animals);

  const addLike = (animal) => {
    console.log(`${animal} addLike button clicked`);
    // setAnimalsArr((prevState) => ({ ...prevState, [name]: like }));
  };
  const removeLike = (animal) => {
    console.log(`${animal} removeLike button clicked`);
  };
  const removeCard = (animal) => {
    console.log(`${animal} removeCard button clicked`);
    const updatedAnimalsArr = animalsArr.filter((item) => item.name !== animal);
    setAnimalsArr(updatedAnimalsArr);
  };

  return (
    <main>
      {animalsArr.map((animal) => (
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
