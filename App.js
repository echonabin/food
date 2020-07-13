import { createStackNavigator, createAppContainer } from "react-navigation";
import SearchScreen from "./screens/SearchScreen";

const navigator = createStackNavigator(
  {
    SearchScreen: SearchScreen,
  },
  {
    initialRouteName: "SearchScreen",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);
export default createAppContainer(navigator);
