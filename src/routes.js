import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home'
const AppStack = createStackNavigator();

export default function Routes (){


    return(

        <NavigationContainer>

            <AppStack.Navigator screenOptions={{headerShown:false}}>

                <AppStack.Screen name="Login" component ={Login}/>
                <AppStack.Screen name="Register" component ={Register}/>
                <AppStack.Screen name="Home" component ={Home}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}