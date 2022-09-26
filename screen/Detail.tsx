import React, { useState } from "react";
import { Text, SafeAreaView, TextInput, View, Button } from "react-native";

const Detail = () => {
    const [info, setInfo] = useState('');

    const information = [
        '이름 : 김상권',
        '회사 : FLEXWEB',
        '직무 : 백엔드 개발자', 
        '스택 : NestJs, Express, NodeJs, TypeOrm',
        'Graphql, Sequelize, AWS etc'
    ];

    const inputValue = () => {
        information.push(info);
        setInfo('')
    }

    return (
        <SafeAreaView >
            {information.map((item) => (
                <View>
                    <Text style={{alignSelf: 'center'}}>{item}</Text>
                </View>
            ))}
            <TextInput onChangeText={(e) => {
                setInfo(e)
                }} placeholder="추가할 내용을 입력해주세요."></TextInput>
            <Button title='입력하기' onPress={inputValue}></Button>
        </SafeAreaView>
    )
}

export default Detail;