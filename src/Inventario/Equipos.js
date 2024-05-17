import * as React from "react";
import { StyleSheet,TouchableOpacity, Text, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border, footer } from "../../GlobalStyles";
import Icon from 'react-native-vector-icons/FontAwesome';

const Equipos = ({ navigation }) => {

  return (
    <View style={styles.solicitudDeEquipos}>
        
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
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default Equipos;