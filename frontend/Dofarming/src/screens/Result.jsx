import React, { useCallback, useMemo, useRef } from 'react';
import { SafeAreaView } from 'react-native';
import { H2, H4, Image, Stack, Text, Heading } from 'tamagui';

export function Result() {
  return (
    <SafeAreaView flex={1}>
      <Stack>
        <Heading textAlign='center'>
          <Text>도파민 중독 '</Text>
          <Text color='red'>주의</Text>
          <Text>' 수준입니다.</Text>
        </Heading>
        <Image
          source={{ uri: require('../assets/img/result.png') }}
          width={270}
          height={380}
          alignSelf='center'
        />
        <H4>
          Dofarming의 AI 분석 서비스를 통해{'\n'}
          도파밍 디톡스를 시작해보세요!
        </H4>
      </Stack>
    </SafeAreaView>
  );
}
