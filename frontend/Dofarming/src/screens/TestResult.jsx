import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import {H2, H4, Image} from 'tamagui';
import {Main} from './TestPage.jsx';

export function Result() {
    return (
        <View style={styles.container}>
            <H2 textAlign='center' marginTop={50} marginBottom={50}>도파민 중독 '주의' 수준입니다!</H2>
            <Image
                source={{ uri: require('../img/gaji.png') }}
                width={270}
                height={380}
                alignSelf='center'
            />
            <H4>Dofarming의 AI 분석 서비스를 통해{"\n"}
            도파밍 디톡스를 시작해보세요!</H4>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
});