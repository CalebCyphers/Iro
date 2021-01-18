import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "../Home/Home";
import { getRandomQuote } from "../../apiCalls";

function App() {
  const [quote, setQuote] = useState({
    _id: "",
    quoteText: "",
    quoteAuthor: "",
    quoteGenre: "",
    __v: 0,
  });
  const [error, setError] = useState(false)

  const setDefaultQuote = () => {
    getRandomQuote()
      .then(response => setQuote(response))
      .catch(err => setError(true));
  };

  useEffect(() => {
    if (!quote.quoteText) {
      setDefaultQuote();
    }
  });

  return (
    <div className="App">
      {error && <h1>There was a problem loading the quote. Try again later.</h1>}
      <Home quote={quote} />
    </div>
  );
}

export default App;
