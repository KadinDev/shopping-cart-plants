import { View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {PlantDTO} from '../../utils/PlantDTO';
import {priceFormatter} from '../../utils/Formatted';

type Props = {
    data: PlantDTO;
};

export function PlantCardScrollView({data} : Props){

    const navigation = useNavigation();

    function handleNavigationPlantDetails(){
        navigation.navigate('plantDetails', {data});
    };

    return (
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.8}
            onPress={handleNavigationPlantDetails}
        >
            <Image 
                style={styles.avatar} 
                source={{ uri: data.img }}
            />
            
            <Text style={styles.price}>
                {priceFormatter.format(data.price)}
            </Text>

            <Text style={styles.name}> {data.name} </Text>
        </TouchableOpacity>
    )
}