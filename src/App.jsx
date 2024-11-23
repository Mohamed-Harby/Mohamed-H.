// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import "./styles/global.scss";
import AppRouter from "./components/AppRouter/AppRouter";

const App = () => (
  <BrowserRouter>
    <div className="app">
      <div className="background">
        <div className="top-section" />
      </div>
      <NavBar /> {/* Floating NavLinks remains as-is */}
      <div className="content-overlay">
        <main>
          {/* AppRouter handles routing between different sections */}
          <AppRouter />
        </main>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
