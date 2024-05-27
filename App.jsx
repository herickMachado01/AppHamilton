import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Foto from './assets/Foto.png';
import Foto3 from "./assets/foto3.png";
import Foto4 from "./assets/foto4.png";
import Topo from './Topo';
import Corpo from './Corpo';
import Corpo2 from "./corpo2"

export default function App() {

  return (
    <View style={estilo.container}>
      <ScrollView style={estilo.scrollView}>
        <Topo/>
        <Corpo/>
        <Corpo2/>
      </ScrollView>
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
 

});
