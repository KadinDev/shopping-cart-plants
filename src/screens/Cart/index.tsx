import React, {useContext} from 'react';

import { 
  Text, 
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {styles} from './styles';

import {CartItem} from '../../components/CartItem';
import {PlantNotFound} from '../../components/PlantNotFound';
import {priceFormatter} from '../../utils/Formatted';

import {Feather} from '@expo/vector-icons';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

import {CartContext} from '../../context/CartContext';

export function Cart() {
  const navigation = useNavigation();

  const {
    cart,
    addItemCart,
    removeItemCart,
    totalValueItemsCart

  } = useContext(CartContext);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Feather
            name='arrow-left'
            size={25}
            color='#111'
          />
        </TouchableOpacity>
        
        <Feather
          name='shopping-bag'
          size={25}
          color='#111'
        />
      </View>

      <FlatList
        contentContainerStyle={{
          paddingBottom: 60
        }}
        
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (

          <CartItem
            data={item}
            addQuantityItem={() => addItemCart(item)}
            removeQuantityItem={() => removeItemCart(item)}
          />

        ) }

        showsVerticalScrollIndicator={false}
        ListEmptyComponent={ () => 
          <View>
            <PlantNotFound/>
            <Text
              style={{textAlign: 'center', marginVertical: 10, fontSize: 18, fontWeight: 'bold'}}
            > carrinho de compras vazio </Text>
          </View>
        }

        // vai sempre ser mostrado no final da Lista
        ListFooterComponent={() => 
          <Text style={styles.total}>
            { totalValueItemsCart === 0 ? '' : 
              `Total: ${priceFormatter.format(totalValueItemsCart)}` 
            }
          </Text>
        }
      />
      
    </SafeAreaView>
  );
}
