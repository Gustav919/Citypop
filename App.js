import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import home from "./src/screens/home.js";
import citySearch from "./src/screens/citySearch.js";
import cityResult from "./src/screens/cityResult.js";
import countrySearch from "./src/screens/countrySearch";
import countryResult from "./src/screens/countryResult.js";




const MainNavigator = createStackNavigator({
  home: {screen: home},
  citySearch: {screen: citySearch},
  cityResult: {screen: cityResult},
  countrySearch: {screen: countrySearch},
  countryResult: {screen: countryResult},
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