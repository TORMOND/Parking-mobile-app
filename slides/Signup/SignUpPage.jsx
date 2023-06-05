import React, { useState } from 'react'
import { 
  TextInput, 
  View, 
  TouchableOpacity, 
  ActivityIndicator, 
  SafeAreaView, 
  Text 
} from 'react-native'
// import {useRouter}
import styles from './signupPage.styles'

function SignUpPage({navigation}) {
    const [loading, isLoading] = useState(false)

  const signUp = ()=>{
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView   style={{flex: 1}}>
      <View  style={styles.container}>
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
        { !loading && <Text>SIGN UP</Text> }
        { loading &&  <ActivityIndicator size="small"  /> }     
    </TouchableOpacity>
        
  
   </View>
    </SafeAreaView>
   
  )

}


export default SignUpPage
