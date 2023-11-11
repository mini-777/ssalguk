import React from 'react';
import { Card, H3, XStack, YStack, Button, CardProps, Text } from 'tamagui';
import { CheckboxWithLabel } from './ToDoList';

export function AIRecommendCard(props: CardProps) {
  return (
    <Card elevate size='$4' bordered {...props} alignItems='center' w={'90%'}>
      <Card.Header>
        <XStack>
          <H3 marginRight='$8'>오늘의 추천 활동입니다.</H3>
          <Button width='$5' height=' $4'>
            AI
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
            삭제하기
          </Button>
        </XStack>
      </Card.Footer>
    </Card>
  );
}
