import * as React from "react";
import { Text, StyleSheet, TouchableOpacity, View, Image, Dimensions } from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../../GlobalStyles";


const Principal = () => {

  const handlePress = () => {
    console.log('Botón presionado');
    
  };

  return (
    <View style={styles.principal}>
      <View style={styles.container}>
        <Text style={[styles.inventlab, styles.inventlabTypo]}> 
          <Text style={styles.invent}>Invent</Text>
          <Text style={styles.lab}>Lab</Text>
        </Text>
      </View>
      <View style={styles.container2}>
        <Text style={[styles.laboratorioEscolar2024, styles.inventlabTypo]}>
          Laboratorio escolar 2024
        </Text>
      </View>

      <View style={styles.container3}>
        <Image
          style={styles.principalChild}
          contentFit="cover"
          source={require("../imgs/quimicos.png")}
        />
      </View>
      <View style={styles.container4}>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>EMPEZAR</Text>
        </TouchableOpacity>
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.orangePrimary,
    width: 327,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  principalChild: {
    position: "relative",
    height: 299,
    width: 299,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container2: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  container3: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  container4: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inventlab: {
    fontSize: FontSize.size_29xl,
    letterSpacing: 0.5,
    alignItems: "center",
    justifyContent: 'center',
  },
  laboratorioEscolar2024: {
    fontSize: FontSize.size_5xl,
    letterSpacing: 0.2,
    color: Color.maroon,
    alignItems: "center",
    justifyContent: 'center',
  },
  inventlabTypo: {
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  inventlabTypo: {
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  invent: {
    color: Color.maroon,
  },
  lab: {
    color: Color.orangePrimary,
  },
  principal: {
    backgroundColor: Color.white,
    flex: 1,
    padding: 10,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    flexDirection: 'column',
  },
});

export default Principal;
