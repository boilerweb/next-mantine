const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  testMatch: null,
  testRegex: '(/__tests__/.*)\\.test\\.(tsx?)$',
  setupFiles: ['./jest-setup.js'],
};

module.exports = createJestConfig(customJestConfig);
