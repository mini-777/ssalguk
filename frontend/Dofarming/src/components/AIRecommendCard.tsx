import React from 'react';
import { Card, H3, XStack, YStack, Button, CardProps, Text, H4 } from 'tamagui';
import { CheckboxWithLabel } from './ToDoList';

export function AIRecommendCard(props: CardProps) {
  return (
    <Card elevate size='$4' bordered {...props} alignItems='center' w={'90%'}>
      <Card.Header>
        <XStack space={40} alignItems='center'>
          <H4>오늘의 추천 활동입니다 </H4>

          <Button width={75} height={40} variant='outlined'>
            ✨AI
          </Button>
        </XStack>
        <YStack marginTop='$5'>
          <Text> AI Text</Text>
        </YStack>
      </Card.Header>
      <Card.Footer>
        <XStack space margin={15}>
          <Button
            width='$12'
            borderRadius='$5'
            backgroundColor='darkgreen'
            color='white'
          >
            추가하기
          </Button>
          <Button width='$12' borderRadius='$5' marginRight='3%'>
            거절하기
          </Button>
        </XStack>
      </Card.Footer>
    </Card>
  );
}
