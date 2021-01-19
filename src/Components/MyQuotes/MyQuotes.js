import React from 'react'

export default function MyQuotes({ savedQuotes }) {
  return (
    <section>
      {!savedQuotes[0] && <p>You haven't saved any quotes... once you do, they'll show up here.</p>}
      <p>{savedQuotes[0]}</p>
    </section>
  )
}
