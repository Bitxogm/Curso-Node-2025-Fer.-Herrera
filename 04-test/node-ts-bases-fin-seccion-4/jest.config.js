module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts', '**/*.spec.ts'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts}'],
};