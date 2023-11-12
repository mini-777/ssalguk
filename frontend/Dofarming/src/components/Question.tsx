import React, { useCallback, useMemo, useRef, useEffect, useState } from 'react';
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


export function ProgressDemo() {
  const [size, setSize] = useState(4)
  const [progress, setProgress] = useState(20)

  const sizeProp = `$${size}` as SizeTokens
  useEffect(() => {
    const timer = setTimeout(() => setProgress(10), 10)
    return () => {
      clearTimeout(timer)
    }

  }, [])
  return (

    <>
      <YStack marginTop = {40} height={20} alignItems="center" space>
        <Paragraph height={30} opacity={0.5}>
          1/10
        </Paragraph>
        <Progress size={sizeProp} value={progress}>
          <Progress.Indicator animation="bouncy" />
        </Progress>
      </YStack>
      <XStack
        alignItems="center"
        space
        position="absolute"
        bottom="$3"
        left="$4"
        $xxs={{ display: 'none' }}
      >
        <Slider
          size="$2"
          width={130}
          defaultValue={[4]}
          min={2}
          max={6}
          step={1}
          onValueChange={([val]) => {
            setSize(val)
          }}
        >

          <Slider.Track borderWidth={1} borderColor="$color5">
            <Slider.TrackActive />
          </Slider.Track>
          <Slider.Thumb circular index={0} />
        </Slider>
        <Button size="$2" onPress={() => setProgress((prev) => (prev + 20) % 100)}>
          Load
        </Button>
      </XStack>
    </>

  )

}


export function Page1({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Stack width = {380} height = {180}>
          <ProgressDemo/>
          <H3 marginTop={80} textAlign='center'>
            술, 담배, 게임, SNS 중에
            {'\n'} 한 가지 이상이 습관이다 !?
          </H3>
        </Stack>
        <Stack alignSelf='center' width = {380} height = {230}>
          <Image
            source={{ uri: require('../assets/img/question1_img.png') }}
            width={270}
            height={160}
            alignSelf='center'
            marginTop = {30}
          />
        </Stack>
        <Stack marginTop={50}>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q2');
            }}
          >
            음, 가끔 하는 정도!
          </Button>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q2');
            }}
          >
            좋아하고, 꽤 자주 하는 편이다!{' '}
          </Button>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q2');
            }}
          >
            저 중 하나는 매일 꼭 한다. 없으면 못 살아요 ㅜㅜ
          </Button>
        </Stack>
      </SafeAreaView>
    </View>
  );
}

export function Page2({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ProgressDemo />
        <Stack width = {380} height = {180} >
          <H3 marginTop={80} textAlign='center'>
            집중력 무슨 일..?
            {'\n'}나도 혹시 성인 ADHD가 아닌지 
            {'\n'}고민했던 적이 있다 ?!
          </H3>
        </Stack>
        <Stack alignSelf='center' width = {380} height = {230} backgroundColor='red'>
          <Image
            source={{ uri: require('../assets/img/question2_img.png') }}
            width={160}
            height={190}
            alignSelf='center'
            marginTop={15}
          />
        </Stack>
        <Stack marginTop={50}>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q3');
            }}
          >
            그 정도는 아니다 !
          </Button>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q3');
            }}
          >
            한 번쯤 생각해본 적은 있다!{' '}
          </Button>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q3');
            }}
          >
            한 곳에 오래 집중 못하는 거,, 딱 난데 !?
          </Button>
        </Stack>
      </SafeAreaView>
    </View>
  );
}

export function Page3({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ProgressDemo />
        <Stack width = {380} height = {180}>
          <H3 marginTop={80} textAlign='center'>
            우울하거나 스트레스 받을 때{'\n'} 나의 행동은?
          </H3>
        </Stack>
        <Stack alignSelf='center' width = {380} height = {230}>
          <Image
            source={{ uri: require('../assets/img/question3_img.png') }}
            width={230}
            height={170}
            alignSelf='center'
            marginTop={15}
          />
        </Stack>
        <Stack marginTop={50}>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q4');
            }}
          >
            잠자거나 맛있는 걸 먹는다 !
          </Button>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q4');
            }}
          >
            잠수타고 유튜브나 넷플릭스 하루종일 보기 !{' '}
          </Button>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q4');
            }}
          >
            다른 생산적인 일을 찾아본다 !
          </Button>
        </Stack>
      </SafeAreaView>
    </View>
  );
}

export function Page4({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ProgressDemo />
        <Stack width = {380} height = {180}>
          <H3 marginTop={80} textAlign='center'>
            릴스, 숏츠, 틱톡 같은{'\n'}숏폼 콘텐츠를 많이 본다 ?!
          </H3>
        </Stack>
        <Stack alignSelf='center' width = {380} height = {180}>
          <Image
            source={{ uri: require('../assets/img/question4_img.png') }}
            width={180}
            height={180}

            alignSelf='center'
          />
        </Stack>
        <Stack marginTop={50}>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q5');
            }}
          >
            숏폼은 내 취향은 아님 ~ ㅋ
          </Button>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q5');
            }}
          >
            한 번씩 심심할 때 보는 듯 ㅎㅎ
          </Button>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q5');
            }}
          >
            재밌어서 좋아해! 자주 보는 거 같아 ㅎㅎ
          </Button>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
          >
            없으면 무슨 낙으로 살아???? 매일 봐줘야지 ㅋ
          </Button>
        </Stack>
      </SafeAreaView>
    </View>
  );
}

