
import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "./GlobalStyles";

const Principal = () => {
  return (
    <View style={styles.principal}>
      <View style={styles.buttonWrapper}>
        <View style={[styles.button, styles.buttonSpaceBlock]}>
          <Text style={[styles.label, styles.timeTypo]}>EMPEZAR</Text>
        </View>
      </View>
      <Text style={[styles.inventlab, styles.inventlabTypo]}>
        <Text style={styles.invent}>Invent</Text>
        <Text style={styles.lab}>Lab</Text>
      </Text>
      <Text style={[styles.laboratorioEscolar2024, styles.inventlabTypo]}>
        Laboratorio escolar 2024
      </Text>

      <Image
        style={styles.principalChild}
        contentFit="cover"
        source={require("./src/imgs/quimicos.png")}
      />
      <View style={styles.principalItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  timeTypo: {
    textAlign: "left",
    fontSize: FontSize.subheader2_size,
  },
  inventlabTypo: {
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  label: {
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: FontFamily.subheader2,
    color: Color.white,
  },
  button: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.orangePrimary,
    width: 327,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
  },
  buttonWrapper: {
    top: 652,
    left: 24,
    alignItems: "center",
    position: "absolute",
  },
  time: {
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorGray,
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
    top: 0,
    left: 0,
    width: 375,
    height: 52,
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xl,
    position: "absolute",
    overflow: "hidden",
  },
  invent: {
    color: Color.maroon,
  },
  lab: {
    color: Color.orangePrimary,
  },
  inventlab: {
    top: 106,
    left: 82,
    fontSize: FontSize.size_29xl,
    letterSpacing: 0.5,
  },
  laboratorioEscolar2024: {
    top: 171,
    left: 51,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0.2,
    color: Color.maroon,
  },
  principalChild: {
    top: 245,
    left: 40,
    width: 298,
    height: 299,
    position: "absolute",
  },
  principalItem: {
    top: 496,
    left: 91,
    width: 100,
    height: 100,
    position: "absolute",
    overflow: "hidden",
  },
  principal: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default Principal;
