import { NavLink, Link, useParams } from "react-router-dom";
import { useState } from "react";

const Header = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");
  let { category } = useParams();

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
    search(searchInput, category);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   search(searchInput, category);
  // };

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
              <NavLink to="/fishes">Fishes</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <button>Reset</button>
        </form>
      </header>
    </>
  );
};

export default Header;
