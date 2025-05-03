import inventory from "../pages/inventory"
import Login from "../pages/login"  

describe('Login Page', () => {

    beforeEach(() => {
        //Arrange
        Login.visitarPaginaLogin()
    })

    it('Realizar login com sucesso', () => {
        //Act
        Login.realizarLogin()
        //Assert
        inventory.visitarPaginaInventario()
    })

    it('Realizar login com usuário inválido', () => {
        //Act
        Login.realizarLoginComUsuarioInvalido()
        //Assert
        Login.errorLoginInvalido()
    })
})