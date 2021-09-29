module.exports = {
  verbose: true,
  clearMocks: true,
  coverageDirectory: '.coverage',
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components$1',
    '^@/context(.*)$': '<rootDir>/src/context$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks$1',
    '^@/services(.*)$': '<rootDir>/src/services$1',
    '^@/styles(.*)$': '<rootDir>/src/styles$1',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  testPathIgnorePatterns: ['/.next/', '/node_modules/', '/coverage/', '/cypress/'],
  snapshotSerializers: ['@emotion/jest/serializer'],
}
