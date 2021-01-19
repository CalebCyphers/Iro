import React from 'react'
import PropTypes from 'prop-types';
import './Home.css'

export default function Home({ quote, saveQuote, newQuote }) {
  return (
    <section className="Home-quote-display">
      {quote.quoteText ? <h1>{quote.quoteText}</h1> : <h1>Loading...</h1>}
      {quote.quoteText && <p>-{quote.quoteAuthor}</p>}
      <button className="home-button" onClick={() => newQuote()}>Next</button>
      <button className="home-button" onClick={() => saveQuote(quote)}>Save</button>
    </section>
  );
}

Home.propTypes = {
  quote: PropTypes.object,
  saveQuote: PropTypes.func,
  newQuote: PropTypes.func
}
