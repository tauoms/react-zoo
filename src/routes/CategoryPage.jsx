import { useParams } from "react-router-dom";
import Card from "../components/Card";

const CategoryPage = ({ ...rest }) => {
  let { category } = useParams();

  const categoryItems = rest[category];

  return (
    <>
      {categoryItems.map((item) => (
        <Card key={item.name} name={item.name} />
      ))}
    </>
  );
};

export default CategoryPage;
