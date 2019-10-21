import React from 'react';
import styles from "../components/styles.js";
import {
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import { getTop3CityNamesForCountry } from "../backend/api";

class cityResult extends React.Component {

  // Safety mechanism to prevent the program to set state on an unmounted component, which may cause memory leaks
  _isMounted = false;

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
  async componentDidMount() {

    // Mounts component
    this._isMounted = true;

    const { country } = this.props.navigation.state.params;
    const data = await getTop3CityNamesForCountry(country);

    this.setState({
      cities: data.cities,
      countryCode: !data.error,
      loading: false,
      countryFound: !data.error
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
      )
    }

    // If no country was found, a 'no results page' is displayed
    if (!this.state.countryFound) {
      return (
        <View style={styles.body}>
          {styles.backButton(this.props.navigation)}
          <Text style={styles.header}>"{this.props.navigation.state.params.country}" was not found</Text>
        </View>
      )
    }

    // Else, if all necessary information is obtained & a country was found, the most populated cities are displayed
    return (
      <View style={styles.body}>
        {styles.backButton(this.props.navigation)}
        <Text style={styles.header}>{this.state.country}</Text>
        <View style={styles.separator}></View>
        {this.displayCities()}
      </View>
    );
  }

  // Function that renders all obtained cities as buttons.
  displayCities() {
    return this.state.cities.map((city) => {
      return (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('cityResult', { city: city })}
          style={styles.button}>
          <Text style={styles.buttonText}>{city}</Text>
        </TouchableOpacity>
      )
    })
  }
}

export default cityResult;