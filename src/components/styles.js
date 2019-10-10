import React from 'react';
import { IconButton } from 'react-native-paper';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Dimensions
} from 'react-native';



// Contains different styles used when rendering objects
const styles = StyleSheet.create({
  // Background
  body: {
    flex: 1,
    backgroundColor: "#3366cc",
    alignItems: "center"
  },

  // App title
  title: {
    fontSize: Math.round(Dimensions.get('window').width)*0.24,
    fontWeight: '600',
    color: "#00b3b3",
    textAlign: "center",
    textShadowColor: "ivory",
    textShadowOffset:{width: -1.5, height: 1.5},
    textShadowRadius:1,
    marginTop: Math.round(Dimensions.get('window').height)*0.1,
  },


  // Headers on different pages
  header: {
    fontSize: Math.round(Dimensions.get('window').width)*0.12,
    fontWeight: '400',
    color: "ivory",
    textAlign: "center",
    marginTop: Math.round(Dimensions.get('window').height)*0.05,
    textShadowColor: "black",
    textShadowOffset:{width: -1, height: 1},
    textShadowRadius:0.5,
  },

  // Standard buttons
  button: {
    backgroundColor: "#00b3b3",
    marginTop: Math.round(Dimensions.get('window').width)*0.05,
    width: Math.round(Dimensions.get('window').width)*0.9,
    height: Math.round(Dimensions.get('window').width)*0.18,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#101010',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderColor: "ivory",
    borderWidth: 2,
  },

  // Wrapper around standard buttons
  buttonWrapper: {
    marginTop: Math.round(Dimensions.get('window').width)*0.12,
    padding: Math.round(Dimensions.get('window').width)*0.03,
    borderColor: "ivory",
    borderWidth: 2,
    borderRadius: 50,
    shadowColor: '#101010',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    backgroundColor: "#00b3b3",
  },
    

  // Text on standard buttons
  buttonText: {
    color: "ivory",
    fontSize: Math.round(Dimensions.get('window').width)*0.08,
    fontWeight: '600',
    textShadowColor: "black",
    textShadowOffset:{width: -1, height: 1},
    textShadowRadius:1,
  },

 
  // Back button displayed in top left corner
  backButtonWrapper: {
    marginTop: Math.round(Dimensions.get('window').height)*0.045,
    marginRight: Math.round(Dimensions.get('window').height)*0.33,
    flexDirection: 'row',
    backgroundColor: "#00b3b3",
    shadowColor: '#101010',
    shadowOffset: { width: -5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderColor: "ivory",
    borderWidth: 2,
    borderRadius: 50,
  },

  // Text on back button
  backButtonText: {
    fontSize: Math.round(Dimensions.get('window').width)*0.05,
    color: "ivory",
    marginTop: Math.round(Dimensions.get('window').height)*0.02,
    marginRight: 5,
  },
  
  // Field to write text in
  textField: {
    height: Math.round(Dimensions.get('window').width)*0.15,
    width: Math.round(Dimensions.get('window').width)*0.88,
    marginTop: Math.round(Dimensions.get('window').width)*0.18,
    borderColor: 'black',
    borderWidth: 0.5,
    fontSize: Math.round(Dimensions.get('window').width)*0.09,
    textAlign: "center",
    backgroundColor: "#00b3b3",
    color: "white",
  },

  // Box where information is displayed
  infoBox: {
    borderColor: "black",
    borderWidth: 2,
    marginTop: Math.round(Dimensions.get('window').width)*0.25,
    height: Math.round(Dimensions.get('window').width)*0.3,
    width: Math.round(Dimensions.get('window').width)*0.9,
    backgroundColor: "#00b3b3",
  },

  // Header to the information
  infoHeader: {
    fontSize: Math.round(Dimensions.get('window').width)*0.08,
    fontWeight: "300",
    color: "ivory",
    textAlign: "center",
  },

  // Information text
  infoText: {
    fontSize: Math.round(Dimensions.get('window').width)*0.14,
    fontWeight: "400",
    color: "ivory",
    textAlign: "center",
    textAlignVertical: "center",
    marginTop: 4,
  },

  // Loading symbol
  loader: {
    marginVertical: Math.round(Dimensions.get('window').width)*0.28,
  },
      
  // Seperator to add space between elements 
  separator: {
    marginVertical: Math.round(Dimensions.get('window').width)*0.11,
  },
  
  // Funtion that renders the entire back Button
  backButton: function(navigation) {
    return  (
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={this.backButtonWrapper}>
        <View>
          <IconButton
          icon="arrow-back"
          color= "ivory"
          size= {Math.round(Dimensions.get('window').width)*0.1}
          />
        </View>
        <Text style={this.backButtonText}>CityPop</Text>
      </TouchableOpacity>
    )
  }
});
export default styles;