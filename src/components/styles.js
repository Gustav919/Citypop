import React from 'react';
import { IconButton } from 'react-native-paper';

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
import leftPad from 'left-pad';





export default StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: "#3366cc",
    alignItems: "center"
  },

  backButtonWrapper: {
    marginTop: Math.round(Dimensions.get('window').height)*0.045,
    marginRight: Math.round(Dimensions.get('window').height)*0.33,
    flexDirection: 'row',
    backgroundColor: "#00b3b3",
    shadowColor: '#101010',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderColor: "ivory",
    borderWidth: 2,
    borderRadius: 50,
  },

  searchButtonWrapper: {
    marginTop: 50,
    padding: 10,
    borderColor: "ivory",
    borderWidth: 2,
    borderRadius: 50,
    shadowColor: '#101010',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: "#00b3b3",
    
  },

  backButtonText: {
    fontSize: 20,
    color: "ivory",
    marginTop: Math.round(Dimensions.get('window').height)*0.015,
    marginRight: 5,
  },

    title: {
    fontSize: 90,
    fontWeight: '600',
    color: "#00b3b3",
    textAlign: "center",
    textShadowColor: "ivory",
    textShadowOffset:{width: -1, height: 1},
    textShadowRadius:1,
    marginTop: Math.round(Dimensions.get('window').height)*0.15,
  },

  textField: {
    height: 50,
    width: 330,
    marginTop: 70,
    borderColor: 'black',
    borderWidth: 0.5,
    fontSize: 30,
    textAlign: "center",
    backgroundColor: "#00b3b3",
    color: "white",
  },

  loader: {
    marginVertical: 100,
   },

   infoBox: {
    borderColor: "black",
    borderWidth: 2,
    marginTop: 100,
    height: 120,
    width: Math.round(Dimensions.get('window').width)*0.9,
    backgroundColor: "#00b3b3",
   },

   infoHeader: {
    fontSize: 30,
    fontWeight: "300",
    color: "ivory",
    textAlign: "center",
   },

   infoText: {
    fontSize: 50,
    fontWeight: "400",
    color: "ivory",
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 4,
   },

  buttonWrapper: {
    marginTop: 50,
    padding: 10,
    borderColor: "ivory",
    borderWidth: 2,
    borderRadius: 50,
    shadowColor: '#101010',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: "#00b3b3",
    
  },


  header: {
    fontSize: 40,
    fontWeight: '400',
    color: "ivory",
    textAlign: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: Math.round(Dimensions.get('window').height)*0.1,
    textShadowColor: "black",
    textShadowOffset:{width: -1, height: 1},
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
  },

  buttonText: {
    color: "ivory",
    fontSize: 30,
    fontWeight: '600',
    textShadowColor: "black",
    textShadowOffset:{width: -1, height: 1},
    textShadowRadius:1,
  },

  backButton: function(navigation) {

    return  (
      <TouchableOpacity 
      onPress={() => navigation.goBack()}
      style={this.backButtonWrapper}>
    <View>
      <IconButton
        icon="arrow-back"
        color= "ivory"
        size= {30}/>
        </View>
        <Text style={this.backButtonText}>CityPop</Text>
  </TouchableOpacity>
    )}


});