import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "./GlobalStyles";

const Inventario = () => {
  return (
    <View style={styles.solicitudDeEquipos}>
      <Text style={[styles.invenatrio1, styles.equipoTypo]}>
        Inventario
      </Text>

      <View style={styles.solicitudPosition} />
      <View style={styles.solicitudPosition} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("./src/imgs/home.png")}
      />
      <Image
        style={[styles.groupIcon, styles.groupIconPosition]}
        contentFit="cover"
        source={require("./src/imgs/calendar.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconPosition]}
        contentFit="cover"
        source={require("./src/imgs/man.png")}
      />
      <View style={[styles.pexelsMartinLopez9545851Parent, styles.groupLayout]}>
        <Image
          style={[styles.pexelsMartinLopez9545851Icon, styles.groupLayout]}
          contentFit="cover"
          source={require("./src/imgs/material2.jpg")}
        />
        <View style={styles.rectangleWrapper}>
          <View style={styles.groupShadowBox} />
        </View>
        <Text style={[styles.material, styles.equipoTypo]}>
          Material Disponible
        </Text>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View
          style={[styles.pexelsMartinLopez9545851Group, styles.groupLayout]}
        >
          <Image
            style={[styles.pexelsMartinLopez9545851Icon, styles.groupLayout]}
            contentFit="cover"
            source={require("./src/imgs/equipos.jpg")}
          />
          <View style={styles.rectangleWrapper}>
            <View style={styles.groupShadowBox} />
          </View>
          <Text style={[styles.equipo, styles.equipoTypo]}>
            Equipos
          </Text>
        </View>
      </View>
      <View style={[styles.solicitudDeEquiposInner1, styles.groupLayout]}>
        <View
          style={[styles.pexelsMartinLopez9545851Group, styles.groupLayout]}
        >
          <Image
            style={[styles.pexelsMartinLopez9545851Icon, styles.groupLayout]}
            contentFit="cover"
            source={require("./src/imgs/productos.png")}
          />
          <View style={styles.rectangleWrapper}>
            <View style={styles.groupShadowBox} />
          </View>
          <Text style={[styles.productos, styles.equipoTypo]}>
            Productos Químicos
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  equipoTypo: {
    fontFamily: FontFamily.display,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  pexelsPosition: {
    left: 0,
    top: 0,
  },
  groupIconPosition: {
    top: "94.45%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupLayout: {
    height: 190,
    width: 322,
    position: "absolute",
  },
  invenatrio1: {
    top: 59,
    left: 150,
    fontSize: FontSize.display_size,
    lineHeight: 26,
    color: Color.colorBlack,
    textAlign: "left",
  },
  time: {
    fontSize: FontSize.subheader2_size,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorGray,
    textAlign: "left",
  },
  cameraCutoutIcon: {
    width: 24,
    height: 24,
    display: "none",
  },
  rightIcons: {
    width: 46,
    height: 17,
  },
  devicedeviceFrameComponents: {
    width: 375,
    height: 52,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    position: "absolute",
    overflow: "hidden",
  },
  solicitudPosition: {
    height: 70,
    width: 372,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowColor: "rgba(0, 0, 0, 0.13)",
    borderTopRightRadius: Border.br_3xs,
    borderTopLeftRadius: Border.br_3xs,
    top: "50%",
    marginTop: 336,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  vectorIcon: {
    height: "3.69%",
    width: "9.07%",
    top: "93.84%",
    right: "45.87%",
    bottom: "2.46%",
    left: "45.07%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon: {
    height: "3.17%",
    width: "7.65%",
    right: "77.28%",
    bottom: "2.39%",
    left: "15.07%",
  },
  groupIcon1: {
    height: "3.18%",
    width: "6.08%",
    right: "17.44%",
    bottom: "2.38%",
    left: "76.48%",
  },
  pexelsMartinLopez9545851Icon: {
    borderRadius: Border.br_lgi,
    left: 0,
    top: 0,
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
    top: 156,
    height: 34,
    width: 322,
    left: 0,
    position: "absolute",
  },
  equipo: {
    top: 162,
    left: 141,
    fontSize: FontSize.subheader3_size,
    lineHeight: 18,
    color: Color.colorBlack,
    width: 142,
    height: 17,
    textAlign: "left",
  },
  productos: {
    top: 162,
    left: 110,
    fontSize: FontSize.subheader3_size,
    lineHeight: 18,
    color: Color.colorBlack,
    width: 142,
    height: 17,
    textAlign: "left",
  },
  material: {
    top: 162,
    left: 110,
    fontSize: FontSize.subheader3_size,
    lineHeight: 18,
    color: Color.colorBlack,
    width: 142,
    height: 17,
    textAlign: "left",
  },
  pexelsMartinLopez9545851Parent: {
    top: 105,
    left: 29,
    width: 322,
  },
  pexelsMartinLopez9545851Group: {
    left: 0,
    top: 0,
  },
  groupView: {
    top: 318,
    left: 29,
    width: 322,
  },
  solicitudDeEquiposInner1: {
    top: 530,
    left: 29,
    width: 322,
  },
  solicitudDeEquipos: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    Color: Color.colorBlack,
    backgroundColor: Color.white,
  },
});

export default Inventario;
