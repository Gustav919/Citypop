import React from 'react';
import styles from "../components/styles.js";
import {
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

// Renders the app title and two buttons: 'Search by city' and 'Search by country'
class Home extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Text style={styles.title}>CityPop</Text>
        <View style={styles.separator} />
        <TouchableOpacity       
          onPress={() => this.props.navigation.navigate('citySearch')}
          style = {styles.button}>
          <Text style ={styles.buttonText}>SEARCH BY CITY</Text>
        </TouchableOpacity>  

        <TouchableOpacity       
          onPress={() => this.props.navigation.navigate('countrySearch')}
          style = {styles.button}>
          <Text style ={styles.buttonText}>SEARCH BY COUNTRY</Text>
        </TouchableOpacity>   
      </View>
    );
  }
}
export default Home;
