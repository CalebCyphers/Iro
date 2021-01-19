import React from 'react'
import QuoteCard from '../QuoteCard/QuoteCard'
import PropTypes from 'prop-types';

export default function MyQuotes({ savedQuotes }) {

  const buildQuoteCards = (quotes) => {
    return quotes.map(quote => <QuoteCard key={quote._id} quote={quote} />)
  }

  return (
    <section>
      {!savedQuotes[0] && <p>You haven't saved any quotes... once you do, they'll show up here.</p>}
      {buildQuoteCards(savedQuotes)}
    </section>
  )
}

MyQuotes.propTypes = {
  savedQuotes: PropTypes.array
}
