import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./routes/categories.jsx";
import Search from "./routes/search.jsx";
import MovieDetails from "./components/details/movie-details.jsx";
import { ModalContextProvider } from "./context/modal-context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <Categories />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalContextProvider>
      <RouterProvider router={router} />
    </ModalContextProvider>
  </React.StrictMode>
);