export function Page5({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ProgressDemo />
        <Stack width = {380} height = {180}>
          <H3 marginTop={80} textAlign='center'>
            폭력이나 욕설, 약물이 등장하는{'\n'}콘텐츠 즐기는 편이다 !?
          </H3>
        </Stack>
        <Stack alignSelf='center' width = {380} height = {230}>
          <Image
            source={{ uri: require('../assets/img/question5_img.png') }}
            width={190}
            height={200}
            alignSelf='center'
          />
        </Stack>
        <Stack marginTop={50}>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q6');
            }}
          >
            자극적인 거 보는 거 힘든 편 ㅜㅜ
          </Button>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q6');
            }}
          >
            좋아하진 않지만 누가 재밌다하면 보는 정도!
          </Button>
          <Button
            theme='green'
            height={70}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q6');
            }}
          >
            <YStack alignItems='center'>
              <Text>더 글로리, 오징어 게임 다 완전 내 스타일!</Text>
              <Text>찾아서 봐야지 !!</Text>
            </YStack>
          </Button>
        </Stack>
      </SafeAreaView>
    </View>
  );
}

export function Page6({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ProgressDemo />
        <Stack width = {380} height = {180}>
          <H3 marginTop={80} textAlign='center'>
            한국인은 못 참지… ㅋ{'\n'}동영상 원배속으로 잘못보고,{'\n'}N 배속은
            기본 ~ ㅋㅋ
          </H3>
        </Stack>
        <Stack alignSelf='center' width = {380} height = {230}>
          <Image
            source={{ uri: require('../assets/img/question6_img.png') }}
            width={240}
            height={220}
            alignSelf='center'
            marginTop={15}
          />
        </Stack>
        <Stack marginTop={50}>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q7');
            }}
          >
            굳이? 나는 원래대로 볼래 ~
          </Button>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q7');
            }}
          >
            인트로 건너 뛰는 정도?
          </Button>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q7');
            }}
          >
            나야 나 ~ 드라마도 요약본 더 좋아함 ㅋ
          </Button>
        </Stack>
      </SafeAreaView>
    </View>
  );
}

export function Page7({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ProgressDemo />

        <Stack width = {380} height = {180}>
          <H3 marginTop={80} textAlign='center'>
            스마트폰 때문에 직장이나 학교에서
            {'\n'}문제가 된 적이 있다?!
          </H3>
        </Stack>
        <Stack alignSelf='center' width = {380} height = {230}>
          <Image
            source={{ uri: require('../assets/img/question7_img.png') }}
            width={240}
            height={190}
            alignSelf='center'
            marginTop = {15}
          />
        </Stack>
        <Stack marginTop={50}>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q8');
            }}
          >
            집중할 때는 폰 잘 안보는 편 ㅋ
          </Button>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q8');
            }}
          >
            그런 것 같기도 ? 한 번 보면 시간 순삭 ㅋ
          </Button>
          <Button
            theme='green'
            height={70}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q8');
            }}
          >
            <YStack alignItems='center'>
              <Text>누가 내 얘기를,, ?</Text>
              <Text>자습 시간이나 업무 시간 중에 1시간 이상 봐요..ㅜ</Text>
            </YStack>
          </Button>
        </Stack>
      </SafeAreaView>
    </View>
  );
}

export function Page8({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <ProgressDemo />

        <Stack width = {380} height = {180}>
          <H3 marginTop={80} textAlign='center'>
            본인의 가장 큰 문제점이{'\n'}뭐라고 생각하나요 ?
          </H3>
        </Stack>
        <Stack alignSelf='center' width = {380} height = {230}> 
          <Image
            source={{ uri: require('../assets/img/question8_img.png') }}
            width={200}
            height={190}
            alignSelf='center'
          />
        </Stack>
        <Stack marginTop={50}>
          <Stack>
            <TextArea alignSelf = 'center' size='$4'width = {350} marginBottom = {25}  placeholder="예) 계획을 세우기 어렵다. 스마트폰을 오래 사용한다." />
          </Stack>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q9');
            }}
          >
            입력 완료!
          </Button>
        </Stack>
      </SafeAreaView>
    </View>
  );
}

export function Page9({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Stack width = {380} height = {180} backgroundColor='red'>
        <ProgressDemo />
          
          <H3 marginTop={80} textAlign='center'>
            요즘 내가 가장 즐겨 사용하는 앱이{'\n'}무엇인가요 ?
          </H3>
        </Stack>
        <Stack alignSelf='center' width = {380} height = {230}> 
          <Image
            source={{ uri: require('../assets/img/question9_img.png') }}
            width={220}
            height={180}
            alignSelf='center'
          />
        </Stack>
        <Stack marginTop={50}>
          <Stack>
            <TextArea alignSelf = 'center' size='$4'width = {350} marginBottom = {25}  placeholder="예) 넷플릭스, 인스타그램" />
          </Stack>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Q10');
            }}
          >
            입력 완료!
          </Button>
        </Stack>
      </SafeAreaView>
    </View>
  );
}

export function Page10({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <ProgressDemo />

        <Stack width = {380} height = {180}>
          <H3 marginTop={80} textAlign='center'>
            {' '}
            여가 시간에 주로 뭘 하면서{'\n'}시간을 보내나요 ?
          </H3>
        </Stack>
        <Stack alignSelf='center' width = {380} height = {230}> 
          <Image
            source={{ uri: require('../assets/img/question10_img.png') }}
            width={240}
            height={165}
            alignSelf='center'
          />
        </Stack>
        <Stack marginTop={50}>
          <Stack>
            <TextArea alignSelf = 'center' size='$4' width = {350} marginBottom = {25}  placeholder="예) 넷플릭스로 드라마 정주행 하기, 무서운 영화보기" />
          </Stack>
          <Button
            theme='green'
            height={60}
            width={300}
            alignSelf='center'
            marginBottom={20}
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            입력 완료!
          </Button>
        </Stack>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  content: {
    fontSize: 20,
    alignSelf: 'center',
    margin: '1%',
  },
});
