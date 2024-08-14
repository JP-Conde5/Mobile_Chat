import {StyleSheet} from 'react-native'
import { colors } from '../../styles/GlobalStyle'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width: 50,
        height: 50,
    },
    bottons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 180,
        marginTop: 20,
    },
    write:{
        width: 200,
        backgroundColor: colors.gray,
        borderRadius: 20,
        padding: 15,
    },
    footer:{
        width: 370,
        backgroundColor: colors.secondary,
        borderTopWidth: 20,
        borderColor: colors.secondary,
        height: 50,
        borderRadius: 20, 
    },
    window:{
        backgroundColor: colors.primaryTransp,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 30,
        margin: 20,
        borderWidth: 20,
        borderColor: colors.primaryTransp,
        borderRadius: 20,
    },title:{
        fontSize: 21,
        fontWeight: 'bold',
        marginBottom: 30,
        color: colors.secondary,
    },
    text:{
        fontSize: 18,
        fontWeight: '500',
    },
})