import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



export default StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#3366cc",
    alignItems: "center"
  },

    title: {
    fontSize: 90,
    fontWeight: '600',
    color: "#00b3b3",
    textAlign: "center",
    textShadowColor: "white",
    textShadowOffset:{width: -1, height: 1},
    textShadowRadius:1,
    marginTop: Math.round(Dimensions.get('window').height)*0.15,
  },

  textField: {
    height: 50,
    width: 330,
    marginTop: 70,
    borderColor: 'ivory',
    borderWidth: 0.5,
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "#00b3b3",
    color: "white"
  },

  buttonWrapper: {
    marginTop: 50,
    padding: 10,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 50,
    shadowColor: 'black',
    shadowOffset: { width: -3, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: "#00b3b3",
  },


  header: {
    fontSize: 60,
    fontWeight: '400',
    color: "#00b3b3",
    textAlign: "center",
    marginTop: Math.round(Dimensions.get('window').height)*0.25,
    textShadowColor: "ivory",
    textShadowOffset:{width: -1, height: 0.5},
    textShadowRadius:0.5,
  },

  separator: {
    marginVertical: 40,
  },
  
  button: {
    backgroundColor: "#00b3b3",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 20,
    width: Math.round(Dimensions.get('window').width)*0.9,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#101010',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },

  buttonText: {
    color: "ivory",
    fontSize: 30,
    fontWeight: '600',
    textShadowColor: "black",
    textShadowOffset:{width: -1, height: 1},
    textShadowRadius:1,
  }
});