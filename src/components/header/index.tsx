import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style'

export function Header(){
    const title = require('../../assets/titulo.png');
    return( 
        <View style={styles.container}>
            <Text style={styles.title}>Chatzapp</Text>
        </View>
    )
}