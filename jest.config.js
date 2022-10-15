module.exports = {
  collectCoverageFrom: [
    "packages/**/*.{js,ts,tsx}",
    "!node_modules",
    "!**/*.d.ts",
    "!src/stories/**",
    "!src/**/*.stories.*",
    "!.storybook/**",
  ],
  roots: ["packages"],
  moduleNameMapper: {
    "\\.(css|scss)$": "<rootDir>/__mocks__/stylemock.ts",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  coverageReporters: ["lcov", "cobertura"],
};
