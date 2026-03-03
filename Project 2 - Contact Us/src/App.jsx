import React from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div style={{ height: "100vh", width: "100%", overflowY: "hidden" }}>
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
