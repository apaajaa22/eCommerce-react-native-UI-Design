import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({onPress, label}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.Button}
      onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  Button: {
    backgroundColor: '#FFA451',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '100%',
    height: 56,
    borderRadius: 10,
  },
  label: {color: 'white', fontSize: 16},
});
