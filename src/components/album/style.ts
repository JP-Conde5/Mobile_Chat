import {StyleSheet} from 'react-native'
import { colors } from '../../styles/GlobalStyle'

export const styles = StyleSheet.create({
    albums:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 20.
    },
    album:{
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: colors.primaryTransp,
        padding: 10,
        width: 300,
        borderRadius: 20,
    },
    image:{
        width: 100, 
        height: 200,
        margin: 20
    },
    title:{
        fontSize: 21,
        fontWeight: 'bold',
        marginBottom: 30,
        color: colors.white,
    },
})