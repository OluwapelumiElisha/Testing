
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../LandingPage";
import PricingPage from "../Pricing/index";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },{
    path: "/pricing",
    element: <PricingPage/>
  }
])