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
        bottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 10,
        width: 200,
        flexDirection: 'row',

    },
    ball:{
        width: 10,
        height: 10,
        backgroundColor: colors.primary,
        borderColor: colors.primary,
        borderWidth: 5,
        borderRadius: 10,
        marginRight: 10,
    },
    image:{
        width: 10,
        height: 10, 
    }
})