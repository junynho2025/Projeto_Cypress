describe('Realizar Compra', () => { 
    it('Finalizar compra', () => {
        //Arrange
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        //Act
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Junior')
        cy.get('[data-test="lastName"]').type('Dias')
        cy.get('[data-test="postalCode"]').type('12345678')
        cy.get('[data-test="continue"]').click()
        cy.screenshot('finalizar-compra')
        //Assert
        cy.get('.summary_info').should('contain.text', 'Payment Information')
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('contain.text', 'Thank you for your order!')
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
        })  

})