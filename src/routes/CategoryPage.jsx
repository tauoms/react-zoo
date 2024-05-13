import { useParams } from "react-router-dom";
import Card from "../components/Card";

const CategoryPage = ({
  removeCard,
  removeLike,
  addLike,
  filteredData,
  ...rest
}) => {
  let { category } = useParams();

  const categoryItems = rest[category];

  return (
    <>
      {categoryItems.map((item) => (
        <Card
          key={item.name}
          name={item.name}
          {...item}
          removeCard={() => removeCard(item.name, category)}
          removeLike={() => removeLike(item.name, category, "remove")}
          addLike={() => addLike(item.name, category, "add")}
        />
      ))}
    </>
  );
};

export default CategoryPage;
