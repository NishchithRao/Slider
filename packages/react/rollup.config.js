const commonConfig = require("../../rollup.config");
const pkg = require("./package.json");

module.exports = {
  ...commonConfig,
  input: "./src/index.ts",
  output: [
    {
      file: pkg.module,
      format: "esm",
      exports: "named",
    },
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
    },
  ],
  external: ["react", "react-dom"],
};
