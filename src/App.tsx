/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './global.css';
import { StatusBar, useColorScheme, View, Text } from 'react-native';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View className="flex-1 item-center justify-center bg-red-600">
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Text className="text-3xl font-bold text-blue-500">
        Hello React Native and Web
      </Text>
      <Text className="text-lg text-white mt-4">Welcome to use it</Text>
    </View>
  );
}

export default App;
