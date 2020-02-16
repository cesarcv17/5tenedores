import { createStackNavigator } from "react-navigation-stack";
import RestaurantScreen from "../screens/Restaurants/Restaurants";
import AddRestaurantScreen from "../screens/Restaurants/AddRestaurant";

export const RestaurantScreenStacks = createStackNavigator({
  restaurants: {
    screen: RestaurantScreen,
    navigationOptions: () => ({
      title: "Restaurantes"
    })
  },
  AddRestaurant: {
    screen: AddRestaurantScreen,
    navigationOptions: () => ({
      title: "Nuevo Restaurante"
    })
  }
});

export default RestaurantScreenStacks;
