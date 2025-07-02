describe('FORTES_AC', () => {

  it('Exportando o arquivos Fortes', () => {

    cy.login('admin', 'admin', 'ecoposto');
    cy.visit('opcoes/exportacao-de-arquivo/fortesac-fiscal');
    cy.wait(500);
    cy.get('#mat-input-5').clear().type('01062025');
    cy.get('#mat-input-6').clear().type('30062025');
    cy.get('#salvar-button').click();
    cy.get('#baixar_arquivo_fiscal_dialog > #div-modal-dialog > #div-modal-content > #div-modal-header > #exampleModalLabel')
      .should('contain', 'Arquivo Fortes AC gerado').then(() => {
        console.log('Arquivo Fortes AC gerado com sucesso!');
        cy.log('Arquivo Fortes AC gerado com sucesso!');

      });
    cy.wait(500);
    cy.get('.col-6 > .mat-focus-indicator').click();
    cy.wait(500);
    cy.get('.modal-footer-custom > .mat-focus-indicator').click();
    // cy.verifyDownload('...zip'); // Verifica se o download foi realizado com sucesso
    // Executa a ação que causa o download

    // Verifica o download e limpa
   

    // Usa credenciais padrão (admin/admin)
    // ou cy.login('outroUsuario', 'outraSenha');    
    // Restante do seu teste aqui
  });



})



