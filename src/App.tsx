/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';

import './global.css';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View className="flex-1 item-center justify-center bg-red-600">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text className={"text-3xl font-bold text-blue-500"}> Hello React Native </Text>
      <Text> React Native for Web build by RsBuild </Text>
    </View>
  );
}


export default App;
