import { elements as el} from "./elements"

class checkout{

    clickCheckout(){
        cy.get('[data-test="checkout"]').click()
    }   
    
    preencherDados(){
        cy.get(el.firstName).type('Junior')
        cy.get(el.lastName).type('Dias')
        cy.get(el.postalCode).type('12345678')
        cy.get(el.continue).click()
        cy.screenshot('finalizar-compra')
    }

    validarCheckout(){
        cy.get('.summary_info').should('contain.text', 'Payment Information')
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('contain.text', 'Thank you for your order!')
        cy.url().should('eq', 'https://www.saucedemo.com/checkout-complete.html')
    }

}

export default new checkout()