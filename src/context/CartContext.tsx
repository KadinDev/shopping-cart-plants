import React, {useState, createContext, ReactNode} from 'react';

import Toast from 'react-native-toast-message';
import {MessageAlreadyAddedToCart} from '../utils/MessagesToast';
import {PlantDTO} from '../utils/PlantDTO';

export interface CartProps extends PlantDTO {
    amount?: number;
    total?: number
};

type CartContextData = {
    cart: CartProps[];
    addItemCart: (newItem : CartProps) => void;
    removeItemCart: (removeItem : CartProps) => void;
    totalValueItemsCart: number;
};

export const CartContext = createContext({} as CartContextData);

type CartProviderProps = {
    children: ReactNode;
};

export function CartProvider({children} : CartProviderProps){

    const [cart, setCart] = useState<CartProps[]>([]);
    const [totalValueItemsCart, setTotalValueItemsCart] = useState(0);

    function addItemCart(newItem : CartProps){
        const indexItem = cart.findIndex(item => item.id === newItem.id);

        if(indexItem !== -1){
            let cartList = cart;

            // adiciona mais um item, vc tem 1 planta, clicou na planta de novo, o valor passa a ser 2 planta
            cartList[indexItem].amount = (cartList[indexItem].amount || 0) + 1;

            // soma o valor dos items iguais
            cartList[indexItem].total = (cartList[indexItem].amount || 0) * cartList[indexItem].price;

            setCart(cartList);

            // faz o calculo de todos os items e quantidades de cada para o carrinho
            totalValueCart(cartList);

            return;
        };

        let data = {
            ...newItem,
            amount: 1,
            total: newItem.price
        };

        setCart(items => [...items, data]);

        totalValueCart([...cart, data]);
    };

    function removeItemCart(removeItem : CartProps){
        const indexItem = cart.findIndex(item => item.id === removeItem.id);

        // pegar o valor do item, e diminuir o valor da unidade do valor total
        if(cart[indexItem] && cart[indexItem].amount && (cart[indexItem].amount || 0) > 1 ) {
            let cartList = [...cart];

            cartList[indexItem].amount = (cartList[indexItem].amount || 0) - 1;

            cartList[indexItem].total = 
                (cartList[indexItem].total || 0) - (cartList[indexItem].price || 0);
            
            setCart(cartList);

            totalValueCart(cartList);

            return;
        };

        // se tem apenas 1 item, ao clicar em diminuir vai excluir o item do carrinho
        const removeItemToCart = cart.filter(item => item.id !== removeItem.id);
        setCart(removeItemToCart);

        totalValueCart(removeItemToCart);
    };

    function totalValueCart(items : CartProps[]) {
        let result = items.reduce((acc, obj) => {
            return acc + (obj.total || 0);
        }, 0);

        setTotalValueItemsCart(Number(result.toFixed(2)));

        return result;
    };

    return (
        <>
        <CartContext.Provider
            value={{
                cart,
                addItemCart,
                removeItemCart,
                totalValueItemsCart
            }}
        >
            {children}
        </CartContext.Provider>
        
        <Toast/>
        </>
    )
}