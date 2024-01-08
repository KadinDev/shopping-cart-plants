import { 
    TouchableOpacity, 
    TouchableOpacityProps, 
    View, 
    Text 
} from "react-native";

import {styles} from './styles';

import {Feather} from '@expo/vector-icons';

type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = TouchableOpacityProps & {
    // entregar todos os icons
    icon: keyof typeof Feather.glyphMap;
    type?: ButtonIconTypeStyleProps;
}

export function ButtonIcon({icon, type, ...rest } : Props){
    const iconColor = type === 'PRIMARY' ? '#008000' : '#FF4F4F'

    return (
        <TouchableOpacity
            {...rest}
            style={styles.container}
            activeOpacity={0.4}
        >
            <Feather
                name={icon}
                size={25}
                color={iconColor}
            />

        </TouchableOpacity>
    )
}