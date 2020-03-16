describe('Testing Micro Route', function() {
it('tests start an adventure route: micro', function() {
    window.cy.visit('http://localhost:3000/#/')
  
    window.cy.contains('Adventure').click()

    window.cy.contains("Micro").click()

    window.cy.url().should('include', 'Micro#/')
    
    window.cy.contains("Dive").click()

    window.cy.url().should('include','Ocean#/')
})

})