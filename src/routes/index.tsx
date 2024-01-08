import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from '../screens/Home';
import {PlantDetails} from '../screens/PlantDetails';
import {Cart} from '../screens/Cart';
import { PlantDTO } from '../utils/PlantDTO';

const Stack = createNativeStackNavigator();

type PlantDetailsRouteParams = {
    data: PlantDTO;
};

export function Routes(){
    return (
        <Stack.Navigator
            initialRouteName='home'
        >
            <Stack.Screen 
                name='home'
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name='plantDetails'
                component={PlantDetails}
                
                options={({ route }) => ({ 
                    // para pegar o nome da planta vc deve tipar aqui tbm,
                    // assim passou não apenas o nome para o title da rota, como todas as informações tbm
                    title: (route.params as PlantDetailsRouteParams).data.name,
                    headerShown: true,
                    animation: 'slide_from_right'
                })}
            />
            <Stack.Screen 
                name='cart'
                component={Cart}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}