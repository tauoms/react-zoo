import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div id="HomePage">
      <Link to="/animals" className="hplink">
        Animals
      </Link>
      <Link to="/birds" className="hplink">
        Birds
      </Link>
      <img
        src={`https://source.unsplash.com/random/400x800/?mammal`}
        alt={`Photo of an animal`}
      />
      <img
        src={`https://source.unsplash.com/random/400x800/?bird`}
        alt={`Photo of a bird`}
      />
    </div>
  );
};

export default HomePage;
