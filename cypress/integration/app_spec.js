describe('Testing Navigation', function() {
    it('Visits the home page', function() {
        window.cy.visit('http://localhost:3000/#/')
      })
    it('tests About route', function() {
        window.cy.visit('http://localhost:3000/#/')
      
        window.cy.contains('About').click()

        window.cy.url().should('include', 'about#/')
    })
    it('tests FAQ route"', function() {
        window.cy.visit('http://localhost:3000/#/')
      
        window.cy.contains('FAQ').click()

        window.cy.url().should('include', 'faq#/')
    })
    it('tests contact route', function() {
        window.cy.visit('http://localhost:3000/#/')
      
        window.cy.contains('Contact').click()

        window.cy.url().should('include', 'Contact#/')
    })
    it('tests become an activist route', function() {
        window.cy.visit('http://localhost:3000/#/')
      
        window.cy.contains('Activist').click()

        window.cy.url().should('include', 'Activist#/')
    })
    it('tests start an adventure route: macro', function() {
        window.cy.visit('http://localhost:3000/#/')
      
        window.cy.contains('Adventure').click()

        window.cy.contains("Macro").click()

        window.cy.url().should('include', 'Macro#/')
    })
    it('tests start an adventure route: micro', function() {
        window.cy.visit('http://localhost:3000/#/')
      
        window.cy.contains('Adventure').click()

        window.cy.contains("Micro").click()

        window.cy.url().should('include', 'Micro#/')
    })
    it('tests start an adventure route: nano', function() {
        window.cy.visit('http://localhost:3000/#/')
      
        window.cy.contains('Adventure').click()

        window.cy.contains("Nano").click()

        window.cy.url().should('include', 'Nano#/')
    })
})

