import { colors } from '../../styles/GlobalStyle'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
    },
    camera:{
        flex: 1,
    },
    footer:{
        position: 'absolute',
        bottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        flexDirection: 'row',
        marginBottom: 20,
    },
    header:{
        position: 'absolute',
        top: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 400,
        flexDirection: 'row',
        marginBottom: 20,
    },
    ball:{
        width: 40,
        height: 40,
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        borderWidth: 5,
        borderRadius: 20,
        marginRight: 100,
        marginLeft: 40,
    },
    image:{
        width: 30,
        height: 30, 
    },
    imageIcon:{
        width: 50,
        height: 50
    }
})