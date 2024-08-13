import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack'
import {ScreenListMessage, ScreenCadMessage} from '../screens'
type MessageStackParamList = {
    ListMessage: undefined
    CadMessage: undefined
}
type MessageScreenNavigationProp = StackNavigationProp<MessageStackParamList,'ListMessage'>
export type MessageTypes ={
    navigation: MessageScreenNavigationProp
}
export function MessageNavigation(){
    const Stack = createStackNavigator<MessageStackParamList>() 
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='ListMessage' component={ScreenListMessage}/>
            <Stack.Screen name='CadMessage' component={ScreenCadMessage}/>
        </Stack.Navigator>
    )
}