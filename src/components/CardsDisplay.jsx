import Card from "./Card";
import { animals } from "../animalsList";

const CardsDisplay = () => {
  return (
    <main>
      {animals.map((animal) => (
        <Card key={animal.name} {...animal} />
      ))}
    </main>
  );
};

export default CardsDisplay;
