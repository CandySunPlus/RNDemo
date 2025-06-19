module.exports = {
  presets: [
    [
      'module:@react-native/babel-p1reset',
      { useTransformReactJSXExperimental: true },
    ],
    'nativewind/babel',
  ],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
        importSource: 'nativewind',
      },
    ],
  ],
};
