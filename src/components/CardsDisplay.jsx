import Card from "./Card";
import { animals } from "../animalsList";

const CardsDisplay = (name) => {
  const addLike = (name) => {
    console.log(`${name} addLike button clicked`);
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
          removeLike={() => removeLike(name)}
          removeCard={() => removeCard(animal.name)}
        />
      ))}
    </main>
  );
};

export default CardsDisplay;
