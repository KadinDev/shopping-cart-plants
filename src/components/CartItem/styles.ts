import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#DFDFDF',
        borderRadius: 2,
        marginBottom: 14,
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    image: {
        width: 50,
        height: 50,
        objectFit: 'contain',
        borderRadius: 5,
        marginRight: 5
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
        width: 160,
    },
    price: {
        fontSize: 14,
        lineHeight: 16,
        marginLeft: 4,
        color: '#008000',
        fontWeight: 'bold'
    },
    amountContainer: {
        marginTop: 14,
        marginBottom: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
    },
    amount: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 16,
        fontWeight: 'bold'
    }
})