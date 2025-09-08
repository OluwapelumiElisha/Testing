// src/routes/index.js
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LandingPage";
import PricingPage from "../Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
]);

export default router;
