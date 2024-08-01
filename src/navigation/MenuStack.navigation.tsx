import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack"
import { ScreenSlide1, ScreenSlide2, ScreenSlide3, ScreenLogin, ScreenRegister } from '../screens/index'

type MenuStackParam = {
    Slide1: undefined
    Slide2: undefined
    Slide3: undefined
    Login: undefined
    Register: undefined
}

export type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Slide2">
export type MenuStackTypes = {
    navigation: MenuScreenNavigation
}

export function MenuStack() {
    const Stack = createStackNavigator<MenuStackParam>();
    return(
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true,
            headerShown: false,
        }}>
            <Stack.Screen name="Slide1" component={ScreenSlide1}/>
            <Stack.Screen name="Slide2" component={ScreenSlide2}/>
            <Stack.Screen name="Slide3" component={ScreenSlide3}/>
            <Stack.Screen name="Login" component={ScreenLogin}/>
            <Stack.Screen name="Register" component={ScreenRegister}/>
        </Stack.Navigator>
    )
}