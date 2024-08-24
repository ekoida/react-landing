import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { ProductDetails } from "./domain/ProductDetails";
import { Layout } from "./layout/Layout";
import { Orders } from "./domain/Orders";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
