import React from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Pet from "./pages/Pets";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/pets" element={<Pet />} />
      </Routes>
    </Router>
  )
}



