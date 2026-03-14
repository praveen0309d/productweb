import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import AboutUs from "./components/About.js";
import Chatbot from "./components/Chatbot.js";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
    <Analytics/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Chatbot />
    </>
  );
}

export default App;