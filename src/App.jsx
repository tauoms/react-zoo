import Root from "./Root";
import AnimalsDisplay from "./pages/AnimalsDisplay";
import BirdsDisplay from "./pages/BirdsDisplay";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      // errorElement: <ErrorPage />,
      element: <HomePage />,
    },
    {
      path: "/",
      // errorElement: <ErrorPage />,
      element: <Root />,
      children: [
        { path: "/animals", element: <AnimalsDisplay /> },
        { path: "/birds", element: <BirdsDisplay /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
