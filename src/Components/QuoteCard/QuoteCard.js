import React from 'react'

export default function QuoteCard({ quote }) {
  return (
    <div className="quote-card">
      <h1>{quote.quoteText}</h1>
      <p>-{quote.quoteAuthor}</p>
    </div>
  )
}
