describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('input[placeholder="Name*"]').type("John Doe")
    cy.get('input[placeholder="Email*"]').type("John@Doe.com")
    cy.get('input[placeholder="Subject*"]').type("A cool subject")
    cy.get('textarea[placeholder="Message*"]').type("This is a test!")
    cy.get('button[type="submit"]').click()
  })
})