import Root from "./Root";
import CategoryPage from "./routes/CategoryPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import { useState } from "react";
import { animals, birds, insects, fishes } from "./animalsList";
import AboutPage from "./routes/AboutPage";
import AnimalPage from "./routes/AnimalPage";

function App() {
  const [zoo, setZoo] = useState({ animals, birds, insects, fishes });
  const [filteredData, setFilteredData] = useState(null);

  const likesHandler = (name, category, action) => {
    // console.log(name, category, action, `likesHandler button clicked`);
    setZoo((prevZoo) => ({
      ...prevZoo,
      [category]: prevZoo[category].map((el) =>
        el.name === name
          ? { ...el, likes: el.likes + (action === "add" ? 1 : -1) }
          : el
      ),
    }));
  };

  const removeHandler = (name, category) => {
    // console.log(name, category, `removeHandler button clicked`);
    setZoo((prevZoo) => ({
      ...prevZoo,
      [category]: prevZoo[category].filter((el) => el.name !== name),
    }));
  };

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
      const context = this;
      const args = arguments;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  };

  const search = debounce((searchInput, category) => {
    console.log("search triggered");
    setFilteredData(
      zoo[category].filter((el) =>
        el.name.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, 300);

  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/",
      // errorElement: <ErrorPage />,
      element: <Root search={search} />,
      children: [
        {
          path: ":category",
          element: (
            <CategoryPage
              addLike={likesHandler}
              removeLike={likesHandler}
              removeCard={removeHandler}
              {...zoo}
              filteredData={filteredData}
            />
          ),
        },
        { path: "/about", element: <AboutPage /> },
        {
          path: ":category/:name",
          element: <AnimalPage {...zoo} />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
