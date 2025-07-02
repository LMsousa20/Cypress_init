describe('SPED_ICMS', () => {

  it('Exportando o arquivos SPED_ICMS', () => {

    cy.login('admin', 'admin', 'ecoposto');
    cy.visit('opcoes/exportacao-de-arquivo/sped-icms');
    cy.wait(500);
    cy.get('#mat-input-4').clear().type('01062025');
    cy.get('#mat-input-5').clear().type('30062025');
    cy.get('#salvar-button').click();
    cy.wait(500);
    cy.get('#salvar-button').should('be.visible').click();
    cy.wait(500);
    cy.get('#baixar_arquivo_fiscal_dialog > #div-modal-dialog > #div-modal-content > #div-modal-header > #exampleModalLabel').should('contain', 'Arquivo SPED gerado').then(() => {
        console.log('Arquivo SPED gerado com sucesso!');
        cy.log('Arquivo SPED gerado com sucesso!');

      });
    cy.get('.col-6 > .mat-focus-indicator').click();
    cy.wait(500);
    cy.get('.modal-footer-custom > .mat-focus-indicator').click();
    // cy.verifyDownload('...zip'); // Verifica se o download foi realizado com sucesso
    // Executa a ação que causa o download
    
    // // Verifica o download e limpa
   

    // Usa credenciais padrão (admin/admin)
    // ou cy.login('outroUsuario', 'outraSenha');    
    // Restante do seu teste aqui
  });



})



