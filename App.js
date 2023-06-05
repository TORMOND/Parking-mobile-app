// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// import { useState } from 'react';
import { HomePage, loginPage, signupPage } from './slides';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
 
  
  return (

    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomePage}
        options={{title: 'Home'}}
      />
      <Stack.Screen name="Login" component={loginPage} />
    <Stack.Screen name="Signup" component={signupPage} />
    </Stack.Navigator>
  </NavigationContainer>
   
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
