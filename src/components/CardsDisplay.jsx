import Card from "./Card";
import { animals } from "../animalsList";

const CardsDisplay = () => {
  const addLike = () => {
    console.log("addLike button clicked");
  };
  const removeLike = () => {
    console.log("removeLike button clicked");
  };
  const removeCard = () => {
    console.log("removeCard button clicked");
  };

  return (
    <main>
      {animals.map((animal) => (
        <Card
          key={animal.name}
          {...animal}
          addLike={addLike}
          removeLike={removeLike}
          removeCard={removeCard}
        />
      ))}
    </main>
  );
};

export default CardsDisplay;
