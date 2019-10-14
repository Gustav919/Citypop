import React from 'react';
import styles from "../components/styles.js";
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';

class cityResult extends React.Component {

  // Safety mechanism to prevent the program to set state on an unmounted component, which may cause memory leaks
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cityFound: false
     };
  }
  // Function that sends API-requests to geonames to obtain the searched city,
  componentDidMount(){

    // Mounts component
    this._isMounted = true;

    // Fetches city information
    fetch("http://api.geonames.org/searchJSON?username=weknowit&featureClass=P&orderby=population&maxrows=1&name_equals="+this.props.navigation.state.params.city)
    .then(response => response.json())
    .then((responseJson)=> {
      
        // Sets information, and loading to false, if component is mounted & a city was found. This makes the screen switch from loading screen to display eventual results      
        if (this._isMounted && responseJson.totalResultsCount > 0) {
        this.setState({
          name: responseJson.geonames[0].name,
          population: responseJson.geonames[0].population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "),
          cityFound: true,
          loading: false
        })
      } else {
      
        // If no cities was found, loading is set to false, which makes the screen switch from loading screen
        this.setState({
          loading: false
        })
      }

    // Logs eventual errors  
    }).catch(error=>console.log(error))
  }

  // Unmounts component
  componentWillUnmount() {
    this._isMounted = false;
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
        <View style = {styles.separator}></View>
        <View style={styles.infoBox}>
          <Text style={styles.infoHeader}>Population</Text>
          <Text style={styles.infoText}>{this.state.population}   </Text>
        </View>
      </View>
    );
  }
}

export default cityResult;
