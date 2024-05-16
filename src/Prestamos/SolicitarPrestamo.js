import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, ScrollView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const productosData = [
  { nombre: 'Caja Petri P/Cultivo Celular', imagen: require('../imgs/CajaCultivo.jpg') },
  { nombre: 'Termómetro de vidrio', imagen: require('../imgs/termometro.jpg') },
  { nombre: 'Filtro Jeringa de acetato de celulosa', imagen: require('../imgs/filtro.jpg') },
  { nombre: 'Parrilla (Placa) Calentamiento', imagen: require('../imgs/parrilla.jpg') },
  { nombre: 'Vaso precipitado de vidrio 100ml 8 pz', imagen: require('../imgs/VasoPrecipitados100.jpg') },
  { nombre: 'Matraz 250ml', imagen: require('../imgs/matraz.jpg') },
  // Agrega más productos según sea necesario
];

const SolicitarPrestamo = ({ navigation }) => {
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
    navigation.navigate('Articulo', { producto });
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
          <Text style={styles.noResultsText}>No se encuentra el producto</Text>
        )}
      </ScrollView>
      <View style={styles.footer}>
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
    paddingLeft: 65,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#eee',
    shadowRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.13)',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SolicitarPrestamo;
