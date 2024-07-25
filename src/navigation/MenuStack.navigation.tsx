import { StackNavigationProp, createStackNavigator } from "@react-navigation/stack"
import { ScreenSlide1, ScreenSlide2, ScreenSlide3, ScreenLogin, ScreenRegister } from '../screens/index'

type MenuStackParam = {
    Slide1: undefined
    Slide2: undefined
    Slide3: undefined
    login: undefined
    register: undefined
}

type MenuScreenNavigation = StackNavigationProp<MenuStackParam, "Slide1">
export type MenuStackTypes = {
    navigation?: MenuScreenNavigation
    page: number
}

export function MenuStack() {
    const Stack = createStackNavigator<MenuStackParam>();
    return(
        <Stack.Navigator screenOptions={{
            animationEnabled: true,
            gestureEnabled: true
        }}>
            <Stack.Screen name="Slide1" component={ScreenSlide1}/>
            <Stack.Screen name="Slide2" component={ScreenSlide2}/>
            <Stack.Screen name="Slide3" component={ScreenSlide3}/>
            <Stack.Screen name="login" component={ScreenLogin}/>
            <Stack.Screen name="register" component={ScreenRegister}/>
        </Stack.Navigator>
    )
}