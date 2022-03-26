import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    todo: {
        paddingTop: 10,
        paddingBottom: 10,
        marginRight: 20,
    },

    container: {
        backgroundColor: 'transparent',
        width: '100%',
        borderWidth: 0
    },

    textStyleUnchecked: {
        color: '#FFFFFF',
        fontSize: 16,
    },

    textStyleChecked: {
        color: '#555555',
        fontSize: 16,
    }
})