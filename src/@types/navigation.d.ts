import {PlantDTO} from '../utils/PlantDTO';

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            cart: undefined;
            
            plantDetails: {
                data: PlantDTO
            };
        }
    }
}