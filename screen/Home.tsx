import React, { useState } from "react"
import { SafeAreaView, Text, TouchableOpacity, Button, TextInput } from "react-native"

const Home = ({ navigation }:any) => {

    function handleNavigation () {
        return navigation.navigate('Detail')
    }
    return(
        <SafeAreaView >
            <Text style = {{alignSelf: 'center'}}>안녕하세요! 테스트용으로 만들어본 화면 입니다.</Text>
            <Button title="개발자 정보" onPress={handleNavigation}><TouchableOpacity style = {{alignSelf: 'center'}}></TouchableOpacity></Button>
        </SafeAreaView>
    )
}

export default Home;