import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { footer } from '../../GlobalStyles';

const productosData = [
  { nombre: 'Alka-Selser Tabletas 4pz', imagen: require('../imgs/alkaseltzer.jpg') },
  { nombre: 'Algodón absorbente', imagen: require('../imgs/algodon.jpg') },
  { nombre: 'Guantes de Latex 18pz', imagen: require('../imgs/guantes.jpg') },
  { nombre: 'Lentes de protección 18pz', imagen: require('../imgs/lentes.jpg') },
  { nombre: 'Vaso precipitado de vidrio 100ml 8 pz', imagen: require('../imgs/VasoPrecipitados100.jpg') },
  // Agrega más productos según sea necesario
];

const Productos = ({ navigation }) => {
  const [filtro, setFiltro] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(productosData);

  const handleSearch = text => {
    setFiltro(text);
    const filtrados = productosData.filter(producto =>
      producto.nombre.toLowerCase().includes(text.toLowerCase())
    );
    setProductosFiltrados(filtrados);
  };

  const handlePress = producto => {
    // Navegar a la pantalla de detalles del producto
    navigation.navigate('Detalles', { producto });
  };
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar"
        placeholderTextColor="#888" // Color gris para el placeholder
        value={filtro}
        onChangeText={handleSearch}
      />
      <ScrollView contentContainerStyle={styles.productsGrid}>
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto, index) => (
            <TouchableOpacity key={index} style={styles.productCard} onPress={() => handlePress(producto)}>
              <Image source={producto.imagen} style={styles.productImage} />
              <Text style={styles.productName}>{producto.nombre}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>No se encuentra el producto</Text>
            <Image source={require('../imgs/error2.png')} style={styles.noResultsImage} />
          </View> 
        )}
      </ScrollView>
      <View style={footer}>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="home" size={30} color="#874356" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="search" size={30} color="#874356" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Icon name="user" size={30} color="#874356" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  noResultsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noResultsImage: {
    width: 322,
    height: 180,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingLeft: 10,
    margin: 10,
    borderRadius: 5,
    color: '#000', // Color del texto ingresado
  },
  productsGrid: {
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  productCard: {
    width: 150,
    margin: 10,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    backgroundColor: '#fff',
  },
  productImage: {
    width: 140,
    height: 140,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 13,
    color: '#000',
    textAlign: 'center',
  },
  noResultsText: {
    marginTop: 100,
    textAlign: 'center',
    fontSize: 20,
    color: '#888',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Productos;
