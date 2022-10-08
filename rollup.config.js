const { nodeResolve } = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("rollup-plugin-typescript2");
const del = require("rollup-plugin-delete");
const postcss = require("rollup-plugin-postcss");

module.exports = {
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
    }),
    nodeResolve(),
    del({ targets: ["dist"], verbose: true, hook: "buildStart" }),
    commonjs(),
    postcss(),
  ],
};
