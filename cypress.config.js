const { defineConfig } = require("cypress");
// const path = require('path');
// const fs = require('fs');



module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    
    },
    testIsolation:false,
    baseUrl:'https://hom.appposto.com.br/',
    downloadsFolder: 'cypress/downloads',
    pageLoadTimeout: 60000, // Aumenta o tempo limite de carregamento da página
    
  },
});
