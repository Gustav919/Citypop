import React from 'react';
import styles from "../components/styles.js";
import { IconButton, Colors } from 'react-native-paper';
import {
  View,
  Text,
  TextInput
} from 'react-native';

class citySearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      disableSearch: true
    };
  }

  // Renders a text field to write city in, and a search button
  // The search button is only pressable if something has been typed
  render() {
    return (
      <View style={styles.body}>
        {styles.backButton(this.props.navigation)}
        <Text style={styles.header}>SEARCH BY {"\n"}CITY</Text>
        <View style = {styles.separator}></View>
        <TextInput 
        style={styles.textField}
        placeholder = "Enter a city"
        placeholderTextColor = "#D3D3D3"
        autoCorrect = {false}
        onChangeText={(city) => {this.setState({city});this.state.disableSearch = (city.length == 0); }}
        />
        <View style={styles.buttonWrapper}>
          <IconButton
          icon="search"
          color= "ivory"
          size= {35}
          disabled= {this.state.disableSearch}
          onPress={() => this.props.navigation.navigate('cityResult',{city: this.state.city})}
          />
        </View>
      </View>
    );
  }
}
export default citySearch;