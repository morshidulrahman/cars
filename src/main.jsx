import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/routes/route.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-7xl mx-auto container px-4 md:px-6">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
