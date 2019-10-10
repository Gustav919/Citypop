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
  TextInput,
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
  componentDidMount(){
    fetch("http://api.geonames.org/searchJSON?username=weknowit&featureClass=A&orderby=popuation=maxrows=1&name_equals="+this.props.navigation.state.params.country)
    .then(response => response.json())
    .then((responseJson)=> {
      if (responseJson.totalResultsCount > 0 && responseJson.geonames[0].name === responseJson.geonames[0].countryName) {
        this.setState({
          country: responseJson.geonames[0].name,
          countryCode: responseJson.geonames[0].countryCode,
          cityFound: true,
          cities: Array(3)
        })  
        
        fetch("http://api.geonames.org/searchJSON?username=weknowit&featureClass=P&orderby=popuation=maxrows=3&country="+this.state.countryCode)
          .then(response => response.json())
          .then((responseJson)=> {
            this.setState({
              cities: [JSON.stringify(responseJson.geonames[0].name).replace(new RegExp('"', 'g'), ''), JSON.stringify(responseJson.geonames[1].name).replace(new RegExp('"', 'g'), ''), JSON.stringify(responseJson.geonames[2].name).replace(new RegExp('"', 'g'), '')]
              
            })  
          }).catch(error=>console.log(error))
      }      
    }).catch(error=>console.log(error))

    this.setState({
      loading: false
    })  
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

    if(!this.state.cityFound){
      return( 
        <View style={styles.body}> 
          {styles.backButton(this.props.navigation)}
          <Text style={styles.header}>"{this.props.navigation.state.params.country}" was not found</Text>
        </View>
      )}

    return (
    <View style={styles.body}> 
      {styles.backButton(this.props.navigation)}
      <Text style={styles.header}>{this.state.country}</Text>
      <View style ={styles.separator}></View>
      {this.displayCities()}
    </View>
    );
  }

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
