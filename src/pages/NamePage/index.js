import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ILBasket2} from '../../assets/Illustration';
import {Button, Gap, TextInput} from '../../components/';

const NamePage = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <View style={styles.wrapper}>
          <ILBasket2 />
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.title}>What is your firstname?</Text>
          </View>
          <Gap height={16} />
          <TextInput placeholder="Isi nama disini" />
          <Gap height={42} />
          <Button
            label="Start Ordering"
            onPress={() => navigation.navigate('MyDrawer')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default NamePage;

const styles = StyleSheet.create({
  page: {padding: 15, flex: 1},
  wrapper: {
    flex: 1,
    backgroundColor: '#FFA451',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 134,
    paddingBottom: 34,
    maxHeight: '100%',
    marginBottom: 40,
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
  contentContainer: {flex: 1, paddingHorizontal: 24},
});
