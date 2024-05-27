import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import Foto3 from "./assets/foto3.png";

export default function Corpo() {

  return (
    <ImageBackground
      source={Foto3} style={estilo.fundo}
    >
        <Text style={estilo.titulo}>Carreira</Text>
        <Text style={estilo.texto}>  
          Lewis Hamilton, nascido em 7 de janeiro de 1985, é um piloto britânico de Fórmula 1. Reconhecido como um dos maiores da história, Hamilton estreou na F1 em 2007 pela McLaren. Ao longo de sua carreira, conquistou 7 títulos mundiais, igualando o recorde de Michael Schumacher. Além de seu sucesso nas pistas, Hamilton é conhecido por seu ativismo e influência cultural.
        </Text>
    </ImageBackground>
  );
}

const estilo = StyleSheet.create({
  content: {
    alignItems: 'center',
  },
  titulo:{
    marginTop:20,
    fontSize: 50,
    color: '#fff',
    marginLeft:50,
    fontFamily:"Saved by Zero Rg"
    
  },
  fundo: {
    marginVertical: 10,
    width: 390,
    height: 800,
    borderTopColor: '#000',
  },
  texto:{
    marginTop:15,
    fontSize: 15,
    textAlign: 'center',
    paddingLeft:50,
    paddingRight: 50,
    textAlign:"justify", 
    color: '#fff'

  }

});
