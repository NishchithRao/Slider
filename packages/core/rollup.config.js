const commonConfig = require("../../rollup.config");
const pkg = require("./package.json");

export default {
  ...commonConfig,
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
    },
    {
      file: pkg.module,
      format: "esm",
      exports: "named",
    },
  ],
};
