import React from 'react'

export default function Home({ quote, saveQuote }) {
  return (
    <section className="Home-quote-display">
      <p>{quote.quoteText}</p>
      <p>-{quote.quoteAuthor}</p>
      <button onClick={() => saveQuote(quote)}>Save</button>
    </section>
  );
}
