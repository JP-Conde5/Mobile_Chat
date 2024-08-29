import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { ComponentTitle, ComponentFooter, ComponentBackground1 } from "../../components";
import { styles } from "./style";
import { MenuStackTypes } from "../../navigation/menuInitial.navigation";

export function Slide3({navigation}:MenuStackTypes){
    const padlock = require('../../assets/cadeado.png')
    const start = require('../../assets/start.png')
    return(
        <ComponentBackground1>
            <View style={styles.container}>
                <ComponentTitle/>
                <Image style={styles.image} source={padlock}/>
                <Text style={styles.text}>Suas mensagens são protegidas de ponto-a-ponta</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}><Image style={styles.image2} source={start}/></TouchableOpacity>
                <ComponentFooter navigation={navigation} page={3}/>
            </View>
        </ComponentBackground1>
    )
}