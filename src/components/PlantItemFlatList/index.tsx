import { View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {PlantDTO} from '../../utils/PlantDTO';
import { ButtonIcon } from '../ButtonIcon';
import {priceFormatter} from '../../utils/Formatted';

type Props = {
    data: PlantDTO;
    addItemToCart: () => void;
};

export function PlantItemFlatList({data, addItemToCart} : Props){

    const navigation = useNavigation();

    function handleNavigationPlantDetails(){
        navigation.navigate('plantDetails', {data});
    };

    return (
        <View style={styles.container}>

            <TouchableOpacity 
                activeOpacity={0.8}
                onPress={handleNavigationPlantDetails}
                style={styles.button}
            >
                <View style={styles.content}>
                    <Image 
                        style={styles.avatar} 
                        source={{ uri: data.img }}
                    />
                    <View style={styles.info}>
                        <Text style={styles.name}> {data.name} </Text>
                        <Text style={styles.description} numberOfLines={3} > {data.description} </Text>
                    </View>
                </View>
            </TouchableOpacity>

            <View style={styles.viewPrice}>
                <Text style={styles.price}>
                    {priceFormatter.format(data.price)}
                </Text>

                <ButtonIcon 
                    icon='shopping-bag'
                    type='PRIMARY'
                    onPress={addItemToCart}
                />

            </View>
        </View>
    )
}