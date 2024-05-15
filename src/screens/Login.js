import * as React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import { Padding, FontFamily, Color, FontSize, Border } from "../../GlobalStyles";

const Login = ({navigation}) => {
    const handlePress = ({navigate}) => {
        console.log('Botón presionado');
        navigation.navigate('Menu');
        
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
            <View style={[styles.form, styles.formFlexBox]}>
                <Text style={[styles.label, styles.labelTypo]}>
                    Número de boleta
                </Text>
                <View style={styles.placeholderWrapper}>
                <Text style={[styles.placeholder, styles.labelTypo]}>
                    Escribe tu número de boleta
                </Text>
                </View>
            </View>
            <View style={[styles.form1, styles.formFlexBox]}>
                <Text style={[styles.label, styles.labelTypo]}>Password</Text>
                <View style={styles.placeholderWrapper}>
                <Text style={[styles.placeholder, styles.labelTypo]}>
                    Escribe tu password
                </Text>
                <Image
                    style={styles.drooplinevisibilityIcon}
                    contentFit="cover"
                    source={require("../imgs/ojo.png")}
                />
            </View>
          </View>

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
        justifyContent: 'flex-start',
        alignItems: 'center',
        
      },
    container4: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
  
      },
    drooplinevisibilityIcon: {
        width: 16,
        height: 16,
        marginLeft: 10,
      },
    formFlexBox: {
        justifyContent: "center",
        width: 327,
      },    
    inventlab: {
        fontSize: FontSize.size_29xl,
        letterSpacing: 0.5,
        alignItems: "center",
        justifyContent: 'center',
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
    laboratorioEscolar2024: {
        fontSize: FontSize.size_5xl,
        letterSpacing: 0.2,
        color: Color.maroon,
        alignItems: "center",
        justifyContent: 'center',
      },
    label: {
        color: Color.gray2,
        lineHeight: 18,
        fontSize: FontSize.subheader3_size,
        fontWeight: "600",
        alignSelf: "stretch",
      },
    labelTypo: {
        fontFamily: FontFamily.subheader2,
        fontWeight: "600",
        textAlign: "left",
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

export default Login;