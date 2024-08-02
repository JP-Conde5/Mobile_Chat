import { colors } from '../../styles/GlobalStyle';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
        width: 700, 
        borderColor: colors.secondary,
        borderWidth: 10,
        shadowColor: colors.black,
        shadowRadius: 20,
    },
})