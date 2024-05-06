import { useParams } from "react-router-dom";

const CategoryPage = () => {
  let { category } = useParams();

  return (
    <>
      <h2>{category} page will be here</h2>
    </>
  );
};

export default CategoryPage;
