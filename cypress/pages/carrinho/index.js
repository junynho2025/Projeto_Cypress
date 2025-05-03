class Carrinho {
    clickarProduto() {
        cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
    }

    validarProduto() {
        cy.get('.inventory_item_name').should('contain.text', 'Sauce Labs Fleece Jacket')
    }

    validarItemCarrinho() {
        cy.get('.cart_item').should('have.length', 1)
        cy.screenshot('validar-carrinho')
    }
}

export default new Carrinho()