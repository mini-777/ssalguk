import { Button, Stack } from 'tamagui'
import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'
import { useFonts } from 'expo-font'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native'

export default function App() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      // can hide splash screen here
    }
  }, [loaded])

  if (!loaded) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <SafeAreaView flex={1}>
        <Stack>
          <Button>Hello world</Button>

        </Stack>

      </SafeAreaView>
    </TamaguiProvider>)
}


