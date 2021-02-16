import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FoodCombo, Gap} from '..';
import {ILFood1, ILFood3, ILFood4} from '../../../assets/Illustration';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#FFA451',
      width: '15%',
      height: '5%',
    }}
    style={{backgroundColor: 'white'}}
    tabStyle={{width: 'auto', height: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Transat-Medium',
          fontSize: 16,
          color: focused ? '#27214D' : '#938DB5',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const Hottest = () => (
  <View style={[styles.scene, {backgroundColor: 'white'}]}>
    <Gap height={24} />
    <ScrollView
      horizontal
      style={{flexDirection: 'row'}}
      showsHorizontalScrollIndicator={false}>
      <Gap width={23} />
      <FoodCombo
        title="Honey lime combo"
        price="10,000"
        image={ILFood3}
        backgroundColor="#FFFAEB"
      />
      <FoodCombo
        title="Tropical fruit salad"
        price="10,000"
        image={ILFood4}
        backgroundColor="#FEF0F0"
      />
      <FoodCombo
        title="Melon fruit salad"
        price="10,000"
        image={ILFood1}
        backgroundColor="#F1EFF6"
      />
    </ScrollView>
    <Gap height={24} />
  </View>
);

const Popular = () => (
  <View style={[styles.scene, {backgroundColor: 'white'}]}>
    <Gap height={24} />
    <ScrollView
      horizontal
      style={{flexDirection: 'row'}}
      showsHorizontalScrollIndicator={false}>
      <Gap width={23} />
      <FoodCombo
        title="Honey lime combo"
        price="10,000"
        image={ILFood3}
        backgroundColor="#FFFAEB"
      />
      <FoodCombo
        title="Melon fruit salad"
        price="10,000"
        image={ILFood1}
        backgroundColor="#F1EFF6"
      />
      <FoodCombo
        title="Tropical fruit salad"
        price="10,000"
        image={ILFood4}
        backgroundColor="#FEF0F0"
      />
    </ScrollView>
    <Gap height={24} />
  </View>
);
const NewCombo = () => (
  <View style={[styles.scene, {backgroundColor: 'white'}]}>
    <Gap height={24} />
    <ScrollView
      horizontal
      style={{flexDirection: 'row'}}
      showsHorizontalScrollIndicator={false}>
      <Gap width={23} />

      <FoodCombo
        title="Tropical fruit salad"
        price="10,000"
        image={ILFood4}
        backgroundColor="#FEF0F0"
      />
      <FoodCombo
        title="Melon fruit salad"
        price="10,000"
        image={ILFood1}
        backgroundColor="#F1EFF6"
      />
      <FoodCombo
        title="Honey lime combo"
        price="10,000"
        image={ILFood3}
        backgroundColor="#FFFAEB"
      />
    </ScrollView>
    <Gap height={24} />
  </View>
);
const Top = () => (
  <View style={[styles.scene, {backgroundColor: 'white'}]}>
    <Gap height={24} />
    <ScrollView
      horizontal
      style={{flexDirection: 'row'}}
      showsHorizontalScrollIndicator={false}>
      <Gap width={23} />
      <FoodCombo
        title="Tropical fruit salad"
        price="10,000"
        image={ILFood4}
        backgroundColor="#FEF0F0"
      />
      <FoodCombo
        title="Honey lime combo"
        price="10,000"
        image={ILFood3}
        backgroundColor="#FFFAEB"
      />
      <FoodCombo
        title="Melon fruit salad"
        price="10,000"
        image={ILFood1}
        backgroundColor="#F1EFF6"
      />
    </ScrollView>
    <Gap height={24} />
  </View>
);

const initialLayout = {width: Dimensions.get('window').width};

export default function MainPageTabSection() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'Hottest', title: 'Hottest'},
    {key: 'Popular', title: 'Popular'},
    {key: 'NewCombo', title: 'New Combo'},
    {key: 'Top', title: 'Top'},
  ]);

  const renderScene = SceneMap({
    Hottest: Hottest,
    Popular: Popular,
    NewCombo: NewCombo,
    Top: Top,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
    />
  );
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
