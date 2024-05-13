import { useParams, useLocation } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const CategoryPage = ({
  removeCard,
  removeLike,
  addLike,
  filteredData,
  ...rest
}) => {
  const { category } = useParams();
  const location = useLocation();
  const [search, setSearch] = useState("");

  useEffect(() => {
    setSearch("");
  }, [location]);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const categoryItems = rest[category];

  return (
    <>
      <div className="searcharea">
        <input
          id="searchbar"
          type="text"
          placeholder="Search..."
          onChange={searchHandler}
          value={search}
        />
        <button onClick={() => setSearch("")}>Reset</button>
      </div>
      <main>
        {categoryItems
          .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <Card
              key={item.name}
              name={item.name}
              {...item}
              removeCard={() => removeCard(item.name, category)}
              removeLike={() => removeLike(item.name, category, "remove")}
              addLike={() => addLike(item.name, category, "add")}
            />
          ))}
      </main>
    </>
  );
};

export default CategoryPage;
