import { View, Image, Text } from "react-native";
import React from "react";
import { ComponentTitle, ComponentFooter, ComponentBackground1 } from "../../components";
import { styles } from "./style";
import { MenuStackTypes } from "../../navigation/MenuStack.navigation";

export function Slide2({navigation}:MenuStackTypes){
    const network = require('../../assets/grupo.png')
    return(
        <ComponentBackground1>
        <View style={styles.container}>
            <ComponentTitle/>
            <Image style={styles.image} source={network}/>
            <Text style={styles.text}>Forme grupos ou se integre nos já existentes</Text>
            <ComponentFooter navigation={navigation} page={2}/>
        </View>
    </ComponentBackground1>
    )
}