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
import { Question } from './src/components/Question';

import Start from './src/screens/Start';
import { Result } from './src/screens/Result';
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
              name={`Questions`}
              component={Question}
              options={{
                headerShown: false,
              }}
            />{' '}
            <Stack.Screen
              name='Result'
              component={Result}
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
