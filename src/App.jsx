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

  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/",
      // errorElement: <ErrorPage />,
      element: <Root />,
      children: [
        { path: ":category", element: <CategoryPage {...zoo} /> },
        { path: "/about", element: <AboutPage /> },
        {
          path: "/animals/:animalName",
          element: <AnimalPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
