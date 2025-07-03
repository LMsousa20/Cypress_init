// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username = 'admin', password = 'admin', tenantId = 'posto-mirla-01') => {
  cy.visit('/login/'+tenantId);
  cy.get('#username-input').clear().type(username);
  cy.get('#password-input').clear().type(password);
  cy.xpath('/html/body/app-root/app-login/div/div/div/section[1]/div[2]/form/button').click();
  cy.location('pathname').should('not.include', '/login')
  .then(() => {
    cy.log('Login realizado com sucesso!');
    console.log('Login realizado com sucesso!');
  })
  cy.wait(500);
    
  
});

Cypress.Commands.add('limparCache', (options = {}) => {
  const {
    tempoEspera = 100,
    log = true
  } = options;

  if (log) {
    cy.log('**Limpando cache**');
  }

  cy.clearCookies({ log });
  cy.clearLocalStorage({ log });
  
  if (tempoEspera > 0) {
    cy.wait(tempoEspera, { log });
  }
});

