import React from 'react'

export default function QuoteCard({ quote }) {
  return (
    <div className="quote-card">
      <p>{quote.quoteText}</p>
      <p>-{quote.quoteAuthor}</p>
    </div>
  )
}
