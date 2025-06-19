import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginCheckSyntax } from '@rsbuild/plugin-check-syntax';
import { pluginTypeCheck } from '@rsbuild/plugin-type-check';
import path from 'node:path';

const plugins = [pluginReact(), pluginTypeCheck()];

if (process.env.CHECK_SYNTAX) {
  plugins.push(pluginCheckSyntax());
}
export default defineConfig({
  plugins,
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
});
