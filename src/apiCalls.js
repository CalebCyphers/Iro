const getRandomQuote = () => {
  return fetch('https://quote-garden.herokuapp.com/api/v3/quotes/random')
    .then(response => response.json())
}

export { getRandomQuote };