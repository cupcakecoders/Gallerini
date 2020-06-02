import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function CameraScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Camera Screen</Text>
      </View>
    );
}

function GalleryScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Gallery Screen</Text>
      </View>
    );
}

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Gallery" component={GalleryScreen} />
            <Tab.Screen name="Camera" component={CameraScreen} />
        </Tab.Navigator>
    )
}

        /* <Image
          style={{ width: 200, height: 200, borderRadius: 50 }}
          source={{ uri: userData.picture.data.url }}
          onLoadEnd={() => setImageLoadStatus(true)} />
        <ActivityIndicator size="large" color="#0000ff" animating={!isImageLoading} style={{ position: "absolute" }} />
        <Text style={{ fontSize: 22, marginVertical: 10 }}>Hi {userData.name}!</Text>
        
        <TouchableOpacity style={styles.logoutBtn} onPress={logout}>
          <Text style={{ color: "#fff" }}>Logout</Text>
        </TouchableOpacity> */