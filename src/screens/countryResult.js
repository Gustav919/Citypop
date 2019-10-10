import React from 'react';
import styles from "../components/styles.js";
import {
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

class cityResult extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      countryFound: false,
      cities: Array(3)
    };
  }

  // Function that sends API-requests to geonames to first obtain country code,
  // and then to obtain most populated cities. The page wont render until the function is finished.
  componentDidMount(){

    // Fetches country information
    fetch("http://api.geonames.org/searchJSON?username=weknowit&featureClass=A&orderby=popuation=maxrows=1&name_equals="+this.props.navigation.state.params.country)
    .then(response => response.json())
    .then((responseJson)=> {

      // Sets information if a country was found
      if (responseJson.totalResultsCount > 0 && responseJson.geonames[0].name === responseJson.geonames[0].countryName) {
        this.setState({
          country: responseJson.geonames[0].name,
          countryCode: responseJson.geonames[0].countryCode,
          countryFound: true,
        })  
        
        // Fetches cities in the country
        fetch("http://api.geonames.org/searchJSON?username=weknowit&featureClass=P&orderby=population&maxrows=3&country="+this.state.countryCode)
          .then(response => response.json())
          .then((responseJson)=> {

            // Sets the three most populated cities, without any citation signs
            this.setState({
              cities: [
                responseJson.geonames[0].name.replace(new RegExp('"', 'g'), ''),
                responseJson.geonames[1].name.replace(new RegExp('"', 'g'), ''),
                responseJson.geonames[2].name.replace(new RegExp('"', 'g'), '')
              ]            
            })
            
            // Logs eventual errors  
          }).catch(error=>console.log(error))
      }      
    }).catch(error=>console.log(error))

    // Sets loading to false, which makes the screen switch from loading screen to display eventual results
    this.setState({
      loading: false
    })  
  }

  render() {

    // Until all necessary information is obtained, a loading screen is displayed
    if (this.state.loading) {
      return( 
        <View style={styles.body}> 
          <Text style={styles.header}>Searching...</Text>
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0c9"/>
          </View>
        </View>
       )}
    
    // If no country was found, a 'no results page' is displayed
    if (!this.state.countryFound) {
      return( 
        <View style={styles.body}> 
          {styles.backButton(this.props.navigation)}
          <Text style={styles.header}>"{this.props.navigation.state.params.country}" was not found</Text>
        </View>
      )}
    
    // Else, if all necessary information is obtained & a country was found, the most populated cities are displayed
    return (
    <View style={styles.body}> 
      {styles.backButton(this.props.navigation)}
      <Text style={styles.header}>{this.state.country}</Text>
      <View style ={styles.separator}></View>
      {this.displayCities()}
    </View>
    );
  }

  // Function that renders all obtained cities as buttons.
  displayCities() {
    return this.state.cities.map((city) => {
      return (
        <TouchableOpacity       
        onPress={() => this.props.navigation.navigate('cityResult',{city: city})}
        style = {styles.button}>
          <Text style ={styles.buttonText}>{city}</Text>
      </TouchableOpacity>  
      )
    }) 
  }
}

export default cityResult;