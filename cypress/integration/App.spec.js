describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it("should display a loading message before the api call resolves", () => {
    cy.contains("Loading...")
  })

  it("should render two links, two buttons, a quote and an author on pageload", () => {
    cy.get('nav').contains('Home')
    cy.get('nav').contains('My Quotes')
    cy.get('button').contains('Save')
    cy.get('button').contains('Next')
    cy.contains('-')
    cy.should('not.contain', 'Loading...')
  })

  it("should have an error message before any quotes are added", () => {
    cy.get('nav').contains('My Quotes').click()
    cy.contains('You haven\'t saved any quotes... once you do, they\'ll show up here.')
  })

  it("should display saved quotes on the My Quotes page after the save button is clicked", () => {
    cy.get('nav').contains('My Quotes').click()
    cy.contains('You haven\'t saved any quotes... once you do, they\'ll show up here.')
    cy.get('nav').contains('Home').click()
    cy.contains('-')
    cy.get('button').contains('Save')
    cy.get('nav').contains('My Quotes').click()
    cy.should('not.contain', 'You haven\'t saved any quotes... once you do, they\'ll show up here.')
  })
})