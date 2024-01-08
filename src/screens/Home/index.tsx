import {useState, useContext} from 'react';
import { 
  Text, 
  View,
  ScrollView,
  FlatList
} from 'react-native';

import {styles} from './styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PlantsList} from '../../utils/PlantsList';
import {PlantsNovidades} from '../../utils/PlantsNovidades';

import {Header} from '../../components/Header';
import {PlantCardScrollView} from '../../components/PlantCardScrollView';
import {PlantItemFlatList} from '../../components/PlantItemFlatList';

import {CartContext, CartProps} from '../../context/CartContext';

export function Home() {
  const [plantsList, setPlantsList] = useState(PlantsNovidades);
  const [products, setProducts] = useState(PlantsList);

  const {addItemCart} = useContext(CartContext);
  
  function handleAddItemToCart(item : CartProps){
    addItemCart(item)
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContent} >

        <Header/>

        <View style={styles.viewScrollView}>
          <Text style={styles.titleScrollView}> Novidades </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {plantsList.map((item) => (
                <PlantCardScrollView
                  key={item.id}
                  data={item}
                />
            ))}

          </ScrollView>
        </View>
            
        <Text style={{
          color: '#008000', marginBottom: 10, fontWeight: 'bold'
        }}> Promoções </Text>
        
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={ ({item}) => (
            
            <PlantItemFlatList
              data={item}
              addItemToCart={() => handleAddItemToCart(item) }
            />
         
          ) }

          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 60
          }}
        />

      </View>
    </SafeAreaView>
  );
}
