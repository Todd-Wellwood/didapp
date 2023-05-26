//CustomNavigation.js, used for navigation via buttons

import React from "react";

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ChatScreen} from "../pages/ChatScreen";
import {Ionicons} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

/*
 Navigation bar at bottom of the screen once the user has signed in
*/
export default function BottomBar() {
    return (
        <Tab.Navigator initialRouteName="Chat" options={{headerShown: false}}
                       screenOptions={({route}) => ({
                           tabBarIcon: ({focused, color, size}) => {
                               let iconName;

                               if (route.name === 'Chat') {
                                   iconName = focused ? 'chatbox' : 'chatbox-outline';
                               } else if (route.name === 'Switch User') {
                                   iconName = focused ? 'person' : 'person-outline';
                               }

                               // You can return any component that you like here!
                               return <Ionicons name={iconName} size={size} color={color}/>;
                           },
                           tabBarActiveTintColor: 'tomato',
                           tabBarInactiveTintColor: 'gray',
                       })}
        >

            <Tab.Screen name="Chat" component={ChatScreen}/>
            <Tab.Screen name="Switch User" component={ChatScreen}/>
        </Tab.Navigator>
    )
}


