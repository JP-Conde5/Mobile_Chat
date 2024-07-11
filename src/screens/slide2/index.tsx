import { View, Image, Text } from "react-native";
import React from "react";
import { ComponentTitle, ComponentFooter, ComponentBackground1 } from "../../components";

export function Slide2(){
    const network = require('../../assets/grupo.png')
    return(
        <ComponentBackground1>
            <View>
                <ComponentTitle/>
                <Image source={network}/>
                <Text>Forme grupos ou se integre nos já existentes</Text>
            </View>
            <ComponentFooter page={1}/>
        </ComponentBackground1>
    )
}