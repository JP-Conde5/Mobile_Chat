import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { MenuStackTypes } from '../../navigation/MenuStack.navigation';


export function Footer({navigation, page}:MenuStackTypes){
    const select = require('../../assets/select.png');
    const noselect = require('../../assets/noselect');
    return(
        <View>
            <TouchableOpacity onPress={()=>navigation?.navigate("Slide1")}><Image source={page == 1 ? select : noselect}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation?.navigate("Slide2")}><Image source={page == 2 ? select : noselect}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation?.navigate("Slide3")}><Image source={page == 3 ? select : noselect}/></TouchableOpacity>
        </View>
    )
}