import React from "react";
import "./style.css";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import NewBoard from "./Components/NewsBoard";

export default function App() {
  const [category, setCategory] = useState("general");
  return (
    <div>
      <Navbar setCategory={setCategory} />
      <NewBoard category={category} />
    </div>
  );
}
