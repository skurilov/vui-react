import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import image from '@rollup/plugin-image';
import strip from 'rollup-plugin-strip';
import path from 'path';
import fs from 'fs';

const packageJson = require('./package.json');

// Get all component directories
const componentsDir = path.resolve(__dirname, 'src/components');
const components = fs.readdirSync(componentsDir).filter((name) => {
  const isDir = fs.statSync(path.join(componentsDir, name)).isDirectory();
  return isDir && fs.existsSync(path.join(componentsDir, name, 'index.ts'));
});

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extensions: ['.css', '.scss'],
        use: [
          [
            'sass',
            {
              includePaths: ['./src/styles'],
            },
          ],
        ],
      }),
      json(),
      image(),
      strip({
        debugger: true,
        functions: ['console.*', 'assert.*'],
        sourceMap: true,
      }),
      terser(),
    ],
    external: ['react', 'react-dom'],
    treeshake: {
      moduleSideEffects: false,
      propertyReadSideEffects: false,
      tryCatchDeoptimization: false,
    },
  },
  // Separate entry points for each component
  ...components.map((component) => ({
    input: `src/components/${component}/index.ts`,
    output: [
      {
        file: `dist/${component}/index.js`,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: `dist/${component}/index.esm.js`,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      postcss({
        extensions: ['.css', '.scss'],
        use: [
          [
            'sass',
            {
              includePaths: ['./src/styles'],
            },
          ],
        ],
      }),
      json(),
      image(),
      strip({
        debugger: true,
        functions: ['console.*', 'assert.*'],
        sourceMap: true,
      }),
      terser(),
    ],
    external: ['react', 'react-dom'],
    treeshake: {
      moduleSideEffects: false,
      propertyReadSideEffects: false,
      tryCatchDeoptimization: false,
    },
  })),
];
