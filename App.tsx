
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navegation/Navegation';
import Inventario from './src/screens/Material';
import Calendario from './src/screens/Calendario';

const App = () => {

  return (
   
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
   
  );
};

export default App;
