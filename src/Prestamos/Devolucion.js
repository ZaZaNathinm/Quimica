import * as React from "react";
import { StyleSheet,TouchableOpacity, Text, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../../GlobalStyles";
import Icon from 'react-native-vector-icons/FontAwesome';

const Devolucion = ({ navigation }) => {

  return (
    <View style={styles.solicitudDeEquipos}>
        
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
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        width: '100%',
        backgroundColor: Color.white,
        shadowRadius: 20,
        borderTopRightRadius: Border.br_3xs,
        borderTopLeftRadius: Border.br_3xs,
        shadowColor: "rgba(0, 0, 0, 0.13)",
      },
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});

export default Devolucion;