
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/home";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Details from './src/detail';
import Change_Location from './src/changelocation';

// const Drawer = createDrawerNavigator();


const Stack = createNativeStackNavigator();
function App(){
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name="Details" component={Details}  />
      <Stack.Screen name="Change_Location" component={Change_Location}  />
    </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
