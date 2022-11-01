import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from "../screens/splash-screen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen 
      options={{ headerShown: false}}
       name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;