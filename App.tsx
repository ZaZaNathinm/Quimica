import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

const Principal = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFCFF' }}>
      
      
      <Text style={styles.textStyleHead}>
        InventLab
      </Text>

      <Text style={styles.textStyleH2}>
        Laboratorio escolar 2024
      </Text>

      <Image
        source={require('./src/imgs/quimicos.png')}
        style={{ width: 287, height: 287 }}
      />

      <View style ={styles.buttonStyleLogin}>
        <Button 
          title="Entrar"
          color="#FFBF99"/>
      </View>
      
        
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleHead: {
    fontFamily: 'Nunito', 
    color: '#804000', 
    fontSize: 60, 
    marginTop: 64 
  },

  textStyleH2: {
    fontFamily: 'nunito', 
    color: '#874356', 
    fontSize: 30, 
    marginTop: 64 
  },


  buttonStyleLogin: {
    width: 301, 
    marginBottom: 120, 
    backgroundColor: '#FFBF99',
    color: '#FFBF99'
  }

})

export default Principal;
