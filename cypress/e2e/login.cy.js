describe('Login Page', () => {
    it('Realizar login com sucesso', () => {
        //Arrange
        cy.visit('https://www.saucedemo.com/')
        //Act
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.screenshot('login-sucesso')
        //Assert
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        
    })

    it('Realizar login com usuário inválido', () => {
        //Arrange
        cy.visit('https://www.saucedemo.com/')
        //Act
        cy.get('[data-test="username"]').type('userInvalido')
        cy.get('[data-test="password"]').type('senhaerrada')
        cy.get('[data-test="login-button"]').click()
        cy.screenshot('login-falha')
        //Assert
        cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match any user in this service')  

        cy.url().should('eq', 'https://www.saucedemo.com/')
    })
})