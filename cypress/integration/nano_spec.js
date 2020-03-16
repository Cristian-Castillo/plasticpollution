describe('Testing Nano Route', function() {
    it('tests start an adventure route: nano', function() {
        window.cy.visit('http://localhost:3000/#/')
      
        window.cy.contains('Adventure').click()

        window.cy.contains("Nano").click()

        window.cy.url().should('include', 'Nano#/')

        window.cy.contains('Nano')
    })

})