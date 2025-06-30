describe('template spec', () => {
  it('passes', () => {
      // cy.visit('http://localhost:8181/login/acs-revenda-glp');
    cy.get('#username-input').clear().type('admin');
    cy.get('#password-input').clear().type('admin');
    cy.wait(500) 
    cy.xpath('/html/body/app-root/app-login/div/div/div/section[1]/div[2]/form/button').click();
    cy.wait(2000) // Espera 2 segundos
    
      cy.visit('http://localhost:8181/cadastros/funcionarios/create');


  })
})