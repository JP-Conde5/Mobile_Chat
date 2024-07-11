import { View, Image, Text } from "react-native";
import React from "react";
import { ComponentTitle, ComponentFooter, ComponentBackground1 } from "../../components";

export function Slide3(){
    const padlock = require('../../assets/cadeado.png')
    return(
        <ComponentBackground1>
            <View>
                <ComponentTitle/>
                <Image source={padlock}/>
                <Text>Suas mensagens são protegidas de ponto-a-ponta</Text>
            </View>
            <ComponentFooter page={3}/>
        </ComponentBackground1>
    )
}