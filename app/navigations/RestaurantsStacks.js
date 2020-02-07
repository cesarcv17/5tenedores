import { createStackNavigator } from "react-navigation-stack";
import RestaurantScreen from "../screens/Restaurants";

export const RestaurantScreenStacks = createStackNavigator({
  restaurants: {
    screen: RestaurantScreen,
    navigationOptions: () => ({
      title: "Restaurantes"
    })
  }
});

export default RestaurantScreenStacks;
