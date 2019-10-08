import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "./src/screens/home";
const Project= createStackNavigator({
  Home: {
   screen: Home
  }
});
export default createAppContainer(Project);