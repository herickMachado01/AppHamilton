import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Foto from './assets/Foto.png';
import Foto3 from "./assets/foto3.png";
import Foto4 from "./assets/foto4.png";

export default function Topo() {

  return (
    <View style={estilo.container}>
        <View style={estilo.content}>
          <Image source={Foto} style={estilo.fundo} />
          <Text style={estilo.titulo}>LEWIS</Text>
          <Text style={estilo.titulo2}>HAMILTON</Text>          
        </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },
  fundo: {

    width: 480,
    height: 897,
    borderTopColor: '#000',
  },
  fundo3: {
    width: 480,
    height: 897,
    borderTopColor: '#000',
  },
  fundo4: {
    width: 480,
    height: 897,
    borderTopColor: '#000',
  },
  titulo: {
    fontSize: 55,
    textAlign: 'center',
    color: 'white',
    marginTop: 100,
    position: 'absolute',
    zIndex: 5,
    fontFamily:"Saved by Zero Rg"
  },

  titulo2: {
    fontSize: 55,
    textAlign: 'center',
    color: 'white',
    marginTop: 160,
    position: 'absolute',
    zIndex: 5,
    fontFamily:"Saved by Zero Rg"

  },
});
