context('Home Page Tests', () => {
  it('Should load Home Page in Portuguese', () => {
    cy.visit('/pt')
    cy.get('h2').contains('Novidades em Stock')
  })

  it('Should load Home Page in English', () => {
    cy.visit('/en')
    cy.get('h2').contains('New items now in stock')
  })
})
