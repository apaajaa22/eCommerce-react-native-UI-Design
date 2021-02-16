import React from 'react';
import {StyleSheet, Text, View, TextInput as InputText} from 'react-native';

const TextInput = ({placeholder}) => {
  return (
    <View>
      <InputText placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F3F1F1',
    paddingHorizontal: 20,
    paddingVertical: 14,
    maxWidth: '100%',
    fontSize: 20,
    fontFamily: 'Transat-Medium',
  },
});
