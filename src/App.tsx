import './global.css';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Text className="text-red-500">Build RN via Metro</Text>
      <Text className="text-red-500">Build RNW via Rsbuild</Text>
    </View>
  );
}
