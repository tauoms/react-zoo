import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div id="HomePage">
      <div className="row">
        <div>
          <Link to="/animals" className="hplink">
            Animals
          </Link>

          <img
            src={`https://source.unsplash.com/random/600x600/?mammal`}
            alt={`Photo of a mammal`}
          />
        </div>
        <div>
          <Link to="/birds" className="hplink">
            Birds
          </Link>
          <img
            src={`https://source.unsplash.com/random/600x600/?bird`}
            alt={`Photo of a bird`}
          />
        </div>
      </div>
      <div className="row">
        <div>
          <Link to="/insects" className="hplink">
            Insects
          </Link>

          <img
            src={`https://source.unsplash.com/random/600x600/?insect`}
            alt={`Photo of an insect`}
          />
        </div>
        <div>
          <Link to="/fishes" className="hplink">
            Fish
          </Link>
          <img
            src={`https://source.unsplash.com/random/600x600/?fish`}
            alt={`Photo of a fish`}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
