import React, { useState } from "react";
import "./style.css";
import Navbar from "./Components/Navbar";
import NewBoard from "./Components/NewsBoard";
import FavoritesPage from "./Components/FavoritesPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoriteProvider } from "./FavoriteContext";

export default function App() {
  const [category, setCategory] = useState("general");

  return (
    <FavoriteProvider>
      <Router>
        <Navbar setCategory={setCategory} />
        <Routes>
          <Route path="/" element={<NewBoard category={category} />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </Router>
    </FavoriteProvider>
  );
}
