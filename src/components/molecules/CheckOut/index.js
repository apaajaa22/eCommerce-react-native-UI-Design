import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '..';
import {IcDollar} from '../../../assets/Illustration';

const CheckOut = ({onPress}) => {
  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>Total</Text>
        <View style={styles.wrapper}>
          <IcDollar />
          <Text style={styles.price}>60,000</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button label="Checkout" onPress={onPress} />
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {flexDirection: 'row', alignItems: 'center'},
  title: {fontSize: 16, fontFamily: 'Transat-Medium'},
  price: {fontSize: 24, fontFamily: 'Transat-Medium', marginLeft: 6},
  button: {width: 199, height: 56},
});
