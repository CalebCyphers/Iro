import React from 'react'

export default function Home({ quote, saveQuote, newQuote }) {
  return (
    <section className="Home-quote-display">
      {quote.quoteText ? <p>{quote.quoteText}</p> : <p>Loading...</p>}
      {quote.quoteText && <p>-{quote.quoteAuthor}</p>}
      <button onClick={() => newQuote()}>Next</button>
      <button onClick={() => saveQuote(quote)}>Save</button>
    </section>
  );
}
