import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {
  H3,
  H4,
  Heading,
  ScrollView,
  Stack,
  YStack,
  XStack,
  Button,
  H2,
} from 'tamagui';
import {
  ScreenTimeCardTypeA,
  ScreenTimeCardTypeB,
  ScreenTimeCardTypeC,
  ScreenTimeCardTypeD,
} from '../components/ScreenTimeCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import Calendar from '../components/Calendar';
import { Layers } from '@tamagui/lucide-icons';
const Home = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '75%'], []);
  const [selectedDate, setSelectedDate] = React.useState(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
        <Button onPress={handlePresentModalPress}>Show Modal</Button>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          style={{
            shadowColor: '#000',
            shadowOpacity: 0.15,
            shadowRadius: 8,
            backgroundColor: '#fff',
            borderRadius: 20,
          }}
        >
          <ScrollView>
            <Stack alignItems='center'>
              <YStack w={'87%'} justifyContent='center'>
                <Stack marginVertical={13}>
                  <H2>스크린 타임 분석</H2>
                </Stack>

                <XStack space={22}>
                  <YStack space>
                    <ScreenTimeCardTypeA
                      animation='bouncy'
                      size='$4'
                      width={160}
                      height={160}
                      scale={0.9}
                      hoverStyle={{ scale: 0.925 }}
                      pressStyle={{ scale: 0.955 }}
                      shadowColor='#000' // 그림자 색상
                      shadowOpacity={0.15} // 그림자의 투명도 (0에서 1 사이)
                      shadowRadius={8} // 그림자의 퍼짐 반경
                    />
                    <ScreenTimeCardTypeD
                      animation='bouncy'
                      size='$4'
                      width={160}
                      height={100}
                      scale={0.9}
                      hoverStyle={{ scale: 0.925 }}
                      pressStyle={{ scale: 0.955 }}
                      shadowColor='#000' // 그림자 색상
                      shadowOpacity={0.15} // 그림자의 투명도 (0에서 1 사이)
                      shadowRadius={8} // 그림자의 퍼짐 반경
                    />
                    <ScreenTimeCardTypeD
                      animation='bouncy'
                      size='$4'
                      width={160}
                      height={160}
                      scale={0.9}
                      hoverStyle={{ scale: 0.925 }}
                      pressStyle={{ scale: 0.955 }}
                      shadowColor='#000' // 그림자 색상
                      shadowOpacity={0.15} // 그림자의 투명도 (0에서 1 사이)
                      shadowRadius={8} // 그림자의 퍼짐 반경
                    />
                  </YStack>
                  <YStack space>
                    <ScreenTimeCardTypeC
                      animation='bouncy'
                      size='$4'
                      width={160}
                      height={100}
                      scale={0.9}
                      hoverStyle={{ scale: 0.925 }}
                      pressStyle={{ scale: 0.955 }}
                      shadowColor='#000' // 그림자 색상
                      shadowOpacity={0.15} // 그림자의 투명도 (0에서 1 사이)
                      shadowRadius={8} // 그림자의 퍼짐 반경
                    />
                    <ScreenTimeCardTypeA
                      animation='bouncy'
                      size='$4'
                      width={160}
                      height={160}
                      scale={0.9}
                      hoverStyle={{ scale: 0.925 }}
                      pressStyle={{ scale: 0.955 }}
                      shadowColor='#000' // 그림자 색상
                      shadowOpacity={0.15} // 그림자의 투명도 (0에서 1 사이)
                      shadowRadius={8} // 그림자의 퍼짐 반경
                    />
                  </YStack>
                </XStack>
              </YStack>
              <Stack marginTop={30} w={'90%'} marginBottom={50}>
                <Button alignSelf='center' icon={Layers} size={'$7'} w={'100%'}>
                  분석하기
                </Button>
              </Stack>
            </Stack>
          </ScrollView>
        </BottomSheetModal>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Home;
