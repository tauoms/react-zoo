import Card from "./Card";
import { animals } from "../animalsList";
import { useState } from "react";

const CardsDisplay = () => {
  const [animalsArr, setAnimalsArr] = useState(animals);

  const likesHandler = (animal, action) => {
    console.log(`${animal} ${action} button clicked`);

    const updatedAnimalsArr = animalsArr.map((item) => {
      if (item.name === animal) {
        if (action === "add") {
          return { ...item, likes: item.likes + 1 };
        } else {
          return { ...item, likes: item.likes - 1 };
        }
      } else {
        return item;
      }
    });

    setAnimalsArr(updatedAnimalsArr);
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
          addLike={() => likesHandler(animal.name, "add")}
          removeLike={() => likesHandler(animal.name, "remove")}
          removeCard={() => removeCard(animal.name)}
        />
      ))}
    </main>
  );
};

export default CardsDisplay;
