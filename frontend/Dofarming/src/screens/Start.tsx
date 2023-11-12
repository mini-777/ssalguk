import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Button, Card, CardProps, H1, H3, H4, Image } from 'tamagui';
import { Stack } from 'tamagui';

export default function Start({ navigation }) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <H1 marginTop={130} alignSelf='center' marginBottom={80}>
          도파밍 테스트
        </H1>
        <Image
          source={{ uri: require('../assets/img/main_img.png') }}
          width={240}
          height={165}
          alignSelf='center'
        />
        <Stack marginTop={50}>
          <Text style={styles.content}> 🧐 설마 나도 도파민 중독자??</Text>
          <Text style={styles.content}>
            내 전두엽 상태를 알아보는 도파민 테스트!
          </Text>
          <Button
            theme='green'
            height={60}
            width={200}
            alignSelf='center'
            marginTop={30}
            marginBottom={20}
            fontSize={20}
            onPress={() => {
              navigation.navigate('Questions');
            }}
          >
            시작하기
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
