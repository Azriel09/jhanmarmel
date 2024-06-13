import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import HomeContainer from "./components/Home_container";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
