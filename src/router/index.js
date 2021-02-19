import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Feed,
  GetStarted,
  MainPage,
  MyBasket,
  NamePage,
  Payment,
  StatusDelivery,
  SuccessOrder,
} from '../pages';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MyTabBottom = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MainPage" component={MainPage} />
      <Tab.Screen name="StatusDelivery" component={StatusDelivery} />
      <Tab.Screen name="Feed" component={Feed} />
    </Tab.Navigator>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MyTabBottom" component={MyTabBottom} />
    </Drawer.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NamePage"
        component={NamePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyDrawer"
        component={MyDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyTabBottom"
        component={MyTabBottom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MyBasket"
        component={MyBasket}
        options={{
          headerShown: false,
          ...TransitionPresets.DefaultTransition,
        }}
      />
      <Stack.Screen
        name="Payment"
        component={Payment}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
      <Stack.Screen
        name="SuccessOrder"
        component={SuccessOrder}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
