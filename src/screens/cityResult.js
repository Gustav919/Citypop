import React from 'react';
import styles from "../components/styles.js";
import { IconButton, Colors } from 'react-native-paper';
import geonamesinfo from "../components/geonames.js";


import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  ActivityIndicator
} from 'react-native';

/*
function getCityPopulation() {

  console.log("CALLED")

  //return fetch(geonamesinfo.url + this.props.navigation.state.params.city+"&username="+geonamesinfo.username)
  return fetch("http://api.geonames.org/search?q=london&maxRows=1&orderby=population&username=weknowit")
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson)
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
};*/






class cityResult extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      population: -1
     };
    }
    componentDidMount(){
      fetch("http://api.geonames.org/searchJSON?username=weknowit&featureClass=P&orderby=population&maxrows=1&name_equals="+this.props.navigation.state.params.city)
      .then(response => response.json())
      .then((responseJson)=> {

        if (responseJson.totalResultsCount > 0) {
        this.setState({
         name: responseJson.geonames[0].name,
         population: responseJson.geonames[0].population
        })
      }      
    

      this.setState({
        loading: false
      })  
      })
      .catch(error=>console.log(error))
      }
  render() {

      
      if(this.state.loading){
       return( 
        <View style={styles.body}> 
        <Text style={styles.header}>Searching...</Text>
        <View style={styles.loader}>
        <ActivityIndicator size="large" color="#0c9"/>
        </View>
      </View>
     );}

     if(this.state.population == -1){
      console.log("UNDEFINED!")

      return( 
       <View style={styles.body}> 
       <Text style={styles.header}>"{this.props.navigation.state.params.city}" was not found</Text>
     </View>
    );}
    return (
      
      <View style={styles.body}> 
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
