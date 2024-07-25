import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { ComponentTitle, ComponentFooter, ComponentBackground1 } from "../../components";



export function Slide3({navigation} : LoginTypes){
    const padlock = require('../../assets/cadeado.png')
    const x = require('../../assets/x.png')
    function handleLogin(){
        navigation.navigate("Login")
    }
    return(
        <ComponentBackground1>
            <View>
                <ComponentTitle/>
                <Image source={padlock}/>
                <Text>Suas mensagens são protegidas de ponto-a-ponta</Text>
                <TouchableOpacity onPress={()=>}><Image source={x}/></TouchableOpacity>
            </View>
            <ComponentFooter page={3}/>
        </ComponentBackground1>
    )
}