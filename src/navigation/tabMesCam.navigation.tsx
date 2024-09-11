import {BottomTabNavigationProp, createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {ScreenCam, ScreenPhotos, ScreenQrCode} from '../screens'
import {MessageNavigation} from './message.navigation'
import { Entypo } from '@expo/vector-icons'
import { colors } from '../styles/GlobalStyle'
import { MaterialCommunityIcons } from '@expo/vector-icons'
type MesCamTabParamList = {
    Mensagem: undefined
    Camera: undefined
    Photos: undefined
    QrCode: undefined
}
type MesCamScreenNavigationProp = BottomTabNavigationProp<MesCamTabParamList,'Mensagem'>
export type MesCamTypes ={
    navigation: MesCamScreenNavigationProp
}
export function MesCamNavigation(){
    const Tab = createBottomTabNavigator<MesCamTabParamList>() 
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveBackgroundColor: colors.darkSecondary,
            tabBarInactiveBackgroundColor: colors.secondary,
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: colors.primary
        }}>
            <Tab.Screen name='Mensagem' component={MessageNavigation} options={{
                tabBarIcon: ()=> (
                    <Entypo name="message" size={24} color={colors.primary}/>
                ),
            }}/>
            <Tab.Screen name='Camera' component={ScreenCam} options={{
                tabBarIcon: () => (
                    <Entypo name="camera" size={24} color={colors.primary}/>
                )
            }}/>
            <Tab.Screen name="Photos" component={ScreenPhotos} options={{
                tabBarIcon: () => (
                    <Entypo name="image" size={24} color={colors.primary}/>
                )
            }}/>
            <Tab.Screen name="QrCode" component={ScreenQrCode} options={{
                tabBarIcon: () => (
                    <MaterialCommunityIcons name="qrcode-scan" size={24} color={colors.primary}/>
                )
            }}/>
        </Tab.Navigator>
    )
}