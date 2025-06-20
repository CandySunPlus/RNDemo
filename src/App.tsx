import './global.css';
import { View, Button } from 'react-native';
import { Text } from './components';
import {
  LinkingOptions,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

type ParamList = {
  Home: undefined;
  Details: undefined;
  MyModal: undefined;
};

const linking: LinkingOptions<ParamList> = {
  prefixes: [],
  config: {
    screens: {
      Details: 'details',
      MyModal: 'modal',
    },
  },
};

function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Text className="text-red-500 p-1">Build RN via Metro</Text>
      <Text className="text-red-500 p-1">Build RNW via Rsbuild</Text>
      <View className="flex-row">
        <View className="p-2">
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
        <View className="p-2">
          <Button
            title="Open Modal"
            onPress={() => navigation.navigate('MyModal')}
          />
        </View>
      </View>
    </View>
  );
}

function DetailsScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        This is Details screen!
      </Text>
      <View className="p-2">
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

function ModalScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<ParamList>>();
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">Modal Screen!</Text>
      <View className="p-2">
        <Button title="Dismiss" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#f4511e' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="MyModal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer linking={linking}>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
