import babel from '@rollup/plugin-babel';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default {
  input: "./src/index.js",
  output: [
    {
      dir: "build",
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  external: [/@babel\/runtime/],
  preserveModules: true,
  plugins: [
    babel({
      presets: ['@babel/preset-react'],
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      plugins: [['@babel/transform-runtime', { regenerator: false, useESModules: true }]],
    }),
    peerDepsExternal(),
    resolve(),
    commonjs({
      include: /node_modules/,
    }),
    postcss({
      extract: false,
      modules: true,
      use: ["sass"],
    }),
  ],
};