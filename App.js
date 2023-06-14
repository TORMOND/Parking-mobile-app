
import { HomePage, LoginPage, SignupPage, MainPage } from './slides';
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
    <Stack.Screen name="Login" component={LoginPage} />
    <Stack.Screen name="Signup" component={SignupPage} />
    <Stack.Screen name="MainPage" component={MainPage} />
    </Stack.Navigator>
  </NavigationContainer>
   
    
  );
}

