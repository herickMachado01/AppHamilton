import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import foto5 from "./assets/foto5.png";
import Foto4 from "./assets/foto4.png";

export default function Corpo() {

  return (
    <View style={estilo.container}>
      <ImageBackground source={Foto4} style={estilo.fundo}>
        <View style={estilo.textoContainer}>
          <Text style={estilo.texto}>TÍTULOS</Text>
        </View>
        <View style={estilo.texto2Container} >
          <Text style={estilo.texto1}>2008</Text>
        </View>
        <View style={estilo.texto3Container} >
          <Text style={estilo.texto1}>2014</Text>
        </View>
        <View style={estilo.texto3Container} >
          <Text style={estilo.texto1}>2014</Text>
        </View>
        <View style={estilo.texto4Container} >
          <Text style={estilo.texto1}>2015</Text>
        </View>
        <View style={estilo.texto5Container} >
          <Text style={estilo.texto1}>2017</Text>
        </View>
        <View style={estilo.texto6Container} >
          <Text style={estilo.texto1}>2018</Text>
        </View>
        <View style={estilo.texto7Container} >
          <Text style={estilo.texto1}>2019</Text>
        </View>
        <View style={estilo.texto8Container} >
          <Text style={estilo.texto1}>2020</Text>
        </View>
        <View style={estilo.foto5Container}>
          <ImageBackground source={foto5} style={estilo.foto5}></ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  fundo: {
    marginTop:-10,
    width: 390,
    height: 800,
    borderTopColor: '#000',
    position: 'relative',
  },
  textoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    marginTop:95,
    margin: 10,
    padding: 5,
    fontFamily:"Saved by Zero Rg"
  },
  texto: {
    fontSize: 40, 
    color: '#000', 
    fontFamily:"Saved by Zero Rg"
  },

  texto2Container: {
    position: 'absolute',
    top: 0,
    right: 0, 
    textAlign: "right",
    marginRight:10,
    marginTop: 60,
    margin: 10,
    paddingLeft:70,
    paddingRight:70,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"#fff",
    borderRadius:50,
    fontFamily:"Saved by Zero Rg"
  
  },
  texto1: {
    fontSize: 23, 
    color: '#000',
    textAlign: "left", 
    fontFamily:"Saved by Zero Rg"
  },

  texto3Container: {
    position: 'absolute',
    top: 0,
    right: 0, 
    textAlign: "right",
    marginRight:10,
    marginTop: 120,
    margin: 10,
    paddingLeft:70,
    paddingRight:70,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"#fff",
    borderRadius:50,
    fontFamily:"Saved by Zero Rg"
  
  },

  texto4Container: {
    position: 'absolute',
    top: 0,
    right: 0, 
    textAlign: "right",
    marginRight:10,
    marginTop: 180,
    margin: 10,
    paddingLeft:70,
    paddingRight:70,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"#fff",
    borderRadius:50,
    fontFamily:"Saved by Zero Rg"
  
  },

  texto5Container: {
    position: 'absolute',
    top: 0,
    right: 0, 
    textAlign: "right",
    marginRight:10,
    marginTop: 290,
    margin: 10,
    paddingLeft:70,
    paddingRight:70,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"#0DCCC0",
    borderRadius:50,
    fontFamily:"Saved by Zero Rg"
  },

  texto6Container: {
    position: 'absolute',
    top: 0,
    right: 0, 
    textAlign: "right",
    marginRight:10,
    marginTop: 350,
    margin: 10,
    paddingLeft:70,
    paddingRight:70,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"#0DCCC0",
    borderRadius:50,
    fontFamily:"Saved by Zero Rg"
  },

  texto7Container: {
    position: 'absolute',
    top: 0,
    right: 0, 
    textAlign: "right",
    marginRight:10,
    marginTop: 410,
    margin: 10,
    paddingLeft:70,
    paddingRight:70,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"#0DCCC0",
    borderRadius:50,
    fontFamily:"Saved by Zero Rg"
  },

  texto8Container: {
    position: 'absolute',
    top: 0,
    right: 0, 
    textAlign: "right",
    marginRight:10,
    marginTop: 470,
    margin: 10,
    paddingLeft:70,
    paddingRight:70,
    paddingTop:5,
    paddingBottom:5,
    backgroundColor:"#0DCCC0",
    borderRadius:50,
    fontFamily:"Saved by Zero Rg"
  
  },
 
  foto5Container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%', 
     
  },
  foto5: {
    width: '100%',
    height: '100%',
   
  },
 
});