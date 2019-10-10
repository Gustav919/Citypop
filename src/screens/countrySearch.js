import React from 'react';
import styles from "../components/styles.js";
import { IconButton, Colors } from 'react-native-paper';
import {
  View,
  Text,
  TextInput
} from 'react-native';

class countrySearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      disableSearch: true
    };
  }
  
  // Renders a text field to write country in, and a search button
  // The search button is only pressable if something has been typed
  render() {
    return (
      <View style={styles.body}>
        {styles.backButton(this.props.navigation)}
        <Text style={styles.header}>SEARCH BY {"\n"}COUNTRY</Text>
        <TextInput 
        style={styles.textField}
        placeholder = "Enter a country"
        placeholderTextColor = "#D3D3D3"
        autoCorrect = {false}
        onChangeText={(country) => {this.setState({country});this.state.disableSearch = (country.length == 0); }}
        />
        <View style={styles.buttonWrapper}>
          <IconButton
          icon="search"
          color= "ivory"
          size= {40}
          disabled= {this.state.disableSearch}
          onPress={() => this.props.navigation.navigate('countryResult',{country: this.state.country})}
          />
        </View>
      </View>
    );
  }
}
export default countrySearch;
