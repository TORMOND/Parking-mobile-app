import  { useState } from 'react';
import { 
  ActivityIndicator, 
  SafeAreaView, 
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  Image
} from 'react-native';

import styles from './loginpage.syles.js'
import parkedAudi from './parkedAudi.jpg'

function LoginPage({navigation}) {
    const logIn = ()=>{
      navigation.navigate('MainPage');
    }
    const [loading, isLoading] = useState(false)
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
  return (
    <SafeAreaView style={{flex: 1}}>
 <View
  style={styles.container}
  >
     <Image
        source={parkedAudi}
        resizeMode='cover'
        
        />
    <View>
       <View >
    <TextInput
     value={email}
     onChangeText={(text) => setEmail(text)}
     placeholder='email'
     style={styles.TextInput}
     />
    <TextInput
     value={password}
     type='password'
     onChangeText={(text)=>setPassword(text)}
     placeholder='password'
     style={styles.TextInput}
     />
    </View>
   
    <TouchableOpacity
            style={styles.Login}
     >
        { !loading && 
        <Text
         style={styles.loginText}
         onPress={logIn}
         >LOGIN</Text> }
        { loading &&  <ActivityIndicator size="small"  /> }     
    </TouchableOpacity>
    </View>
  
   <View style={styles.SignIn}>
    <Text>Don't have an account? </Text>
    <TouchableOpacity>
    <Text
         style={styles.signInText}
         onPress={() => navigation.navigate('Signup')}
         >Sign Up</Text> 
    </TouchableOpacity>
  
   </View>
      
   </View>
    </SafeAreaView>
   
  )
}


export default LoginPage
