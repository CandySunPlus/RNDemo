import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginCheckSyntax } from '@rsbuild/plugin-check-syntax';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import path from 'node:path';

const plugins = [
  pluginReact({
    swcReactOptions: {
      runtime: 'automatic',
      importSource: 'nativewind',
    },
  }),
  pluginTypeCheck(),
];

if (process.env.CHECK_SYNTAX) {
  plugins.push(pluginCheckSyntax());
}
export default defineConfig({
  plugins,
  source: {
    entry: {
      index: './index.js',
    },
  },
  resolve: {
    extensions: [
      '.web.tsx',
      '.tsx',
      '.web.ts',
      '.ts',
      '.web.jsx',
      '.jsx',
      '.web.js',
      '.js',
      '.css',
      '.json',
    ],
    alias: {
      'react-native': 'react-native-web',
    },
  },
});
