import React, { useState } from 'react';
import * as Facebook from 'expo-facebook';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e9ebee',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginBtn: {
      backgroundColor: '#4267b2',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20
    },
    logoutBtn: {
      backgroundColor: 'grey',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      position: "absolute",
      bottom: 0
    },
});

export default function SignInScreen({navigation}) {
    const [isLoggedin, setLoggedinStatus] = useState(false);
    const [userData, setUserData] = useState(null);
    const [isImageLoading, setImageLoadStatus] = useState(false);
  
    console.disableYellowBox = true;
  
    const facebookLogIn = async () => {
      try {
        await Facebook.initializeAsync('560896468136015');
        const {
          type,
          token,
          expires,
          permissions,
          declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync('560896468136015', {
          permissions: ['public_profile'],
        });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
          fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
            .then(response => response.json())
            .then(data => {
              setLoggedinStatus(true);
              setUserData(data);
              navigation.navigate('Home')
            })
            .catch(e => console.log(e))
        } else {
          // type === 'cancel'
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
    }
  
    // const logout = () => {
    //   setLoggedinStatus(false);
    //   setUserData(null);
    //   setImageLoadStatus(false);
    // }
  
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.loginBtn} onPress={facebookLogIn}>
          <Text style={{ color: "#fff" }}>Login with Facebook</Text>
        </TouchableOpacity>
      </View>  
    );
  }