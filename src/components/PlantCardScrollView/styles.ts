import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0, 255, 0, 0.1)',
        height: 200,
        marginRight: 10,
        width: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
        borderRadius: 10,
    },
    avatar: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 10,
        objectFit: 'contain'
    },
    name: {
        color: '#111',
        fontSize: 16,
        backgroundColor: '#FAFAFA',
        borderRadius: 5,
        padding: 2,
        marginBottom: 5,
        textAlign: 'center'
    },
    price: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: '#FFFFFF',
        color: '#008000',
        fontWeight: 'bold',
        padding: 5,
        borderRadius: 10
    },
})