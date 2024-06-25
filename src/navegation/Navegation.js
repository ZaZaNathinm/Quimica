import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PantallaPrincipal from "../screens/Principal"
import Login from '../screens/Login';
import MenuPrincipal from "../screens/MenuPrincipal";
import Material from '../screens/Material';
import Prestamos from '../screens/Prestamos';
import Calendario from '../screens/Calendario';
import Productos from '../Inventario/Productos';
import Equipos from '../Inventario/Equipos';
import Detalles from '../Inventario/Detalles';
import SolicitarPrestamo from '../Prestamos/SolicitarPrestamo';
import Articulo from '../Prestamos/Articulo';
import Devolucion from '../Prestamos/Devolucion';

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
        name="Material"
        component={Material}
      />
      <Stack.Screen
        name="Prestamos"
        component={Prestamos}
        options={{ title: 'Préstamos'}}
      />
      <Stack.Screen
        name="Calendario"
        component={Calendario}
      />
        <Stack.Screen
        name="Productos"
        component={Productos}
      />
     <Stack.Screen
        name="Equipos"
        component={Equipos}
      />
     <Stack.Screen
        name="Detalles"
        component={Detalles}
      />
       <Stack.Screen
        name="SolicitarPrestamo"
        component={SolicitarPrestamo}
        options={{ title: 'Solicitar Equipo'}}
      />
       <Stack.Screen
        name="Articulo"
        component={Articulo}
      />
       <Stack.Screen
        name="Devolucion"
        component={Devolucion}
        options={{ title: 'Devolución'}}
      />
    </Stack.Navigator>

  );
}
