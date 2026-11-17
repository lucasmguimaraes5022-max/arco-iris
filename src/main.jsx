import React from "react";
import ReactDOM from "react-dom/client";
import { createRootRoute, createRoute, createRouter, Outlet, RouterProvider } from "@tanstack/react-router";
import Home from "@/routes/index";
import Privacy from "@/routes/privacidade";
import "@/index.css";

const rootRoute = createRootRoute({ component: () => <Outlet /> });
const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: "/", component: Home });
const privacyRoute = createRoute({ getParentRoute: () => rootRoute, path: "/privacidade", component: Privacy });
const routeTree = rootRoute.addChildren([homeRoute, privacyRoute]);
const router = createRouter({ routeTree, defaultPreload: "intent", scrollRestoration: true });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><RouterProvider router={router} /></React.StrictMode>
);
