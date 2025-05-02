🧪 Testes Automatizados com Cypress
Este projeto contém um conjunto de testes automatizados desenvolvidos com Cypress para validar o fluxo completo de compra em uma aplicação web, desde o login até a finalização da compra

📌 Tecnologias utilizadas
- Cypress para automação de testes end-to-end
- Node.js e npm para gerenciamento de dependências
- GitHub Actions (opcional) para execução de testes em CI/CD

🚀 Como configurar o ambiente
Antes de executar os testes, é necessário ter Node.js instalado.

1 - Clone este repositório:
git clone https://github.com/junynho2025/Projeto_Cypress.git

2 - Acesse a pasta do projeto:
https://github.com/junynho2025

3 - Instale as dependências:
npm install

🔬 Estrutura do Projeto
📂 cypress
 ├── 📂 e2e            # Testes end-to-end
 ├── 📂 fixtures       # Dados simulados para testes
 ├── 📂 support        # Comandos e funções auxiliares
 ├── cypress.config.js # Configuração do Cypress

🏁 Como executar os teste

Modo interativo (open mode)
Para rodar os testes no modo interativo:
npx cypress open
Isso abrirá o Cypress Test Runner, onde você pode visualizar os testes rodando no navegador.
imagens do teste rodando em modo Open:
![Image](https://github.com/user-attachments/assets/6bfbd854-f42a-41fc-b045-a03dbb8bf024)

Modo headless (run mode)
Para executar os testes no modo headless (sem interface gráfica)
npx cypress run
Os testes serão executados automaticamente e os resultados serão exibidos no terminal.
imagens do teste rodando em modo Run:
![Image](https://github.com/user-attachments/assets/482c4eef-a086-4cef-84ed-244d09e55f0b)

📋 Testes incluídos
O projeto cobre os seguintes cenários:
- ✅ Login: Testa autenticação de usuário com credenciais válidas e inválidas.
- ✅ Adição de produto ao carrinho: Valida a seleção de produtos.
- ✅ Finalização da compra: Simula o checkout e confirma a conclusão da compra.

📜 Contribuição
Caso queira contribuir para o projeto:
- Faça um fork deste repositório;
- Crie uma branch com sua feature:
- git checkout -b minha-feature

- Faça suas alterações e commit:
- git commit -m "Adicionando novo teste"

- Envie um pull request.
 
