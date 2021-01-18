import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "../Home/Home"

function App() {
  const [quote, setQuote] = useState("");

  const setDefaultQuote = () => {

  }

  return <div className="App">
    <Home />
  </div>;
}

export default App;
