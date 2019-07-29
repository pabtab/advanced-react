describe('My first test', () => {
  it('webpage works', function () {
    cy.visit('/')
  })

  it('Navigate to a category and see photos', () => {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('Can navigate with the navbar to home', () => {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })

  it('No registered users see form to register and login', () => {
    cy.visit('/favs')
    cy.get('form').should('have.length', '2')
  })
})
