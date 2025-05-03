describe('Carrinho', () => {

    beforeEach(() => {
        //Arrange
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })

    it('Adicionar produto ao carrinho', () => {
        //Act
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.screenshot('adicionar-produto-carrinho')
        //Assert
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Fleece Jacket')
    })

    it('Validar se carrinho contem elementos', () => {
        //Arrange
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        //Act
        cy.screenshot('validar-carrinho')
        //Assert
        cy.get('.cart_item').should('have.length', 1)
    })
})