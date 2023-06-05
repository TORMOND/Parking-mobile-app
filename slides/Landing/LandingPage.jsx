import React, { useState } from 'react'
import { SafeAreaView, TextInput, View, Button, Text } from 'react-native'

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBars } from '@fortawesome/free-solid-svg-icons';
// import { faUser } from '@fortawesome/free-regular-svg-icons';


const Landing = () => {
    return ( 
        <SafeAreaView style={styles.container}>
                    <View style={styles.logoContainer}>
                        <FontAwesomeIcon icon={faBars} size={30} color="white" />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.inputText}>
                            Enter your name
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your name"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button
                            title="Sign Up"
                            color="white"
                            onPress={() => console.log('Sign Up')}
                        />
                    </View>
                </SafeAreaView>
     );
}
 
export default Landing;