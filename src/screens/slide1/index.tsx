import { View, Image, Text } from "react-native";
import React from "react";
import { ComponentTitle, ComponentFooter, ComponentBackground1 } from "../../components";
import { styles } from "./style";
import { MenuStackTypes } from "../../navigation/MenuInitial.navigation";

export function Slide1({navigation}:MenuStackTypes){

    const balon = require('../../assets/bate-papo.png')
    return(
        <ComponentBackground1>
            <View style={styles.container}>
                <ComponentTitle/>
                <Image style={styles.image} source={balon}/>
                <Text style={styles.text}>Converse com seus amigos de qualquer lugar</Text>
                <ComponentFooter navigation={navigation} page={1}/>
            </View>
        </ComponentBackground1>
    )
}