import React from 'react'

export default function Home({ quote, saveQuote, newQuote }) {
  return (
    <section className="Home-quote-display">
      {quote.quoteText ? <h1>{quote.quoteText}</h1> : <h1>Loading...</h1>}
      {quote.quoteText && <p>-{quote.quoteAuthor}</p>}
      <button onClick={() => newQuote()}>Next</button>
      <button onClick={() => saveQuote(quote)}>Save</button>
    </section>
  );
}
