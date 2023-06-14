import React, { useState } from 'react'
import { 
  SafeAreaView, 
  TextInput, 
  View, 
  Button, 
  Text ,
  ImageBackground
} from 'react-native'

import styles from './Homepage.styles';
import lot from './lot.jpg';


// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-regular-svg-icons';

function HomePage({ navigation }) {

    const [popup, setPopup] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <View style={styles.main}>
          <ImageBackground source={lot} 
          style={{width:'100%', height: '100%'}}>
        <Text style={{flex: 1}}></Text>
          <View style={styles.ButtonWrapper}>
             <Button
        title="Get Started"
        onPress={() => navigation.navigate('Signup')}
        style={styles.Button}
      />
          </View>
          </ImageBackground>
          </View>
         
                   </View>
    </SafeAreaView>
  )
}

export default HomePage
