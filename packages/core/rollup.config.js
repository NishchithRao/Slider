const commonConfig = require("../../rollup.config");

export default {
  ...commonConfig,
  input: "./src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
  },
  external: [],
};
