import React from 'react'

export default function Home({ quote }) {
  return (
    <section className="Main-quote-display">
      <p>{quote.quoteText}</p>
      <p>-{quote.quoteAuthor}</p>
    </section>
  );
}
