import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    itemCart: {
        position: 'absolute',
        top: -10,
        left: -15,
        backgroundColor: '#FF4F4F',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 25,
        minHeight: 25,
        borderRadius: 100
    },
    quantityItemCart: {
        color: '#fff',
        fontSize: 14
    }
})