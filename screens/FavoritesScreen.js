import { StyleSheet, Text, View } from "react-native";
import MealsList from "../component/MealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import { State } from "react-native-gesture-handler";

const FavoritesScreen = () => {
  // const favoriteMealCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    // favoriteMealCtx.ids.includes(meal.id)
    favoriteMealIds.includes(meal.id)
  );
  if (favoriteMeals.length > 0) {
    return <MealsList items={favoriteMeals} />;
  } else {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>you have no favorite meals yes</Text>
      </View>
    );
  }
};

export default FavoritesScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
