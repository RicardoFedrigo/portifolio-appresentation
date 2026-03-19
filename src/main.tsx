import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/home"
import "./shared/styles/index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Landing } from "./pages/landing"
import { SinglePage } from "./pages/single-page"
import { NotFound } from "./pages/not-found"
import { AppLayout } from "./app-layout"

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "*", element: <Landing /> },
      { path: "/cmd", element: <Home /> },
      { path: "/single", element: <SinglePage /> },
      { path: "/not-found", element: <NotFound /> },
      { path: "/404", element: <NotFound /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
