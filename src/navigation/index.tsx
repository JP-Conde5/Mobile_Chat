import * as React from 'react';
import { MenuStack } from './MenuStack.navigation'
import { NavigationContainer } from '@react-navigation/native'

export function Navigation(){
    return(
        <NavigationContainer>
            <MenuStack/>
        </NavigationContainer>
    );
}