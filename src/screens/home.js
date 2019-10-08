import React from 'react';
import styles from "../components/styles.js";

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




class Home extends React.Component {
  render() {
    return (
    <View style={styles.body}>
      <Text style={styles.title}>CityPop</Text>
      <View style={styles.separator} />
      <TouchableOpacity       
          onPress={() => this.props.navigation.navigate('citySearch')} style = {[styles.button, marginTop = 20]}>
          <Text style ={styles.buttonText}>SEARCH BY CITY</Text>
      </TouchableOpacity>  

      <TouchableOpacity       
          style = {styles.button}>
          <Text style ={styles.buttonText}>SEARCH BY COUNTRY</Text>
      </TouchableOpacity>   

    </View>
    
  );
}
}
export default Home;
