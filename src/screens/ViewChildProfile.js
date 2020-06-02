import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class ViewChildProfile extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Child profile screen</Text>
      </View>
    );
  }
}

export default ViewChildProfile;