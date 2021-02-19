import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {CheckOut, Header, ListItemFood} from '../../components';
import Payment from '../Payment';

const MyBasket = ({navigation}) => {
  const [isPayment] = useState(true);
  return (
    <View style={styles.page}>
      <Header title="My Basket" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.wrapper}>
          <ListItemFood color="#FFFAEB" />
          <ListItemFood color="#F1EFF6" />
          <ListItemFood color="#FEF0F0" />
        </View>
        <View style={styles.wrapper}>
          <CheckOut onPress={() => {}} />
        </View>
      </View>
      {isPayment && (
        <Payment onPress={() => navigation.navigate('SuccessOrder')} />
      )}
    </View>
  );
};

export default MyBasket;

const styles = StyleSheet.create({
  page: {
    padding: 15,
    backgroundColor: 'white',
    flex: 1,
  },
  content: {justifyContent: 'space-between', flex: 1},
  wrapper: {paddingVertical: 40, paddingHorizontal: 24},
});
