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
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <form action="">
          <input type="text" />
          <button>Search</button>
        </form>
      </header>
    </>
  );
};

export default Header;
