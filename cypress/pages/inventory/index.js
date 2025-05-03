import { elements as el} from "./elements"

class Inventory {
    visitarPaginaInventario() {
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
        cy.screenshot('login-sucesso')
    }
}

export default new Inventory()