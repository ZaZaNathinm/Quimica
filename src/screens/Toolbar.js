import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Toolbar = ({ title, navigation }) => {
  return (
    <View style={styles.toolbar}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.toolbarButton}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.toolbarTitle}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.toolbarButton}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#2196F3',
    paddingHorizontal: 10,
  },
  toolbarButton: {
    color: '#fff',
    fontSize: 18,
  },
  toolbarTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Toolbar;
