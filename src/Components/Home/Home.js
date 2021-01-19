import React from 'react'

export default function Home({ quote }) {
  return (
    <section className="Home-quote-display">
      <p>{quote.quoteText}</p>
      <p>-{quote.quoteAuthor}</p>
    </section>
  );
}
