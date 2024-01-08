import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FAFAFA',
    },
    viewInfoPlant: {
    },
    image: {
        width: '100%',
        height: 300,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    name: {
        fontSize: 24,
        textAlign: 'left',
        fontWeight: 'bold',
        marginVertical: 10
    },
    description: {
        fontSize: 18,
        textAlign: 'left',
        color: '#444444',
        fontWeight: 'bold'
    },
    viewAddToCart: {
        backgroundColor: '#111',
        flexDirection: 'row',
        height: 60,
        borderRadius: 20,
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20
    },
    viewPrice: {
        width: '30%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    price: {
        marginLeft: 20,
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FAFAFA'
    },
    button: {
        flex: 1,
        backgroundColor: '#008000',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    titleButton: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#FAFAFA'
    }
})