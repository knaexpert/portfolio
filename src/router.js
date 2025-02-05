"use client";

import { ErrorBoundary } from "react-error-boundary";
import { Outlet, createHashRouter } from "react-router-dom";
import Skills from "./pages/Skills";
import Home from "./pages/Home";

const Layout = () => (
  <ErrorBoundary fallback={<div>Something went wrong</div>}>
    <Outlet />
  </ErrorBoundary>
);

export const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
    ],
  },
]);
