import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/home-screen';
import ShortsScreen from '../screens/shorts-screen';
import UploadScreen from '../screens/upload-screen';
import SubscriptionScreen from '../screens/subscription-screen';
import LibraryScreen from '../screens/library-screen';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Shorts') {
            iconName = 'film';
          } else if (route.name === 'Upload') {
            iconName = 'cloud-upload';
          } else if (route.name === 'Subscription') {
            iconName = 'notifications';
          } else if (route.name === 'Library') {
            iconName = 'library';
          }

          // Return the appropriate Ionicons component with the given icon name
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Shorts"
        component={ShortsScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Upload"
        component={UploadScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Subscription"
        component={SubscriptionScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Library"
        component={LibraryScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
