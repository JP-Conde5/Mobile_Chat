import * as React from 'react';
import { MenuInitial } from './MenuInitial.navigation'
import { MessageNavigation } from './message.navigation'
import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../hook';
import { ComponentLoading } from '../components';

export function Navigation(){
    const { user, loading } = useAuth()
    if(loading){
        return <ComponentLoading/>
    }
    return(
        <NavigationContainer>
            {user?.token ? <MenuInitial/> : <MessageNavigation/>}
        </NavigationContainer>
    );
}