import React, { useState } from 'react'
import { 
  SafeAreaView,
  TextInput, 
  View, 
  Button, 
  Text 
} from 'react-native'

import styles from './Homepage.styles';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-regular-svg-icons';

function HomePage({ navigation }) {

    const [popup, setPopup] = useState(false)
  return (
    <SafeAreaView style={{height: '100%'}}>
        <View>
        {/* <FontAwesomeIcon icon={ faBars } /> */}
            <TextInput
             placeholder='name'
             
              />

            <Button
        title="LOGIN"
        onPress={() => navigation.navigate('Login')}
      />
        </View>
    </SafeAreaView>
  )
}

export default HomePage
