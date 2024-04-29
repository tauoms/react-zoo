import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1>React Animals</h1>
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
