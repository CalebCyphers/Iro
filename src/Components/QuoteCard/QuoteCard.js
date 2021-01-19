import React from 'react'
import PropTypes from 'prop-types';
import './QuoteCard.css'

export default function QuoteCard({ quote }) {
  return (
    <div className="quote-card">
      <h1>{quote.quoteText}</h1>
      <p>-{quote.quoteAuthor}</p>
    </div>
  )
}

QuoteCard.propTypes = {
  quote: PropTypes.object
}
