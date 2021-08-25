module.exports = {
  verbose: true,
  clearMocks: true,
  coverageDirectory: ".coverage",
  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/tests/**",
    "!**/coverage/**",
    "!jest.config.js",
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    "^@/components(.*)$": "<rootDir>/src/components$1",
    "^@/context(.*)$": "<rootDir>/src/context$1",
    "^@/hooks(.*)$": "<rootDir>/src/hooks$1",
    "^@/modules(.*)$": "<rootDir>/src/modules$1",
    "^@/services(.*)$": "<rootDir>/src/services$1",
  },
  setupFilesAfterEnv: ["./jest.setup.js"],
  testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["/.next/", "/node_modules/", "/coverage/", "/cypress/"],
  snapshotSerializers: ["@emotion/jest/serializer"],
};
