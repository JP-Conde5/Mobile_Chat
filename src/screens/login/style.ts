import { StyleSheet } from "react-native";
import { colors } from "../../styles/GlobalStyle";

export const styles = StyleSheet.create({
    main:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    window:{
        flex: 0.75,
        backgroundColor: colors.primaryTransp,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
})