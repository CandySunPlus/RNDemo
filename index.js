/**
 * @format
 */

import { AppRegistry, Platform } from 'react-native';
import { StrictMode } from 'react';
import App from './src/App';
import { name as appName } from './app.json';

function SA() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

AppRegistry.registerComponent(appName, () => SA);

if (Platform.OS === 'web') {
  AppRegistry.runApplication(appName, {
    rootTag: document.getElementById('root'),
  });
}
