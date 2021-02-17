import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  IcOrderDelivered,
  IcOrderPrepare,
  IcOrderTaken,
  IcOrderSuccess,
  IcSuccessStatus,
  IcOrderPhone,
  IcOrderWaiting,
} from '../../../assets/Illustration';

const OrderStatusDelivery = ({color, Icons, Status}) => {
  const Icon = () => {
    switch (Icons) {
      case 'taken':
        return <IcOrderTaken />;
      case 'prepare':
        return <IcOrderPrepare />;
      case 'delivery':
        return <IcOrderDelivered />;
      case 'success':
        return <IcOrderSuccess />;
      default:
        return <IcOrderTaken />;
    }
  };

  const IconStatus = () => {
    switch (Status) {
      case 'success':
        return <IcSuccessStatus />;
      case 'delivered':
        return <IcOrderPhone />;
      case 'waiting':
        return <IcOrderWaiting />;
      default:
        return <IcSuccessStatus />;
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.wrapper(color)}>
        <Icon />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Order Taken</Text>
      </View>
      <View style={styles.wrapper}>
        <IconStatus />
      </View>
    </View>
  );
};

export default OrderStatusDelivery;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapper: (color) => ({
    padding: 9,
    backgroundColor: color,
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }),
  title: {flex: 1, marginLeft: 16},
  titleText: {fontFamily: 'Transat-Medium', fontSize: 16},
});
