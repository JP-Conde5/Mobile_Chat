import { StyleSheet } from "react-native";
import { colors } from "../../styles/GlobalStyle";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { HoverEffect } from "react-native-gesture-handler";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    main:{
        flex: 1,
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
        marginBottom: 30,
    },
    text:{
        fontSize: 18,
        fontWeight: '500',
    },
    link:{
        fontSize: 20, 
        color: colors.secondary, 
    },
    spaceWrite:{
        flexDirection: 'row',
        backgroundColor: colors.gray,
        borderColor: colors.gray,
        borderWidth: 5,
        borderCurve: 'circular',
        borderRadius: 10,
        width: 200,
        height: 30, 
        marginBottom: 20,
    },
    window:{
        backgroundColor: colors.primaryTransp,
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 30,
        marginBottom: 30,
    },
    bottons:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 180,
        marginTop: 20,
    },
    write:{
        width: 200,
    },
    footer:{
        width: 400,
        height: 50,
        backgroundColor: colors.secondary
    }
})