import { StyleSheet } from "react-native";
import { colors } from "../../styles/GlobalStyle";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    item:{
        backgroundColor: colors.primaryTransp,
        borderWidth: 2,
        borderColor: colors.gray,
        borderRadius: 20,
        width: 300,
        margin: 20,
        height: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    image:{
        width: 50,
        height: 50,
    },
    button:{
        width: 'auto',
        position: 'absolute',
        right: 20,
        bottom: 20,
    },
    name:{
        color: colors.secondary,
        fontWeight: '400',
        fontSize: 18,
        paddingLeft: 5,
    },
    message:{
        paddingLeft: 15,
        fontSize: 15,
    },
    footer:{
        width: 370,
        backgroundColor: colors.secondary,
        borderTopWidth: 20,
        borderColor: colors.secondary,
        height: 50,
        borderRadius: 20, 
    },
    //Não está funcionando
})