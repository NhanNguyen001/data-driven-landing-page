import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import AppLayout from "./AppLayout";
import Contact from "./ContactUs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
