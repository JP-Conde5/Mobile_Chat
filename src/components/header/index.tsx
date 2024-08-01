import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './style';
import {Title} from '../title';

export function Header(){
    const title = require('../../assets/titulo.png');
    return( 
        <View style={styles.container}>
            <Title/>
        </View>
    )
}