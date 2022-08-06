import React from 'react';
import { COLORS, SHADOWS, SIZES } from '../../constants';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ChatScreen from '../screens/ChatScreen';
import Notification from '../screens/Notification';

const Tab = createBottomTabNavigator();

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 20,
        backgroundColor: COLORS.white,
              borderColor: COLORS.gray,
        alignItems: 'center',
              justifyContent: 'space-between',
              ...SHADOWS.dark,
              borderWidth: .3,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;
        const TabBarIcon = options.tabBarIcon;

        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(route.name)}
            style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <TabBarIcon
              size={SIZES.extraLarge2}
              color={isFocused ? COLORS.primary : COLORS.primary}
              focused={isFocused}
            />
            {isFocused && (
              <View
                style={{
                  height: 6,
                  width: 30,
                  backgroundColor: COLORS.primary,
                  position: 'absolute',
                  top: -20,
                  borderBottomLeftRadius:6,
                  borderBottomRightRadius: 6,
                }}
              />
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


const BottomTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name='HomeScreen' 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'home' : 'home'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      
      <Tab.Screen
              name="ChatScreen"
              component={ChatScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'chat' : 'chat'}
              size={size}
              color={color}
            />
          ),
        }}
          />
          <Tab.Screen
              name="Notification"
              component={Notification}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'bell' : 'bell'}
              size={size}
              color={color}
            />
          ),
        }}
          />
          <Tab.Screen
              name="ProfileScreen"
              component={ProfileScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon
              name={focused ? 'account' : 'account'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabBar


