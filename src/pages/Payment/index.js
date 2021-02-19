import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Button, Gap, TextInput} from '../../components';

const Payment = ({onPress}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity style={styles.wrapperX} activeOpacity={0.6}>
        <Icon name="x" size={28} />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Text>Card Holders Name</Text>
          <Gap height={16} />
          <TextInput placeholder="Rahadian Reza" />
          <Gap height={16} />
          <Text>Card Number</Text>
          <Gap height={16} />
          <TextInput placeholder="1234 5678 9011" />
          <Gap height={16} />
          <View style={styles.wrapperFlex}>
            <View style={styles.wrapperContent}>
              <Text>Date</Text>
              <Gap height={16} />
              <TextInput placeholder="10/30" />
            </View>
            <View style={styles.wrapperContent}>
              <Text>CCV</Text>
              <Gap height={16} />
              <TextInput placeholder="123" />
            </View>
          </View>
          <Gap height={50} />
          <View>
            <Button label="Complete Order" onPress={onPress} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Payment;

const styles = StyleSheet.create({
  page: {
    margin: 15,
    marginTop: 30,
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    paddingTop: '70%',
  },
  wrapperX: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 185,
    top: 260,
  },
  wrapper: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  wrapperFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapperContent: {width: 134, height: 56},
});
