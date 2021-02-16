import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILBasket} from '../../assets/Illustration';
import {Button} from '../../components/';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapper}>
        <ILBasket style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Get The Freshest Fruit Salad Combo</Text>
        <Text style={styles.subTitle}>
          We deliver the best and freshest fruit salad in town. Order for a
          combo today!!!
        </Text>
      </View>
      <Button
        label="Let’s Continue"
        onPress={() => navigation.navigate('NamePage')}
      />
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {padding: 15, flex: 1},
  wrapper: {
    flex: 1,
    backgroundColor: '#FFA451',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 34,
    maxHeight: '65%',
    marginBottom: 56,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Transat-Medium',
    color: '#27214D',
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Transat-Regular',
    color: '#5D577E',
    maxWidth: 282,
    marginBottom: 58,
  },
  content: {paddingLeft: 25},
});
