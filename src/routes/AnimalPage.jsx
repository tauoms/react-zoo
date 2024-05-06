import { useParams } from "react-router-dom";

const AnimalPage = ({ ...rest }) => {
  const params = useParams();
  const categoryItems = rest[params.category];
  const data = categoryItems.find((el) => el.name === params.name);

  return (
    <div id="AnimalPage">
      <h2>{data.name} Page</h2>
      <div className="imgcontainer">
        <img
          src={`https://source.unsplash.com/random/400×400/?${data.name}`}
          alt={`Photo of ${data.name}`}
        />
      </div>
    </div>
  );
};

export default AnimalPage;
