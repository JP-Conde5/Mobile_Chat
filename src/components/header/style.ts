import { colors } from '../../styles/GlobalStyle';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        width: 370,
        paddingTop: 20,
        borderColor: colors.secondary,
        borderBottomWidth: 20,
        borderRadius: 20,
        shadowColor: colors.black,
        shadowRadius: 20,
    },
})