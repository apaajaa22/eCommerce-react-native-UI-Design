import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Gap = ({height, width}) => {
  return <View style={styles.page(height, width)} />;
};

export default Gap;

const styles = StyleSheet.create({
  page: (height, width) => ({height: height, width: width}),
});
