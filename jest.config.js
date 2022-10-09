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
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  coverageReporters: ["lcov", "cobertura"],
};
