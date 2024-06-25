import * as React from "react";
import { StyleSheet,TouchableOpacity, Text, View, Image} from "react-native";
import { FontFamily, FontSize, Color, Padding, Border, footer } from "../../GlobalStyles";
import Icon from 'react-native-vector-icons/FontAwesome';


const MenuPrincipal = ({ navigation }) =>{


  return (
    <View style={styles.solicitudDeEquipos}>
        <View style={styles.toolbar}>
            <Image
                style={styles.solicitudDeEquiposChild}
                contentFit="cover"
                source={require("../imgs/logo2.png")}
        	/>
            <Text style={[styles.helloArina, styles.helloArinaTypo]}>
                Bienvenido Adrian
            </Text>

            <TouchableOpacity style={styles.iconContainer2}>
                <Icon name="file-o" size={30} color="#874356" />
                <Text style ={styles.prestamosLetra}>
                    0
                </Text>
            </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.container1} onPress={() => navigation.navigate('Material')}>
            <Image
                style={[styles.Icon1, styles.groupLayout]}
                contentFit="cover"
                source={require("../imgs/material_portada.png")}
            />
            <View style={styles.rectangleWrapper}>
                <View style={styles.groupShadowBox} />
            </View>
            <Text style={[styles.inventario, styles.helloArinaTypo]}>
                Material
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container2} onPress={() => navigation.navigate('Prestamos')}>
            <Image
                style={[styles.Icon1, styles.groupLayout]}
                contentFit="cover"
                source={require("../imgs/prestamos_portada.png")}
            />
            <View style={styles.rectangleWrapper}>                    
                <View style={styles.groupShadowBox} />
            </View>
            <Text style={[styles.inventario, styles.helloArinaTypo]}>
                Préstamos
            </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.container3} onPress={() => navigation.navigate('Calendario')}>
            <Image
                style={[styles.Icon1, styles.groupLayout]}
                contentFit="cover"
                source={require("../imgs/calendario.png")}
            />
            <View style={styles.rectangleWrapper}>
                <View style={styles.groupShadowBox} />
            </View>
            <Text style={[styles.inventario, styles.helloArinaTypo]}>
                Calendario
            </Text>
        </TouchableOpacity>
    

        <View style = {footer}>
            <TouchableOpacity style={styles.iconContainer}>
                <Icon name="home" size={30} color="#874356" />
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
      iconContainer2: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 26,
      },
    inventario: {
        top: 188,
        fontSize: FontSize.subheader_size,
        lineHeight: 18,
        color: Color.colorBlack,
        textAlign:"justify",
        marginRight: 16,
      },
      prestamosLetra: {
        position: 'absolute',
        //top: '50%',  // Ajusta según sea necesario para centrar verticalmente
        //left: '50%', // Ajusta según sea necesario para centrar horizontalmente
        transform: [{ translateX: -4 }, { translateY: 2 }], // Centra el texto exactamente en el centro del icono
        color: '#874356', // Ajusta el color del texto según sea necesario
        fontSize: 16, // Ajusta el tamaño del texto según sea necesario

      },
    groupShadowBox: {
        elevation: 4,
        shadowRadius: 4,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        borderBottomLeftRadius: Border.br_xl,
        borderBottomRightRadius: Border.br_xl,
        height: 34,
        width: 322,
        shadowOpacity: 1,
        shadowOffset: {
          width: 0,
          height: -1,
        },
        left: 0,
        top: 0,
        position: "absolute",
        backgroundColor: Color.white,
      },
    rectangleWrapper: {
        top: 180,
        height: 34,
        width: 322,
        position: "absolute",
      },
    container1: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    container2: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    container3: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    
    Icon1: {
        borderRadius: Border.br_lgi,
        position: 'relative',
      },
    solicitudDeEquiposInner1: {
        top: 530,
        left: 29,
        width: 322,
      },
    groupLayout: {
        height: 180,
        width: 322,
        position: "absolute",
    },

    helloArina: {
        left: 65,
        fontSize: FontSize.display_size,
        lineHeight: 26,
        color: Color.orangePrimary,
        textAlign: "left",
    },
    helloArinaTypo: {
        fontFamily: FontFamily.display,
        fontWeight: "700",
        textAlign: "left",
        position: "absolute",
    },
    solicitudDeEquiposChild: {
        left: 10,
        width: 45,
        height: 45,
        position: "absolute",
    },
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        backgroundColor: "#D9D9D9",
        borderBottomRightRadius: Border.br_3xs,
        borderBottomLeftRadius : Border.br_3xs,
    },
    toolbarTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    solicitudDeEquipos: {
        backgroundColor: Color.white,
        flex: 1,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        flexDirection: 'column',

  },
});

export default MenuPrincipal;