const dados = {
  nome:'lucasmds',
  nomecompleto :'Lucas Monteiro de Sousa',
}

describe('FATURA CAIXA', () => {

     it('Limpando o Cache _ para login', () => {
  cy.limparCache({ log: false });
});
  

  it('login', () => {
    cy.login(dados.nome, dados.nome, 'lbrevendedora');
  });


  it('livrocaixa', ()=> {
    cy.visit('http://localhost:8181/financeiro/fatura-cartao')
    cy.get('#mat-input-2').clear().type('01012025')
    cy.get('[formControlName="situacaoFatura"]').click();
    cy.get('mat-option').contains('Quitadas').click();
    cy.get('[formControlName="dataUtilizada"]').click()
    cy.get('mat-option').contains('Emissão').click()
    cy.get('.col > .text-right > .mat-raised-button').click()

    

  })




  





})



