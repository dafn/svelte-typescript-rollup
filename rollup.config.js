import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import html2 from "rollup-plugin-html2";
import svelte from "rollup-plugin-svelte";
import serve from "rollup-plugin-serve";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import livereload from "rollup-plugin-livereload";
import sveltePreprocessor from "svelte-preprocess";

const isDevelopment = process.env.NODE_ENV === "development";

const plugins = [
  svelte({
    dev: isDevelopment,
    extensions: [".svelte"],
    preprocess: sveltePreprocessor(),
    emitCss: true,
  }),
  postcss({
    extract: true,
  }),
  typescript(),
  commonjs({ include: "node_modules/**", extensions: [".js", ".ts"] }),
  resolve(),
  html2({
    template: "src/index.html",
  }),
];
if (isDevelopment) {
  plugins.push(
    serve({
      contentBase: "./dist",
      open: false,
    }),
    livereload({ watch: "./dist" })
  );
} else {
  plugins.push(terser({ sourcemap: true }));
}

module.exports = {
  input: "src/index.ts",
  output: {
    file: "dist/index.js",
    sourcemap: true,
    format: "iife",
  },
  plugins,
};
