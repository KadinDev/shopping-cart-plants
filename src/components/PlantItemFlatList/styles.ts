import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 120,
        backgroundColor: '#eee',
        borderRadius: 20,
        marginBottom: 20
    },
    button: {
        width: '50%'
    },
    content: {
        flexDirection: 'row',
    },
    avatar: {
        width: 100,
        height: 120,
        objectFit: 'cover',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    info: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5
    },
    description: {
        color: '#000',
        fontSize: 14,
        lineHeight: 16
    },
    viewPrice: {
        paddingHorizontal: 5,
        width: 70,
        height: '96%',
        marginRight: 2,
        backgroundColor: '#FAFAFA',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    price: {
        fontWeight: 'bold',
        fontSize: 12,
        color: '#008000'
    }
})