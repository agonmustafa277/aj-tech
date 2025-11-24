import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Datenschutz from './pages/Datenschutz'
import Impressum from './pages/Impressum'
import { BrowserRouter, Route, Routes } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
 <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/datenschutz" element={<Datenschutz />} />
    <Route path="/impressum" element={<Impressum />} />
  </Routes>
</BrowserRouter>
);
