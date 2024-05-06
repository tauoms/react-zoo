import { useParams } from "react-router-dom";

const AnimalPage = () => {
  let { animalName } = useParams();

  return <h2>{animalName} Page</h2>;
};

export default AnimalPage;
