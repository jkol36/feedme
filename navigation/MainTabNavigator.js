import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import ChefScreen from '../screens/ChefScreen';
import MyFeedme from '../screens/MyFeedme';
import SettingsScreen from '../screens/SettingsScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ChefStack = createStackNavigator(
  {
    Home: ChefScreen,
  },
  config
);

ChefStack.navigationOptions = {
  tabBarLabel: 'Chefs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-contacts`
          : 'ios-contacts'
      }
    />
  ),
};

ChefStack.path = '';

const FeedMeStack = createStackNavigator(
  {
    MyFeedme: MyFeedme,
  },
  config
);

FeedMeStack.navigationOptions = {
  tabBarLabel: 'My Feedme',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'ios-contact'} />
  ),
};

FeedMeStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Bag',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-briefcase' : 'briefcase'} />
  ),
};

SettingsStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ChefStack,
  FeedMeStack,
  SettingsStack,
});

tabNavigator.path = '';

export default tabNavigator;
