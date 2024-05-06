import { useParams } from "react-router-dom";

const AnimalPage = () => {
  let { animalName } = useParams();

  return (
    <>
      <h2>{animalName} Page</h2>
      <div className="imgcontainer">
        <img
          src={`https://source.unsplash.com/random/400×400/?${animalName}`}
          alt={`Photo of ${animalName}`}
        />
      </div>
    </>
  );
};

export default AnimalPage;
