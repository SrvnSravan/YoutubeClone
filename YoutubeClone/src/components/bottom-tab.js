import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home-screen';
import ShortsScreen from '../screens/shorts-screen';
import UploadScreen from '../screens/upload-screen';
import SubscriptionScreen from '../screens/subscription-screen';
import LibraryScreen from '../screens/library-screen';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ShortsScreen" component={ShortsScreen} />
      <Tab.Screen name="UploadScreen" component={UploadScreen} />
      <Tab.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
      <Tab.Screen name="LibraryScreen" component={LibraryScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
