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
        <Image
          source={{
            uri: require('../assets/img/netflix_logo.png'),
          }}
          w={50}
          h={50}
          marginBottom={20}
        />
        <H4>1시간 30분</H4>
        <Paragraph theme='alt2'>YouTube</Paragraph>
      </Card.Header>

      <Card.Background></Card.Background>
    </Card>
  );
}
export function ScreenTimeCardTypeC(props: CardProps) {
  return (
    <Card elevate size='$4' bordered {...props} pt={5} backgroundColor={'#fff'}>
      <Card.Header padded>
        <XStack space={5}>
          <Stack justifyContent='center'>
            <Image
              source={{
                uri: require('../assets/img/ticktok_logo.png'),
              }}
              w={50}
              h={50}
              ml={-5}
            />
          </Stack>
          <YStack>
            <H4>1시간</H4>
            <Paragraph theme='alt2'>TikTok</Paragraph>
          </YStack>
        </XStack>
      </Card.Header>

      <Card.Background></Card.Background>
    </Card>
  );
}
export function ScreenTimeCardTypeD(props: CardProps) {
  return (
    <Card elevate size='$4' bordered {...props} pt={5} backgroundColor={'#fff'}>
      <Card.Header padded>
        <XStack space={5}>
          <Stack justifyContent='center'>
            <Image
              source={{
                uri: require('../assets/img/instagram_logo.png'),
              }}
              w={40}
              h={40}
            />
          </Stack>
          <YStack ml={5}>
            <H4>2시간</H4>
            <Paragraph theme='alt2'>Instagram</Paragraph>
          </YStack>
        </XStack>
      </Card.Header>
    </Card>
  );
}

export function ScreenTimeCardTypeE(props: CardProps) {
  return (
    <Card elevate size='$4' bordered {...props} pt={5} backgroundColor={'#fff'}>
      <Card.Header padded>
        <Image
          source={{
            uri: require('../assets/img/musinsa_logo.png'),
          }}
          w={50}
          h={50}
          marginBottom={10}
        />
        <H4>2시간</H4>
        <Paragraph theme='alt2'>무신사</Paragraph>
      </Card.Header>
    </Card>
  );
}
