const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('node:path');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = mergeConfig(getDefaultConfig(__dirname), {
  projectRoot: path.resolve(__dirname, './src'),
  watchFolders: [__dirname, path.resolve(__dirname, './src')],
  resolver: {
    nodeModulesPaths: [
      path.resolve(__dirname, './node_modules'),
    ]
  }
});
module.exports = withNativeWind(config, {input: './src/global.css'});
