import { colors } from '../../styles/GlobalStyle'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
    footerPhoto:{
        position: 'absolute',
        bottom: 10,
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
    },
    back:{
        color: colors.black
    }
})