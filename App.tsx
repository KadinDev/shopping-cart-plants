
import {StatusBar} from 'react-native';

import {Routes} from './src/routes';
import {NavigationContainer} from '@react-navigation/native';
import {CartProvider} from './src/context/CartContext';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor='transparent' 
        translucent 
        barStyle='dark-content' 
      />
      
      <CartProvider>
        
        <Routes/>

      </CartProvider>
    
    </NavigationContainer>
  )
}