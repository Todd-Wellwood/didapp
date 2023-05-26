// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ChatScreen} from "./pages/ChatScreen";
import {SwitchUserScreen} from "./pages/SwitchUserScreen";
import BottomBar from "./Navigation/BottomNavigation";

const Stack = createNativeStackNavigator();

/*
 Navigation for buttons
*/
function App() {
    return (
        //This is used to provide navigation between different pages
        <NavigationContainer>
            <Stack.Navigator initialRouteName="BottomNavigation">
                <Stack.Screen name="Chat Screen" component={ChatScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="Switch User" component={SwitchUserScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="BottomNavigation" component={BottomBar} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;