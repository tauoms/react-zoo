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

  const router = createBrowserRouter({
    basename: "/react-zoo",
    routes: [
      { path: "/", element: <HomePage /> },
      {
        path: "/",
        // errorElement: <ErrorPage />,
        element: <Root />,
        children: [
          {
            path: ":category",
            element: (
              <CategoryPage
                addLike={likesHandler}
                removeLike={likesHandler}
                removeCard={removeHandler}
                {...zoo}
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
    ],
  });

  return <RouterProvider router={router} />;
}

export default App;
