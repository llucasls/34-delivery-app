const { defaults } = require('jest-config');

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js', 'jsx'],
  collectCoverageFrom: [
    "src/**/*.{js,jsx}"
  ],
  coveragePathIgnorePatterns: [
    "index.js",
    "serviceWorker.js",
    "reportWebVitals.js",
    "./services/renderWithRouter",
    "./services/history"
  ],
  testEnvironment: "jsdom"
};