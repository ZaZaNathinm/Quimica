import * as React from "react";
import { Text, StyleSheet, View, Image} from "react-native";
import { Padding, FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <View style={styles.loginChild} />
      <View style={styles.frameParent}>
        <View>
          <View style={[styles.form, styles.formFlexBox]}>
            <Text style={[styles.label, styles.labelTypo]}>
              Número de boleta
            </Text>
            <View style={styles.placeholderWrapper}>
              <Text style={[styles.placeholder, styles.labelTypo]}>
                Type your número de boleta
              </Text>
            </View>
          </View>
          <View style={[styles.form1, styles.formFlexBox]}>
            <Text style={[styles.label, styles.labelTypo]}>Password</Text>
            <View style={styles.placeholderWrapper}>
              <Text style={[styles.placeholder, styles.labelTypo]}>
                Set your password
              </Text>
              <Image
                style={styles.drooplinevisibilityIcon}
                contentFit="cover"
                source={require("./src/imgs/ojo.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <View style={[styles.button, styles.formFlexBox]}>
            <Text style={[styles.label2, styles.labelTypo]}>Login</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.inventlab, styles.inventlabTypo]}>
        <Text style={styles.invent}>Invent</Text>
        <Text style={styles.lab}>Lab</Text>
      </Text>
      <Text style={[styles.laboratorioEscolar2024, styles.inventlabTypo]}>
        Laboratorio escolar 2024
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonSpaceBlock: {
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  formFlexBox: {
    justifyContent: "center",
    width: 327,
  },
  labelTypo: {
    fontFamily: FontFamily.subheader2,
    fontWeight: "600",
    textAlign: "left",
  },
  inventlabTypo: {
    fontFamily: FontFamily.nunitoExtraBold,
    fontWeight: "800",
    textAlign: "left",
    position: "absolute",
  },
  time: {
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.colorGray,
    textAlign: "left",
    fontSize: FontSize.subheader2_size,
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
  loginChild: {
    top: 145,
    left: 76,
    width: 235,
    height: 33,
    alignItems: "center",
    position: "absolute",
  },
  label: {
    color: Color.gray2,
    lineHeight: 18,
    fontSize: FontSize.subheader3_size,
    fontWeight: "600",
    alignSelf: "stretch",
  },
  placeholder: {
    color: Color.gray4,
    lineHeight: 18,
    fontSize: FontSize.subheader3_size,
    fontWeight: "600",
    flex: 1,
  },
  placeholderWrapper: {
    borderRadius: Border.br_xs,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_xs,
    marginTop: 8,
    alignSelf: "stretch",
    flexDirection: "row",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  form: {
    overflow: "hidden",
  },
  drooplinevisibilityIcon: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },
  form1: {
    marginTop: 16,
    overflow: "hidden",
  },
  label2: {
    lineHeight: 22,
    color: Color.white,
    fontWeight: "600",
    fontSize: FontSize.subheader2_size,
  },
  button: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.orangePrimary,
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
  },
  buttonWrapper: {
    marginTop: 24,
    alignItems: "center",
  },
  frameParent: {
    top: 333,
    left: 24,
    position: "absolute",
  },
  invent: {
    color: Color.maroon,
  },
  lab: {
    color: Color.orangePrimary,
  },
  inventlab: {
    top: 142,
    left: 75,
    fontSize: FontSize.size_29xl,
    letterSpacing: 0.5,
  },
  laboratorioEscolar2024: {
    top: 197,
    left: 38,
    fontSize: FontSize.size_5xl,
    letterSpacing: 0.2,
    color: Color.maroon,
  },
  login: {
    width: "100%",
    height: 812,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Login;