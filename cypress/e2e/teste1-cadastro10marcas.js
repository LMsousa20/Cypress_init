describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://hom.appposto.com.br/login/posto-mirla-01');
    cy.get('#username-input').clear().type('admin');
    cy.get('#password-input').clear().type('admin');
    cy.wait(2000) // Espera 2 segundos
    cy.xpath('/html/body/app-root/app-login/div/div/div/section[1]/div[2]/form/button').click();
    cy.wait(2000) // Espera 2 segundos
    for (let i = 0; i < 10; i++) {
      cy.visit('https://hom.appposto.com.br/cadastros/marcas/create');
      cy.get('#input-descricao-criar-editar-marca').clear().type('Marca ' + i);
      cy.get('#salvar-button').click();
      cy.wait(1000) // Espera 1 segundo
    }
  })
})



