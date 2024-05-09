import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PantallaPrincipal from "../screens/Principal"
import MenuPrincipal from "../screens/MenuPrincipal";


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Principal">
        <Stack.Screen name="Principal" component={PantallaPrincipal} />
        <Stack.Screen name="Menu" component={MenuPrincipal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
