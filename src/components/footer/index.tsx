import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { MenuScreenNavigation } from '../../navigation/MenuInitial.navigation';
import { styles } from './style';

export interface IFooter{
    navigation: MenuScreenNavigation
    page: number
}

export function Footer({navigation, page}:IFooter){
    const select = require('../../assets/select.png');
    const noselect = require('../../assets/noselect.png');
    return(
        <View style={styles.footer}>
            <TouchableOpacity onPress={()=>navigation.navigate("Slide1")}><Image source={page == 1 ? select : noselect}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Slide2")}><Image source={page == 2 ? select : noselect}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Slide3")}><Image source={page == 3 ? select : noselect}/></TouchableOpacity>
        </View>
    )
}