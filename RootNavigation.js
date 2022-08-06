import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from './src/screens/DetailsScreen';
import OTPScreen from './src/screens/OTPScreen';
import LoginScreen from './src/screens/LoginScreen'
import BottomTabBar from "./src/tabnavigation/BottomTabBar";

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
        initialRouteName='Home'
      >
        
        <Stack.Screen name='Home' component={BottomTabBar} />
        <Stack.Screen name='OTP' component={OTPScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default RootNavigation;