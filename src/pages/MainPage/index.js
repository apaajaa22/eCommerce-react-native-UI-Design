import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IcBasket, ILDrawer, ILFood1, ILFood2} from '../../assets/Illustration';
import {
  FoodCombo,
  Gap,
  MainPageTabSection,
  SearchBar,
} from '../../components/molecules/';

const MainPage = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.wrapper}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer('MyDrawer')}>
            <ILDrawer />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.IcBasket}
            onPress={() => navigation.navigate('MyBasket')}>
            <IcBasket />
            <Text style={styles.textLogo}>My Basket</Text>
          </TouchableOpacity>
        </View>

        {/* Title */}
        <View style={styles.title}>
          <Text style={styles.textTitle}>
            Hello Kante, What fruit salad combo do you want today?
          </Text>
        </View>
        {/* Search Bar */}
        <SearchBar />
        {/*content*/}
        <Gap height={40} />
        <Text style={styles.combo}>Recommended Combo</Text>
        <Gap height={21} />
        <View style={styles.foodCombo}>
          <FoodCombo
            title="Honey lime combo"
            price="2,000"
            image={ILFood1}
            backgroundColor="white"
          />
          <FoodCombo
            title="Berry mango combo"
            price="8,000"
            image={ILFood2}
            backgroundColor="white"
          />
        </View>
      </View>
      <MainPageTabSection />
    </ScrollView>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  IcBasket: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textLogo: {fontSize: 10, fontFamily: 'Transat-Regular'},
  title: {maxWidth: 257, marginBottom: 41},
  textTitle: {fontSize: 20, fontFamily: 'Transat-Medium'},
  combo: {fontSize: 24, fontFamily: 'Transat-Medium'},
  foodCombo: {
    flexDirection: 'row',
  },
});
