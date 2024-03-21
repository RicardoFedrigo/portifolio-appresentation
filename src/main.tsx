import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/home"
import "./shared/styles/index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Mode } from "./pages/mode"
import { SinglePage } from "./pages/single-page"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mode />,
  },
  {
    path: "/cmd",
    element: <Home />,
  },
  {
    path: "/single",
    element: <SinglePage />,
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
