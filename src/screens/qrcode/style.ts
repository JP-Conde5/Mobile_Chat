import { colors } from '../../styles/GlobalStyle'
import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    qrcode:{
        width: Dimensions.get("screen").width/2,
        height: Dimensions.get("screen").width/2,
        top: 0,
    },
    cam:{
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height/2,
        bottom: 0,
    },
    button:{
        margin: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: colors.secondary
    },
    windowPermission:{
        width: 100,
        backgroundColor: colors.primaryTransp,
        borderRadius: 20,
        padding: 20,
    },
    text:{
        fontSize: 20,
        color: colors.primary,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    back:{
        color: colors.black
    }
})