import {
  Button,
  Card,
  CardProps,
  H4,
  Image,
  Paragraph,
  Stack,
  XStack,
  YStack,
} from 'tamagui';

export function ScreenTimeCardTypeA(props: CardProps) {
  return (
    <Card elevate size='$4' bordered {...props} pt={5} backgroundColor={'#fff'}>
      <Card.Header padded>
        <Image
          source={{
            uri: require('../assets/img/youtube_logo.png'),
          }}
          w={50}
          h={35}
          marginBottom={20}
        />
        <H4>1시간 30분</H4>
        <Paragraph theme='alt2'>YouTube</Paragraph>
      </Card.Header>
    </Card>
  );
}
export function ScreenTimeCardTypeB(props: CardProps) {
  return (
    <Card elevate size='$4' bordered {...props} pt={5} backgroundColor={'#fff'}>
      <Card.Header padded>
        <XStack space={15}>
          <Stack justifyContent='center'>
            <Image
              source={{
                uri: require('../assets/img/youtube_logo.png'),
              }}
              w={50}
              h={35}
            />
          </Stack>
          <YStack>
            <H4>1시간</H4>
            <Paragraph theme='alt2'>YouTube</Paragraph>
          </YStack>
        </XStack>
      </Card.Header>

      <Card.Background></Card.Background>
    </Card>
  );
}
