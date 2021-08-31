context('Home Page Tests', () => {
  it('Should load Home Page in Portuguese', () => {
    cy.visit('http://localhost:3000/pt')
    cy.get('h2').contains('Novidades em Stock')
  })

  it('Should load Home Page in English', () => {
    cy.visit('http://localhost:3000/en')
    cy.get('h2').contains('New items now in stock')
  })
})
