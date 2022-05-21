import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Stats from "./pages/Stats";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="stats" element={<Stats />} />
          <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
);