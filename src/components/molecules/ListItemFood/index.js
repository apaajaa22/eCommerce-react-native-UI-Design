import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IcDollar, ILFood6} from '../../../assets/Illustration';

const ListItemFood = ({color}) => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapper(color)}>
        <Image source={ILFood6} style={styles.image} />
      </View>
      <View style={styles.warpperItem}>
        <Text style={styles.title}>Quinoa fruit salad</Text>
        <Text style={styles.subTitle}>2 packs</Text>
      </View>
      <View style={styles.wrapperPrice}>
        <IcDollar />
        <Text style={styles.priceItem}>2000</Text>
      </View>
    </View>
  );
};

export default ListItemFood;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F4F4F4',
    marginBottom: 10,
  },
  wrapper: (color) => ({
    backgroundColor: color,
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 16,
  }),
  title: {fontSize: 16, fontFamily: 'Transat-Regular'},
  subTitle: {fontSize: 14, fontFamily: 'Transat-Regular'},
  warpperItem: {flex: 1, marginLeft: 10},
  wrapperPrice: {flexDirection: 'row', alignItems: 'center'},
  image: {width: 40, height: 40},
  priceItem: {marginLeft: 10, fontSize: 16, fontFamily: 'Transat-Regular'},
});
