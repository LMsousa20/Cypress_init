describe('Marcas', () => {
  it('passes', () => {

    cy.login();
   

    for (let i = 0; i < 10; i++) {
      let b = Number(i) + 9
      cy.visit('http://localhost:8181/cadastros/marcas/create');
      cy.get('#input-descricao-criar-editar-marca').clear().type('Marca ' + b);
      cy.get('#salvar-button').click();
      cy.wait(1000) // Espera 1 segundo
    }
  })
})



