import Login from "../pages/login/index.js" 
import Checkout from "../pages/realizar_compra/index.js"
import Carrinho from "../pages/carrinho/index.js"

describe('Realizar Compra', () => { 

        beforeEach(() => {
            //Arrange
            Login.visitarPaginaLogin()
            Login.realizarLogin()
        })

    it('Finalizar compra', () => {
        //Arrange
        Carrinho.clickarProduto()
        //Act
        Checkout.clickCheckout()
        Checkout.preencherDados()
        //Assert
        Checkout.validarCheckout()
        })  

})