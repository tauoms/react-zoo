import Root from "./Root";
import AnimalsDisplay from "./routes/AnimalsDisplay";
import BirdsDisplay from "./routes/BirdsDisplay";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/",
      // errorElement: <ErrorPage />,
      element: <Root />,
      children: [
        { path: "/animals", element: <AnimalsDisplay /> },
        { path: "/birds", element: <BirdsDisplay /> },
        // Add about page here
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
