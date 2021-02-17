import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Gap} from '..';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.wrapper}>
          <Icon name="chevron-left" size={28} />
          <Text style={styles.textBack}>Go Back</Text>
        </View>
      </TouchableOpacity>
      <Gap width={14} />
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFA451',
    maxWidth: '100%',
    height: 145,
    alignItems: 'center',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginTop: 15,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 100,
    marginLeft: 24,
  },
  header: {justifyContent: 'center', flex: 1},
  textBack: {fontFamily: 'Transat-Regular', fontSize: 16},
  title: {fontFamily: 'Transat-Medium', fontSize: 24, color: 'white'},
});
