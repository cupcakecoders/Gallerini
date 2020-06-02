import React from 'react';
import { Text, View, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Gallerini</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('Sign In')}
      />
    </View>
  );
}