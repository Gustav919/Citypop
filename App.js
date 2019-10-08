import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import home from "./src/screens/home.js";
import citySearch from "./src/screens/citySearch.js";

const MainNavigator = createStackNavigator({
  home: {screen: home},
  citySearch: {screen: citySearch}
},

{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  }
 }
);

const App = createAppContainer(MainNavigator);

export default App;