import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "../Home/Home";
import NavBar from "../NavBar/NavBar"
import MyQuotes from "../MyQuotes/MyQuotes"
import { Route, Switch } from "react-router-dom"
import { getRandomQuote } from "../../apiCalls";

function App() {
  const [quote, setQuote] = useState({
    _id: "",
    quoteText: "",
    quoteAuthor: "",
    quoteGenre: "",
  });
  const [savedQuotes, setSavedQuotes] = useState([])
  const [error, setError] = useState(false)

  const setDefaultQuote = () => {
    getRandomQuote()
      .then(response => setQuote(response))
      .catch(err => setError(true));
  };

  const saveQuote = (newQuote) => {
    setSavedQuotes([...savedQuotes, newQuote])
  }

  useEffect(() => {
    if (!quote.quoteText) {
      setDefaultQuote();
    }
  });

  return (
    <div className="App">
      <NavBar />
      {error && <h1>There was a problem loading the quote. Try again later.</h1>}
      <Switch>
        <Route exact path="/" render={() => <Home quote={quote} saveQuote={saveQuote}/>}/>
        <Route exact path="/myquotes" render={() => <MyQuotes savedQuotes={savedQuotes}/>} />
        {/* <Route exact path="/newquote" render={} /> */}
      </Switch>
    </div>
  );
}

export default App;
