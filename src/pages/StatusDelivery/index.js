import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {ILMap} from '../../assets/Illustration';
import {Gap, Header, OrderStatusDelivery} from '../../components/molecules';

const StatusDelivery = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header onPress={() => navigation.goBack()} title="Delivery Status" />
        <Gap height={40} />
        <OrderStatusDelivery
          label="Order Taken"
          Icons="taken"
          Status="success"
          color="#FFFAEB"
        />
        <Gap height={48} />
        <OrderStatusDelivery
          label="Order Is Being Prepared"
          Icons="prepare"
          Status="delivered"
          color="#F1EFF6"
        />
        <Gap height={48} />
        <OrderStatusDelivery
          label="Order Is Being Delivered"
          Icons="delivery"
          Status="success"
          color="#FEF0F0"
        />
        <Gap height={26} />
        <View style={styles.image}>
          <Image source={ILMap} />
        </View>
        <Gap height={48} />
        <OrderStatusDelivery
          label="Order Received"
          Icons="success"
          Status="waiting"
          color="#F0FEF8"
        />
        <Gap height={24} />
      </ScrollView>
    </View>
  );
};

export default StatusDelivery;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  image: {
    maxWidth: '100%',
    paddingLeft: 25,
  },
});
