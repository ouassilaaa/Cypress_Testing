describe('Mes tests', () => {
  it('addition', () => {
    cy.visit('http://localhost/Testing')

    //recupereer input
    cy.get('#nbr1').type(10)
    cy.get('#nbr2').type(25)
    cy.get('#bt').click()

    //verifier des paragraphes
    cy.get('#result').should("contain", "Le résultat est égal à : 30")

  }),
  it('not passes', () => {
    cy.visit("http://localhost:8080/calc/index2.html")
    cy.get('#bt').click()
    cy.get('#result').should("contain", "Les champs sont vides")
  })
})