import Toast from "react-native-toast-message";

export const MessagePlantAddedToCart = () => {
    Toast.show({
        type: 'success',
        text1: 'Planta adicionada no seu carrinho 🌱',
        text2: 'Vá para seu carrinho ❣️'
    })
};

export const MessageAlreadyAddedToCart = () => {
    Toast.show({
        type: 'info',
        text1: 'Você já adicionou este item no carrinho!',
        text2: 'Verifique seu carrinho!'
    })
}