import React from 'react';
import styles from "../components/styles.js";
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';

class cityResult extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cityFound: false
     };
  }
  // Function that sends API-requests to geonames to obtain the searched city,
  componentDidMount(){

    // Fetches city information
    fetch("http://api.geonames.org/searchJSON?username=weknowit&featureClass=P&orderby=population&maxrows=1&name_equals="+this.props.navigation.state.params.city)
    .then(response => response.json())
    .then((responseJson)=> {
      
      // Sets information if a city was found
      if (responseJson.totalResultsCount > 0) {
        this.setState({
          name: responseJson.geonames[0].name,
          population: responseJson.geonames[0].population,
          cityFound: true
        })
      }      

      // Sets loading to false, which makes the screen switch from loading screen to display eventual results
      this.setState({
        loading: false
      })

    // Logs eventual errors  
    }).catch(error=>console.log(error))
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
     );}
    
    // If no city was found, a 'no results page' is displayed
    if (!this.state.cityFound) {
      return( 
        <View style={styles.body}> 
          {styles.backButton(this.props.navigation)}
          <Text style={styles.header}>"{this.props.navigation.state.params.city}" was not found</Text>
        </View>
      )}

    // Else, if all necessary information is obtained & a city was found, the population is displayed
    return (
      <View style={styles.body}> 
        {styles.backButton(this.props.navigation)}
        <Text style={styles.header}>{this.state.name}</Text>
        <View style={styles.infoBox}>
          <Text style={styles.infoHeader}>Population</Text>
          <Text style={styles.infoText}>{((this.state.population).toLocaleString()).replace(new RegExp(',', 'g'), ' ')}   </Text>
        </View>
      </View>
    );
  }
}

export default cityResult;
