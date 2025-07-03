const dados = {
  nome:'lucasmds',
  nomecompleto :'Lucas Monteiro de Sousa',
}

describe('LIVRO_CAIXA', () => {

     it('Limpando o Cache _ para login', () => {
  cy.limparCache({ log: false });
});
  

  it('login', () => {
    cy.login(dados.nome, dados.nome, 'paraiso');
  });


  it('livrocaixa', ()=> {
    cy.visit('http://localhost:8181/movimentos/livro-caixa')
    
    

  })





})



