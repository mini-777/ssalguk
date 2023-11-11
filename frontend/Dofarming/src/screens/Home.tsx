import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { H3, H4, Heading, ScrollView, Stack, YStack, XStack } from 'tamagui';
import {
  ScreenTimeCardTypeA,
  ScreenTimeCardTypeB,
} from '../components/ScreenTimeCard';
const Home = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '75%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <ScrollView>
          <Stack alignItems='center'>
            <YStack w={'87%'} justifyContent='center'>
              <Heading>스크린 타임 분석</Heading>

              <Heading>소비시간</Heading>
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
                  <ScreenTimeCardTypeB
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
                  <ScreenTimeCardTypeB
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
                </YStack>
                <YStack space>
                  <ScreenTimeCardTypeB
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
                  <ScreenTimeCardTypeB
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
          </Stack>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Home;
