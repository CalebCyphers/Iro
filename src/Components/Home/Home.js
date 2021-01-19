import React from 'react'

export default function Home({ quote, saveQuote, newQuote }) {
  return (
    <section className="Home-quote-display">
      <p>{quote.quoteText}</p>
      <p>-{quote.quoteAuthor}</p>
      <button onClick={() => newQuote()}>Next</button>
      <button onClick={() => saveQuote(quote)}>Save</button>
    </section>
  );
}
