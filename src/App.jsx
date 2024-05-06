import Root from "./Root";
import AnimalsDisplay from "./routes/AnimalsDisplay";
import BirdsDisplay from "./routes/BirdsDisplay";
import CategoryPage from "./routes/CategoryPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";
import { useState } from "react";
import { animals, birds, insects } from "./animalsList";

function App() {
  const [zoo, setZoo] = useState({ animals, birds, insects });

  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    {
      path: "/",
      // errorElement: <ErrorPage />,
      element: <Root />,
      children: [
        { path: ":category", element: <CategoryPage {...zoo} /> },
        // Add about page here
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
