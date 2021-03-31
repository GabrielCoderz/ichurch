import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { api } from '../../services/api';

import image from '../../../assets/imageMusicas.jpg';
import Sugestoes from '../../components/Sugestoes';

export default function Musicas() {
  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      
      <ImageBackground source={image} style={styles.image}>

        {api.map(e => (
          <Sugestoes id={e.id} />
        ))}

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
