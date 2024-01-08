import { View, Text} from 'react-native';
import {styles} from './styles';

import {ButtonShop} from '../ButtonShop';

export function Header(){
    return (
        <View style={styles.container}>
            <View style={styles.viewTitle}>
                <Text style={styles.title}> Find your </Text>
                <View style={styles.textPlant}>
                    <Text style={styles.title}> favorite </Text>
                    <Text style={styles.subtitle}> plants! </Text>
                </View>
            </View>

            <ButtonShop icon='shopping-bag' />

        </View>
    )
}