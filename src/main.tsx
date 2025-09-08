// import React from 'react'
// import './index.css'
// import ReactDOM from 'react-dom/client'
// import { RouterProvider } from 'react-router-dom'
// import { route } from './Route/index.tsx'

// const rootElement = document.getElementById('root');
// if (rootElement) {
//   ReactDOM.createRoot(rootElement).render(
//     <React.StrictMode>
//       <RouterProvider router={route} />
//     </React.StrictMode>,
//   );
// } else {
//   throw new Error("Root element not found");
// }


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/index";
import PricingPage from "./Pricing/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
    </Router>
  );
}

export default App;

