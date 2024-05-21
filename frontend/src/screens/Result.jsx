import React, { useCallback, useMemo, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import { H2, H4, Image, Stack, Text, Heading, Button, H5 } from 'tamagui';

export function Result({ navigation }) {
  return (
    <SafeAreaView flex={1}>
      <Stack>
        <H2 textAlign='center' mt={30}>
          <Text>도파민 중독 '</Text>
          <Text color='red'>주의</Text>
          <Text>' 수준입니다.</Text>
        </H2>
        <Image
          source={{ uri: require('../assets/img/result.png') }}
          width={270}
          height={380}
          mt={50}
          alignSelf='center'
        />

        <Heading alignSelf='center' textAlign='center' w={'90%'} mt={50}>
          <Text>
            영상을 보다 보면 시간이 훅!!{'\n'}도파밍의 AI 분석 서비스로{'\n'}
            당신의 도파민 디톡스를 시작해보세요!
          </Text>
        </Heading>
        <Stack w={'90%'} alignSelf='center' mt={30}>
          <Button
            theme='green'
            size='$6'
            onPress={() => {
              navigation.navigate('Home');
            }}
          >
            시작하기
          </Button>
        </Stack>
      </Stack>
    </SafeAreaView>
  );
}
