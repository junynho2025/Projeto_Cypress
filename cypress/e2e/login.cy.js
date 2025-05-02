describe('Login Page', () => {
    it('Realizar login com sucesso', () => {
        //Arrange
        cy.visit('https://www.saucedemo.com/')
        //Act
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
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
        //Assert
        cy.get('[data-test="error"]').should('contain.text', 'Username and password do not match any user in this service')  

        cy.url().should('eq', 'https://www.saucedemo.com/')
    })

    it('Adicionar produto ao carrinho', () => {
        //Arrange
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        //Act
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        //Assert
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Fleece Jacket')
    })

    it('Validar se carrinho contem elementos', () => {
        //Arrange
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        //Act
        //Assert
        cy.get('.cart_item').should('have.length', 1)
    })

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
        //Assert
        cy.get('.summary_info').should('contain.text', 'Payment Information')
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('contain.text', 'Thank you for your order!')
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
    })
})