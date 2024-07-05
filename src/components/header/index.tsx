import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './style'

export function Header(){
    const title = require('../../assets/titulo') 
    return( 
        <View style={styles.container}>
            <Image source={title}/>        
        </View>
    )
}