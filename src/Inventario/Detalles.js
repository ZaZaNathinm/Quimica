import * as React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image, ScrollView } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border, footer } from "../../GlobalStyles";
import Icon from 'react-native-vector-icons/FontAwesome';

const Detalles = ({ route, navigation }) => {
  const { producto } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={producto.imagen} style={styles.productImage} />
        <Text style={styles.productTitle}>{producto.nombre}</Text>
        
<View style={styles.specificationsContainer}>
  <Text style={styles.specificationTitle}>Especificaciones</Text>
  {/* Contenedor para cada especificación individual con recuadro */}
  <View style={styles.specificationBox}>
    <Text style={styles.specificationLabel}>Fecha De Ingreso</Text>
    <Text style={styles.specificationValue}>Viernes 08 De Marzo 2024</Text>
  </View>
  <View style={styles.specificationBox}>
    <Text style={styles.specificationLabel}>Piezas</Text>
    <Text style={styles.specificationValue}>18</Text>
  </View>
  <View style={styles.specificationBox}>
    <Text style={styles.specificationLabel}>Estado</Text>
    <Text style={styles.specificationValue}>Nuevas</Text>
  </View>
  <View style={styles.specificationBox}>
    <Text style={styles.specificationLabel}>Vida Útil</Text>
    <Text style={styles.specificationValue}>5 años</Text>
  </View>
  <View style={styles.specificationBox}>
    <Text style={styles.specificationLabel}>Material</Text>
    <Text style={styles.specificationValue}>Latex</Text>
  </View>
</View>

      </ScrollView>

      <View style={footer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Productos')}>
          <Icon name="home" size={30} color="#874356" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Buscar')}>
          <Icon name="search" size={30} color="#874356" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Perfil')}>
          <Icon name="user" size={30} color="#874356" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  scrollContainer: {
    alignItems: 'center',
    padding: 20,
  },
  productImage: {
    width: 200,
    height: 200,
    margin: 10,
    resizeMode: 'contain',
  },
  productTitle: {
    fontSize: FontSize.large,
    color: Color.dark,
    marginTop: 20,
    marginBottom: 10,
    fontSize: 15,
    color: '#000',
  },
  specificationsContainer: {
    alignSelf: 'stretch',
    backgroundColor: Color.lightGray,
    padding: 10,
    marginTop: 10,
    borderRadius: Border.br_small,
  },
  specificationTitle: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    color: Color.primary,
    marginBottom: 10,
    color: '#000',
    textAlign: 'center',
  },
  specificationText: {
    fontSize: FontSize.small,
    color: '#000',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  specificationBox: {
    backgroundColor: '#FCFAFA', // Fondo blanco para cada recuadro
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#FF2D00', // Borde ligero para cada recuadro
    borderRadius: 5, // Bordes suavemente redondeados
  },
  specificationLabel: {
    fontSize: FontSize.small,
    fontWeight: 'bold',
    color: '#333',
  },

  specificationValue: {
    fontSize: FontSize.small,
    color: '#666',
  },
});

export default Detalles;
