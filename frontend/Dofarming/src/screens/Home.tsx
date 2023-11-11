import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { Heading, ScrollView, Stack, YStack } from 'tamagui';
import { Button, Card, CardProps, H2, Image, Paragraph, XStack } from 'tamagui';

function CardDemo() {
  return (
    <XStack $sm={{ flexDirection: 'column' }} paddingHorizontal='$4' space>
      <DemoCard
        animation='bouncy'
        size='$4'
        width={150}
        height={200}
        scale={0.9}
        hoverStyle={{ scale: 0.925 }}
        pressStyle={{ scale: 0.875 }}
      />
      <DemoCard size='$5' width={250} height={300} />
    </XStack>
  );
}

function DemoCard(props: CardProps) {
  return (
    <Card elevate size='$4' bordered {...props}>
      <Card.Header padded>
        <H2>Sony A7IV</H2>
        <Paragraph theme='alt2'>Now available</Paragraph>
      </Card.Header>
      <Card.Footer padded>
        <XStack flex={1} />
        <Button borderRadius='$10'>Purchase</Button>
      </Card.Footer>
      <Card.Background></Card.Background>
    </Card>
  );
}

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
          <YStack>
            <Heading>스크린 타임 분석</Heading>

            <Heading>소비시간</Heading>
            <CardDemo />
          </YStack>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Home;
