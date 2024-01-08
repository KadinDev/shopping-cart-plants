import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    viewTitle: {
    },
    textPlant: {
        flexDirection: 'row'
    },
    title: {
        fontSize: 25
    },
    subtitle: {
        fontSize: 25,
        marginLeft: -7,
        color: '#008000',
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30
    }
})