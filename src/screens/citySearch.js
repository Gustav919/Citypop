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
               
      {styles.backButton(this.props.navigation)}

      <Text style={styles.header}>SEARCH BY {"\n"}CITY</Text>
      <TextInput 
      style={styles.textField}
      placeholder = "Enter a city"
      placeholderTextColor = "#D3D3D3"
      autoCorrect = {false}
      onChangeText={(username) => this.setState({username})}
      />
      <View style={styles.searchButtonWrapper}>
        <IconButton
        icon="search"
        color= "ivory"
        size= {40}
        onPress={() => this.props.navigation.navigate('cityResult',{city: this.state.username})}
  />
  </View>

    </View>
  );
}
}
export default citySearch;
