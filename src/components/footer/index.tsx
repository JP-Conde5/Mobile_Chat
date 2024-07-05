import React from 'react';
import { page } from '../../../App.tsx';
import { View, Image } from 'react-native';

export function Footer(){
    const select = require('../../assets/select')
    const noselect = require('../../assets/noselect')
    return(
        <View>
            <Image source={page == 1 ? select : noselect}/>
            <Image source={page == 2 ? select : noselect}/>
            <Image source={page == 3 ? select : noselect}/>
        </View>
    )
}