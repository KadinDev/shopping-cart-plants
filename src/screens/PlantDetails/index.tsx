import {useContext, useEffect} from 'react';

import { 
  Text, 
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

import {styles} from './styles';

import {useRoute} from '@react-navigation/native';
import {PlantDTO} from '../../utils/PlantDTO';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Header} from '../../components/Header';
import {priceFormatter} from '../../utils/Formatted';
import Toast from 'react-native-toast-message';
import {MessagePlantAddedToCart} from '../../utils/MessagesToast';

import {CartContext, CartProps} from '../../context/CartContext';

type RouteParams = {
  data: PlantDTO;
};

export function PlantDetails() {

  const route = useRoute();
  const {data} = route.params as RouteParams;
  const {addItemCart} = useContext(CartContext);
 
  function handleAddPlantToCart(item : CartProps){
    addItemCart(item); // passei para a função todo o data, posso pegar como item
    MessagePlantAddedToCart();
  };


  return (
    <View style={styles.container}>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
      >
        <View style={styles.viewInfoPlant}>
          <Image source={{uri: data.img}} style={styles.image} />
          <Text style={styles.name}> {data.name} </Text>
          <Text style={styles.description}> {data.description} </Text>
        </View>

      </ScrollView>

      <View style={styles.viewAddToCart} >
        <View style={styles.viewPrice}>
          <Text style={styles.price}>
              {priceFormatter.format(data.price)}
          </Text>
        </View>
        
        <TouchableOpacity
          onPress={() => handleAddPlantToCart(data)}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.titleButton}>Add to cart </Text>
        </TouchableOpacity>
      </View>

      {/* para as mensagens aparecerem devo importar o Toast na página */}
      <Toast/>

    </View>
  );
}
