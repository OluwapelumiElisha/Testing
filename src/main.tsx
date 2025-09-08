import React from 'react'
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { route } from './Route/index.tsx'

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      {/* <App /> */}
      <RouterProvider router={route} />
      
    </React.StrictMode>,
  );
} else {
  throw new Error("Root element not found");
}
