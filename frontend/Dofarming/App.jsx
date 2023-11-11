import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import { useFonts } from 'expo-font';
import React from 'react';
import {
  NavigationContainer,
  useNavigation,
  DefaultTheme,
} from '@react-navigation/native';
import { Pressable } from 'react-native';
import { ChevronLeftIcon } from 'lucide-react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import {
  Page1,
  Page10,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
  Page9,
} from './src/components/Question';
import Start from './src/screens/Start';
const Stack = createNativeStackNavigator();

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => {
        if (navigation.canGoBack()) {
          navigation.goBack();
        }
      }}
    >
      <ChevronLeftIcon size={30} color={'black'} />
    </Pressable>
  );
};
const MainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });
  React.useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer theme={MainTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Stack.Navigator
            screenOptions={{
              headerLeft: HeaderLeft,
            }}
          >
            <Stack.Screen
              name='Start'
              component={Start}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Q1'
              component={Page1}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Q2'
              component={Page2}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Q3'
              component={Page3}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Q4'
              component={Page4}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Q5'
              component={Page5}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Q6'
              component={Page6}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Q7'
              component={Page7}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Q8'
              component={Page8}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Q9'
              component={Page9}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Q10'
              component={Page10}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='Home'
              component={Home}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </GestureHandlerRootView>
      </NavigationContainer>
    </TamaguiProvider>
  );
}
