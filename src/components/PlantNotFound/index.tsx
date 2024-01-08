
import {
    View,
    Image,
    StyleSheet
} from 'react-native';

import plantNotFound from '../../assets/plantnotfound.jpg';

export function PlantNotFound(){
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={plantNotFound}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 500,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    }
})