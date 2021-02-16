import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '..';
import {IcAdd, IcDollar, IcLike} from '../../../assets/Illustration';

const FoodCombo = ({title, price, image, backgroundColor}) => {
  return (
    <TouchableOpacity style={styles.page(backgroundColor)} activeOpacity={0.8}>
      <View style={styles.like}>
        <TouchableOpacity>
          <IcLike />
        </TouchableOpacity>
      </View>
      <View style={styles.wrapper}>
        <Image source={image} style={styles.image} />
        <Gap height={8} />
      </View>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.price}>
        <IcDollar />
        <Text style={styles.priceNumber}>{price}</Text>
        <TouchableOpacity>
          <IcAdd />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCombo;

const styles = StyleSheet.create({
  page: (backgroundColor) => ({
    paddingRight: 11,
    paddingLeft: 16,
    paddingVertical: 21,
    marginRight: 23,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: backgroundColor,
    width: 160,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  }),
  like: {alignItems: 'flex-end'},
  wrapper: {alignItems: 'center'},
  text: {fontFamily: 'Transat-Medium', fontSize: 16},
  price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  priceNumber: {flex: 1, marginLeft: 4, color: '#F08626'},
  image: {width: 64, height: 64},
});
