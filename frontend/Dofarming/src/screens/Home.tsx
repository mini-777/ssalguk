import React, { useCallback, useEffect, useMemo, useRef } from 'react';
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
  Separator,
  Spinner,
} from 'tamagui';
import {
  ScreenTimeCardTypeA,
  ScreenTimeCardTypeB,
  ScreenTimeCardTypeC,
  ScreenTimeCardTypeD,
  ScreenTimeCardTypeE,
} from '../components/ScreenTimeCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import Calendar from '../components/Calendar';
import { Layers } from '@tamagui/lucide-icons';
import { ToDoList } from '../components/ToDoList';
import { AIRecommendCard } from '../components/AIRecommendCard';
import axios from 'axios';
import { Rings } from '../components/Rings';

const Home = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [toDoListAi, setToDoListAi] = React.useState(null);
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

  useEffect(() => {
    axios
      .post('http://localhost:3000/api/ai/todolist', {
        date: selectedDate,
      })
      .then((res) => {
        console.log(res.data.answer.message.content);
        setToDoListAi(res.data.answer.message.content.text);
      });
  }, []);
  // renders
  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={styles.container}>
        <Stack flex={2}>
          <Calendar onSelectDate={setSelectedDate} selected={selectedDate} />
          <Rings />

          <Stack alignItems='center'>
            <Separator w={'85%'} />
          </Stack>
        </Stack>
        <Stack flex={3}>
          <Heading w={'90%'} alignSelf='center' mt={10}>
            To-Do List
          </Heading>
          <ToDoList />

          <YStack space alignItems='center'>
            {toDoListAi ? (
              <AIRecommendCard text={toDoListAi} />
            ) : (
              <Spinner size='small' color='$green10' />
            )}
            <Button theme='green' w={'90%'} onPress={handlePresentModalPress}>
              스크린 타임 분석하기
            </Button>
          </YStack>
        </Stack>

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
                    <ScreenTimeCardTypeE
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
                    <ScreenTimeCardTypeB
                      animation='bouncy'
                      size='$4'
                      width={160}
                      height={180}
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
                <Button alignSelf='center' size={'$7'} w={'100%'} theme='green'>
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
