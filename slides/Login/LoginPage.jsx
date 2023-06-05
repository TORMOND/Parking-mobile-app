import React, { useState } from 'react';
import { 
  ActivityIndicator, 
  SafeAreaView, 
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button 
} from 'react-native';
import styles from './loginpage.syles.js'

function LoginPage({navigation}) {
    const login = ()=>{

    }
    const [loading, isLoading] = useState(false)
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()
  return (
    <SafeAreaView style={{flex: 1}}>
 <View
  style={styles.container}
  >
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
     onChangeText={(text)=>setPassword(text)}
     placeholder='password'
     style={styles.TextInput}
     />
    </View>
   
    <TouchableOpacity
     onPress={login}
     style={styles.Login}
     >
        { !loading && 
        <Text style={styles.loginText} >LOGIN</Text> }
        { loading &&  <ActivityIndicator size="small"  /> }     
    </TouchableOpacity>
    </View>
    <View style={{flex: 1}} >
       <TouchableOpacity
     onPress={() => navigation.navigate('Signup')}
     style={styles.Button}
     >
        <Text >Sign Up</Text> 
    </TouchableOpacity>
    </View>
   

   </View>
    </SafeAreaView>
   
  )
}


export default LoginPage
