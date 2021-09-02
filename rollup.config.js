import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "main.js",
  output: {
    file: "dist/index.js",
    format: "umd",
  },
  plugins: [commonjs(), resolve()],
};
