import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import image from '../../../assets/imageHome.jpg';

export default function Home() {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>

      <ImageBackground source={image} style={styles.image}>

        <Text style={styles.text}>Início</Text>
        
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    opacity: 0.9,
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    
  }

});
