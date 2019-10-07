import React from 'react';
import {Dimensions } from "react-native";

import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.title}>CityPop</Text>
      <Separator />

      <TouchableOpacity       
          style = {[styles.button, marginTop = 20]}>
          <Text style ={styles.buttonText}>SEARCH BY CITY</Text>
      </TouchableOpacity>  

      <TouchableOpacity       
          style = {styles.button}>
          <Text style ={styles.buttonText}>SEARCH BY COUNTRY</Text>
      </TouchableOpacity>   

    </View>
    
  );
};

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
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

  separator: {
    marginVertical: 20,
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

/*marginRight:40,
    marginLeft:40,
    marginTop:40,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'*/

export default App;
