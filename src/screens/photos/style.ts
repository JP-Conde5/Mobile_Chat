import { colors } from '../../styles/GlobalStyle'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerImage:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 20,
        color: colors.primary,
        fontWeight: 'bold',
    },
    button:{
        margin: 10,
        padding: 10,
        borderRadius: 20,
        backgroundColor: colors.secondary
    }
})