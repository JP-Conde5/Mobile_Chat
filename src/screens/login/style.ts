import { StyleSheet } from "react-native";
import { colors } from "../../styles/GlobalStyle";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    main:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width: 50,
        height: 50,
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    text:{
        fontSize: 18,
        fontWeight: '500',
    },
    link:{
        fontSize: 20, 
        textDecorationStyle: "solid", 
        color: colors.secondary, 
    },
    window:{
        flex: 0.75,
        backgroundColor: colors.primaryTransp,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})