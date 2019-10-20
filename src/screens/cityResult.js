import React from 'react';
import styles from "../components/styles.js";
import {
  View,
  Text,
  ActivityIndicator
} from 'react-native';

import { getDataForCity } from "../backend/api";

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
  async componentDidMount() {

    // Mounts component
    this._isMounted = true;

    // Fetches city information
    const { city } = this.props.navigation.state.params;
    const data = await getDataForCity(city);

    this.setState({
      name: data.city && data.city.name,
      population: data.city && data.city.population,
      cityFound: !data.error,
      loading: false
    });
  }

  // Unmounts component
  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    // Until all necessary information is obtained, a loading screen is displayed
    if (this.state.loading) {
      return (
        <View style={styles.body}>
          <Text style={styles.header}>Searching...</Text>
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#0c9" />
          </View>
        </View>
      );
    }

    // If no city was found, a 'no results page' is displayed
    if (!this.state.cityFound) {
      return (
        <View style={styles.body}>
          {styles.backButton(this.props.navigation)}
          <Text style={styles.header}>"{this.props.navigation.state.params.city}" was not found</Text>
        </View>
      )
    }

    // Else, if all necessary information is obtained & a city was found, the population is displayed
    return (
      <View style={styles.body}>
        {styles.backButton(this.props.navigation)}
        <Text style={styles.header}>{this.state.name}</Text>
        <View style={styles.separator}></View>
        <View style={styles.infoBox}>
          <Text style={styles.infoHeader}>Population</Text>
          <Text style={styles.infoText}>{this.state.population}   </Text>
        </View>
      </View>
    );
  }
}

export default cityResult;
