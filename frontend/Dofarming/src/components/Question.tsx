import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import {
  Button,
  H3,
  Image,
  Paragraph,
  Progress,
  Stack,
  YStack,
  XStack,
  SizeTokens,
  Input,
  TextArea,
  Slider,
} from 'tamagui';

export function ProgressDemo({ progress }) {
  return (
    <>
      <YStack marginTop={40} height={20} alignItems='center' space>
        <Paragraph height={30} opacity={0.5}>
          {`${progress}/10`}
        </Paragraph>
        <Progress value={progress * 10}>
          <Progress.Indicator animation='slow' />
        </Progress>
      </YStack>
      <XStack
        alignItems='center'
        space
        position='absolute'
        bottom='$3'
        left='$4'
        $xxs={{ display: 'none' }}
      >
        {/* <Button
          size='$2'
          onPress={() => setProgress((prev) => (prev + 20) % 100)}
        >
          Load
        </Button> */}
      </XStack>
    </>
  );
}

export function QuestionPage({
  question,
  imageUri,
  buttons,
  navigation,
  nextScreen,
  index,
}) {
  console.log('index', index);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Stack width={380} height={180}>
          <H3 marginTop={80} textAlign='center'>
            {question}
          </H3>
        </Stack>
        <Stack alignSelf='center' width={380} height={230}>
          <Image source={{ uri: imageUri }} alignSelf='center' />
        </Stack>
        <Stack marginTop={50}>
          {buttons.map((button, index) => (
            <Button
              key={index}
              theme='green'
              height={60}
              width={300}
              alignSelf='center'
              marginBottom={20}
              onPress={() => {
                navigation.navigate(nextScreen);
              }}
            >
              {button}
            </Button>
          ))}
        </Stack>
      </SafeAreaView>
    </View>
  );
}

export const pagesData = [
  {
    question: '술, 담배, 게임, SNS 중에\n한 가지 이상이 습관이다 !?',
    imageUri: require('../assets/img/question1_img.png'),
    buttons: [
      '음, 가끔 하는 정도!',
      '좋아하고, 꽤 자주 하는 편이다!',
      '저 중 하나는 매일 꼭 한다. 없으면 못 살아요 ㅜㅜ',
    ],
    nextScreen: 'Q2',
  },
  {
    question:
      '집중력 무슨 일..?\n나도 혹시 성인 ADHD가 아닌지\n고민했던 적이 있다 ?!',
    imageUri: require('../assets/img/question2_img.png'),
    buttons: [
      '그 정도는 아니다 !',
      '한 번쯤 생각해본 적은 있다!',
      '한 곳에 오래 집중 못하는 거,, 딱 난데 !?',
    ],
    nextScreen: 'Q3',
  },
  {
    question: '우울하거나 스트레스 받을 때\n 나의 행동은?',
    imageUri: require('../assets/img/question3_img.png'),
    buttons: [
      '잠자거나 맛있는 걸 먹는다 !',
      '잠수타고 유튜브나 넷플릭스 하루종일 보기 !',
      '다른 생산적인 일을 찾아본다 !',
    ],
    nextScreen: 'Q4',
  },
  {
    question: '릴스, 숏츠, 틱톡 같은\n숏폼 콘텐츠를 많이 본다 ?!',
    imageUri: require('../assets/img/question4_img.png'),
    buttons: [
      '숏폼은 내 취향은 아님 ~ ㅋ',
      '한 번씩 심심할 때 보는 듯 ㅎㅎ',
      '재밌어서 좋아해! 자주 보는 거 같아 ㅎㅎ',
      '없으면 무슨 낙으로 살아???? 매일 봐줘야지 ㅋ',
    ],
    nextScreen: 'Q5',
  },
  {
    question: '폭력이나 욕설, 약물이 등장하는\n콘텐츠 즐기는 편이다 !?',
    imageUri: require('../assets/img/question5_img.png'),
    buttons: [
      '자극적인 거 보는 거 힘든 편 ㅜㅜ',
      '좋아하진 않지만 누가 재밌다하면 보는 정도!',
      '더 글로리, 오징어 게임 다 완전 내 스타일! 찾아서 봐야지 !!',
    ],
    nextScreen: 'Q6',
  },
  // ... 다른 페이지 데이터 추가 ...
  {
    question:
      '한국인은 못 참지… ㅋ\n동영상 원배속으로 잘못보고,\nN 배속은 기본 ~ ㅋㅋ',
    imageUri: require('../assets/img/question6_img.png'),
    buttons: [
      '굳이? 나는 원래대로 볼래 ~',
      '인트로 건너 뛰는 정도?',
      '나야 나 ~ 드라마도 요약본 더 좋아함 ㅋ',
    ],
    nextScreen: 'Q7',
  },
  {
    question: '스마트폰 때문에 직장이나 학교에서\n문제가 된 적이 있다?!',
    imageUri: require('../assets/img/question7_img.png'),
    buttons: [
      '집중할 때는 폰 잘 안보는 편 ㅋ',
      '그런 것 같기도 ? 한 번 보면 시간 순삭 ㅋ',
      '누가 내 얘기를,, ? 자습 시간이나 업무 시간 중에 1시간 이상 봐요..ㅜ',
    ],
    nextScreen: 'Q8',
  },
  {
    question: '본인의 가장 큰 문제점이\n뭐라고 생각하나요 ?',
    imageUri: require('../assets/img/question8_img.png'),
    buttons: ['입력 완료!'],
    nextScreen: 'Q9',
  },
  {
    question: '요즘 내가 가장 즐겨 사용하는 앱이\n무엇인가요 ?',
    imageUri: require('../assets/img/question9_img.png'),
    buttons: ['입력 완료!'],
    nextScreen: 'Q10',
  },
  {
    question: '여가 시간에 주로 뭘 하면서\n시간을 보내나요 ?',
    imageUri: require('../assets/img/question10_img.png'),
    buttons: ['입력 완료!'],
    nextScreen: 'Home',
  },
];

const styles = StyleSheet.create({
  container: {},
  content: {
    fontSize: 20,
    alignSelf: 'center',
    margin: '1%',
  },
});
