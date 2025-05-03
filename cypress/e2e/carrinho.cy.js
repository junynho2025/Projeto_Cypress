import Login from "../pages/login/index.js" 
import Carrinho from "../pages/carrinho/index.js"

describe('Carrinho', () => {

    beforeEach(() => {
        //Arrange
        Login.visitarPaginaLogin()
        Login.realizarLogin()
    })

    it('Adicionar produto ao carrinho', () => {
        //Act
        Carrinho.clickarProduto()
        //Assert
        Carrinho.validarProduto()
    })

    it('Validar se carrinho contem elementos', () => {
        //Act
        Carrinho.clickarProduto()
        //Assert
       Carrinho.validarItemCarrinho
    })
})