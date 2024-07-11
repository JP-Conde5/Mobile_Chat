import React from 'react';
import { View, ImageBackground } from 'react-native';
import { IBackground } from '../background1'
import { styles } from './style'


export function Background2({children}:IBackground){
    const background = require('../../assets/back2.png')
    return(
        <ImageBackground style={styles.container} source={background}>
            <View style={styles.background}>
                {children}
            </View>
        </ImageBackground>            
    );
}

