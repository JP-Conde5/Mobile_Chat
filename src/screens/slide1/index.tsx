import { View, Image, Text } from "react-native";
import React from "react";
import { ComponentTitle, ComponentFooter, ComponentBackground1 } from "../../components";

export function Slide1(){
    const balon = require('../../assets/bate-papo.png')
    return(
        <ComponentBackground1>
            <View>
                <ComponentTitle/>
                <Image source={balon}/>
                <Text>Converse com seus amigos de qualquer lugar</Text>
            </View>
            <ComponentFooter page={2}/>
        </ComponentBackground1>
    )
}