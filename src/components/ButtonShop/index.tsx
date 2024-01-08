import {useContext} from 'react';

import { TouchableOpacity, View, Text } from "react-native";
import {Feather} from '@expo/vector-icons';

import {styles} from './styles';

import {useNavigation} from '@react-navigation/native';
import {CartContext} from '../../context/CartContext';

type Props = {
    // entregar todos os icons
    icon: keyof typeof Feather.glyphMap;
}

export function ButtonShop({icon} : Props){
    const navigation = useNavigation();
    const {cart} = useContext(CartContext);

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('cart')}
        >
            <Feather
                name={icon}
                size={25}
            />

            { cart.length >= 1 &&
                <View style={styles.itemCart} >
                    <Text style={styles.quantityItemCart}>
                        
                        {cart?.length}
                    
                    </Text>
                </View>
            }

        </TouchableOpacity>
    )
}