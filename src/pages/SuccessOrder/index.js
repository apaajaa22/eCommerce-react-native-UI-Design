import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcSuccessOrder} from '../../assets/Illustration';
import {Button, Gap} from '../../components/molecules';

const SuccessOrder = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapperLogo}>
        <IcSuccessOrder />
      </View>
      <Gap height={56} />
      <Text style={styles.title}>Congratulations!!!</Text>
      <Gap height={16} />
      <View style={styles.text}>
        <Text style={styles.subtitle}>
          Your order have been taken and is being attended to
        </Text>
      </View>
      <Gap height={56} />
      <View style={styles.button1}>
        <Button
          label="Track Order"
          onPress={() =>
            navigation.navigate('MyTabBottom', {screen: 'StatusDelivery'})
          }
        />
      </View>
      <Gap height={48} />
      <View style={styles.button2}>
        <Button label="Continue shopping" />
      </View>
    </View>
  );
};

export default SuccessOrder;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  wrapperLogo: {
    width: 164,
    height: 164,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0FFE5',
    borderRadius: 100,
  },
  title: {fontSize: 24, fontFamily: 'Transat-Medium'},
  subtitle: {fontSize: 18, fontFamily: 'Transat-Regular', textAlign: 'center'},
  text: {maxWidth: 247},
  button1: {width: 133, height: 56},
  button2: {width: 200, height: 70},
});
