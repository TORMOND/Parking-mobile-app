import React, { useState } from 'react'
import { 
  TextInput, 
  View, 
  TouchableOpacity, 
  ActivityIndicator, 
  SafeAreaView, 
  Text,
  Image
} from 'react-native'

import styles from './signupPage.styles'
import parkedAudi from './parkedAudi.jpg'

function SignUpPage({navigation}) {
    const [loading, isLoading] = useState(false)

  const signUp = ()=>{
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView   style={{flex: 1}}>
      <View  style={styles.container}>
        <Image
        source={parkedAudi}
        resizeMode='cover'    
        />
    <View>
    <TextInput
     placeholder='First Name' 
     style={styles.TextInput}
     />
    <TextInput
     placeholder='SecondName'
     style={styles.TextInput}
      />
    </View>
    <View>
    <TextInput
     placeholder='email'
     style={styles.TextInput}
      />
    <TextInput
     placeholder='vehicle reg'
     style={styles.TextInput}
      />
    </View>
    <View>
    <TextInput
     placeholder='phone no.' 
     style={styles.TextInput}
     />
    </View>
 

    <TouchableOpacity
     onPress={signUp}
     style={styles.Button}
     >
        { !loading && <Text style={{color:'#fff'}}>SIGN UP</Text> }
        { loading &&  <ActivityIndicator size="small"  /> }     
    </TouchableOpacity>
    <View style={styles.LoginIn}>
    <Text>Don't have an account? </Text>
    <TouchableOpacity>
    <Text
         style={styles.loginText}
         onPress={() => navigation.navigate('Login')}
         >Login</Text> 
    </TouchableOpacity>
  
   </View>
        
  
   </View>
    </SafeAreaView>
   
  )

}


export default SignUpPage
