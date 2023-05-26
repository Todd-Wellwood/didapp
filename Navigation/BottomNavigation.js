//CustomNavigation.js, used for navigation via buttons

import React from "react";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from "../pages/Home";
import MapScreen from "../pages/Map";
import {InformationScreen} from "../pages/Information";
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

/*
 Navigation bar at bottom of the screen once the user has signed in
*/
export default function BottomBar() {
    return (
        <Tab.Navigator initialRouteName="Home" options={{headerShown: false}}
                       screenOptions={({route}) => ({
                           tabBarIcon: ({focused, color, size}) => {
                               let iconName;

                               if (route.name === 'Home') {
                                   iconName = focused ? 'ios-flask' : 'ios-flask-outline';
                               } else if (route.name === 'Information') {
                                   iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
                               }
                               else if (route.name === 'Map') {
                                   iconName = focused ? 'ios-map' : 'ios-map-outline';
                               }

                               // You can return any component that you like here!
                               return <Ionicons name={iconName} size={size} color={color}/>;
                           },
                           tabBarActiveTintColor: 'tomato',
                           tabBarInactiveTintColor: 'gray',
                       })}
        >

            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Information" component={InformationScreen}/>
            <Tab.Screen name="Map" component={MapScreen}/>
        </Tab.Navigator>
    )
}


