const dados = {
  nome:'lucasmds',
  nomecompleto :'Lucas Monteiro de Sousa',
}

describe('Usuario_funcionario', () => {


  it('Limpando o Cache _ para login', () => {
    cy.limparCache({ log: false });
  });

  it('login', () => {
    cy.login('sinapse', 'Acs@2410', 'paraiso');
  });

  it('Criando usuario', () => {

    cy.visit('cadastros/usuarios/create')    // Exemplo de preenchimento com Cypress
    cy.get('[formControlName="nome"]').clear().type(dados.nomecompleto);
    cy.get('[formControlName="login"]').clear().type(dados.nome);
    cy.get('[formcontrolname="senha"]').clear().type(dados.nome);
    cy.get('[formcontrolname="confirmaSenha"]').clear().type(dados.nome);
    cy.get('.panel-content > .form-group.ng-untouched > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon')
      .click();
    cy.get('#dialogs_search > #div-modal-dialog > #div-modal-content > #div-modal-body > table_data-simple > acs-data-table > table_filter-default > #div-d-flex > #form-field-pesquisar > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #input-pesquisar')
      .clear().type('dmin');
    cy.get('#dialogs_search > #div-modal-dialog > #div-modal-content > #div-modal-body > table_data-simple > acs-data-table > table_filter-default > #div-d-flex > #form-field-pesquisar > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > #button-search > .mat-button-wrapper > #icon-search')
      .click();
    cy.get('#td-descricao').click();
    cy.get('#salvar-button').click();
    cy.location('pathname', { timeout: 5000 }).then((path) => {
    if (path.includes('cadastros/usuarios/create')) {
      cy.log(' ERRO NO CADASTRO DE usuarios');
      cy.screenshot('cadastro-usuarios-erro');
    } else {
      cy.log('usuarios cadastrado com sucesso!');
    }
  });
    
  });


  it('Criando funcionario', () => {

    cy.visit('cadastros/funcionarios/create')    // Exemplo de preenchimento com Cypress
    cy.get('#mat-input-2').clear().type(dados.nomecompleto);
    cy.get('#mat-input-3').clear().type(dados.nome);
    cy.get('#mat-input-13').clear().type('60040-540');
    cy.get('.panel-content > .form-group.ng-untouched > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-focus-indicator > .mat-button-wrapper > .mat-icon')
      .click();
    cy.get('#dialogs_search > #div-modal-dialog > #div-modal-content > #div-modal-body > table_data-simple > acs-data-table > table_filter-default > #div-d-flex > #form-field-pesquisar > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #input-pesquisar')
      .clear().type(dados.nomecompleto);
    cy.get('#dialogs_search > #div-modal-dialog > #div-modal-content > #div-modal-body > table_data-simple > acs-data-table > table_filter-default > #div-d-flex > #form-field-pesquisar > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > #button-search > .mat-button-wrapper > #icon-search')
      .click();
    cy.get(':nth-child(1) > #td-nome').should('contain.text', dados.nomecompleto).click();
    cy.get('#mat-input-21').clear().type('85988999882');
    cy.get('#mat-input-25').clear().type('60001646370');
    cy.get('#salvar-button').click();
    cy.location('pathname', { timeout: 5000 }).then((path) => {
    if (path.includes('cadastros/funcionarios/create')) {
      cy.log('ERRO NO CADASTRO DE FUNCIONÁRIO');
      cy.screenshot('cadastro-funcionario-erro');
    } else {
      cy.log(' Funcionário cadastrado com sucesso!');
    }
  });
    
  });

  // it('Limpando o Cache _ Final do programa', () => {
  //   cy.limparCache({ log: true, tempoEspera: 500 });
  // });



})
