const { defineConfig } = require("cypress");
async function setupNodeEvents(on, config){
  return config
}
module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    specPattern : 'cypress/Integration/Assignment/*'
      // implement node event listeners here
    },
});
