import { elements as el} from "./elements"

class Login{

    visitarPaginaLogin(){
        cy.visit('https://www.saucedemo.com/')
    }

    realizarLogin(){
        cy.get(el.username).type("standard_user")
        cy.get(el.password).type("secret_sauce")
        cy.get(el.loginButton).click()
    }

    realizarLoginComUsuarioInvalido(){
        cy.get(el.username).type("usuario")
        cy.get(el.password).type("senha")
        cy.get(el.loginButton).click()
    }

    errorLoginInvalido(){
        cy.get(el.error).should('contain.text', 'Username and password do not match any user in this service')  
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.screenshot('login-falha')
    }

}

export default new Login()