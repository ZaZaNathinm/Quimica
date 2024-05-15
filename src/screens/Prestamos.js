import * as React from "react";
import { StyleSheet,TouchableOpacity, Text, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../../GlobalStyles";

import Icon from 'react-native-vector-icons/FontAwesome';

const Prestamos = ({ navigation }) => {

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
    inventario: {
        top: 188,
        fontSize: FontSize.subheader_size,
        lineHeight: 18,
        color: Color.colorBlack,
        textAlign:"justify",
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
        left: 70,
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
        width: 50,
        height: 50,
        position: "absolute",
    },
    toolbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        backgroundColor: 'white',
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

export default Prestamos;