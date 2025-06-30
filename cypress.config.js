const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation:false,
    baseUrl:'http://localhost:8181/login/postoceara8',
  },
});
