const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterOptions: { // Corrigido o nome da chave
      mochaFile: 'cypress/reports/junit-results-[hash].xml',
      toConsole: true
    },
    cypressMochawesomeReporterOptions: { // Corrigido o nome da chave
      charts: true,
      reportPageTitle: 'Relatório de teste',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // Adiciona o plugin do cypress-mochawesome-reporter
      require('cypress-mochawesome-reporter/plugin')(on);
      return config; // Certifique-se de retornar a configuração
    },
  },
});
