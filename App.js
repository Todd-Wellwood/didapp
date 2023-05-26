// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen} from "./pages/Login";
import BottomBar from "./Navigation/BottomNavigation";
import {RegistrationConfirmationScreen} from "./pages/RegistrationConfirmation";
import {RelapseConfirmation} from "./pages/RelapseConfirmation";
import {ConfirmationLogout} from "./pages/ConfirmationLogout";
import {ConfirmPurge} from "./pages/ConfirmPurge";

const Stack = createNativeStackNavigator();

/*
 Navigation for buttons
*/
function App() {
    return (
        //This is used to provide navigation between different pages
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home Screen">
                <Stack.Screen name="Home Screen" component={LoginScreen}  options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;