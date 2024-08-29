import * as React from 'react';
import { MenuInitial } from './menuInitial.navigation'
import { MessageNavigation } from './message.navigation'
import { NavigationContainer } from '@react-navigation/native'
import { useAuth } from '../hook';
import { ComponentLoading } from '../components';
import { MesCamNavigation } from './tabMesCam.navigation';

export function Navigation(){
    const { user, loading } = useAuth()
    if(loading){
        return <ComponentLoading/>
    }
    return(
        <NavigationContainer>
            {user?.token ? <MesCamNavigation/> : <MenuInitial/> }
        </NavigationContainer>
    );
}