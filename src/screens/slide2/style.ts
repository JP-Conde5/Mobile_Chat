import {colors} from "../../styles/GlobalStyle"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
    },
    image:{
        width: 200,
        height: 200,
    },
    text:{
        fontSize: 30,
        color: colors.white,
        fontWeight: '500',
        textAlign: 'center',
        width: 250,
    }    
})