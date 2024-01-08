import React, {useState} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import {styles} from './styles';

import {ButtonIcon} from '../../components/ButtonIcon';
import {CartProps} from '../../context/CartContext';

import {priceFormatter} from '../../utils/Formatted';

type CartItemProps = {
    data: CartProps;
    addQuantityItem: () => void;
    removeQuantityItem: () => void;
};

export function CartItem({data, addQuantityItem, removeQuantityItem} : CartItemProps){

    const [quantityItems, setQuantityItems] = useState(data.amount);

    function handleIncrease(){
        addQuantityItem(); //vai aumentar a quantidade no contexto do carrinho
        setQuantityItems(item => Number(item) + 1);
    };

    function handleDecrease(){
        removeQuantityItem();
        if(quantityItems === 0){
            setQuantityItems(0);
            return;
        };
        setQuantityItems(item => Number(item) - 1);
    };

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Image 
                    style={styles.image}
                    source={{uri: data.img}} 
                />
                <View>
                    <Text numberOfLines={1} style={styles.name}> { data.name } </Text>
                    <Text style={styles.price}> 
                        {priceFormatter.format(data.price)} 
                    </Text>
                </View>
            </View>
            
            <View style={styles.amountContainer}>
                
                <ButtonIcon
                    icon='minus'
                    type='SECONDARY'
                    onPress={handleDecrease}
                />

                <Text style={styles.amount}> { quantityItems } </Text>

                <ButtonIcon
                    icon='plus'
                    type='PRIMARY'
                    onPress={handleIncrease}
                />
            </View>
        </View>
    )
}