describe('template spec', () => {
  it('passes', () => {
      cy.visit('http://localhost:8181/login/paraiso');
    cy.get('#username-input').clear().type('lucasm');
    cy.get('#password-input').clear().type('lucasm');
    cy.wait(500) 
    cy.xpath('/html/body/app-root/app-login/div/div/div/section[1]/div[2]/form/button').click();
    cy.wait(2000) // Espera 2 segundos
    cy.visit('http://localhost:8181/movimentos/livro-caixa');
      
      cy.wait(2000) // Espera 2 segundos
      cy.visit('http://localhost:8181/movimentos/livro-caixa/341');
      

      // cy.wait(2000) // Espera 2 segundos
      // cy.visit('http://localhost:8181/relatorios/operacional/relatorio-livro-caixa');


  })
})