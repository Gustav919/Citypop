import React from 'react';
import styles from "../components/styles.js";
import { IconButton, Colors } from 'react-native-paper';


import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput
} from 'react-native';




class citySearch extends React.Component {
  render() {
    return (
    <View style={styles.body}>  
      <Text style={styles.header}>SEARCH BY {"\n"}CITY</Text>
      <TextInput 
      style={styles.textField}
      placeholder = "Enter a city"
      placeholderTextColor = "white"
      />
      <View style={styles.buttonWrapper}>
        <IconButton
        style={styles.searchButton}
        icon="search"
        color= "ivory"
        size= {40}
  />
  </View>

    </View>
  );
}
}
export default citySearch;
