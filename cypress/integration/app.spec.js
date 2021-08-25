context('App', () => {
  it('should load our app and show content', () => {
    cy.visit('http://localhost:3000/pt')
    cy.get('h2').contains('Novidades em Stock')
  })
})