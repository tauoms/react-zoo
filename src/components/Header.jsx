import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <Link to="/">
          <h1>React Zoo</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/animals">Animals</NavLink>
            </li>
            <li>
              <NavLink to="/birds">Birds</NavLink>
            </li>
            <li>
              <NavLink to="/insects">Insects</NavLink>
            </li>
            <li>
              <NavLink to="/fishes">Fish</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <form>
          <input type="text" placeholder="Search..." />
          <button>Reset</button>
        </form>
      </header>
    </>
  );
};

export default Header;
