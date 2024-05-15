import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PantallaPrincipal from "../screens/Principal"
import Login from '../screens/Login';
import MenuPrincipal from "../screens/MenuPrincipal";
import Inventario from '../screens/Inventario';
import Prestamos from '../screens/Prestamos';
import Calendario from '../screens/Calendario';

export default function Navigation() {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Principal">
      <Stack.Screen 
        name="Principal" 
        component={PantallaPrincipal} 
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name="Menu" 
        component={MenuPrincipal} 
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Inventario"
        component={Inventario}
      />
      <Stack.Screen
        name="Prestamos"
        component={Prestamos}
      />
      <Stack.Screen
        name="Calendario"
        component={Calendario}
      />
    </Stack.Navigator>

  );
}
