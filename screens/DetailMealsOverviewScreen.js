import { useRoute } from "@react-navigation/native";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../component/MealDetails";
import Subtitle from "../component/MealDetail/Subtitle";
import List from "../component/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../component/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";
const DetailMealsOverviewScreen = ({ navigation }) => {
  // const favoritesMealsCtx = useContext(FavoritesContext);

  const favoriteMealId = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const route = useRoute();
  const MealIds = route.params.MealId;

  const selectedMeal = MEALS.find((t) => t.id == MealIds);

  const MealDetail = {
    duration: selectedMeal.duration,
    complexity: selectedMeal.complexity,
    affordability: selectedMeal.affordability,
  };
  // const mealIsFavorite = favoritesMealsCtx.ids.includes(MealIds);

  const mealIsFavorite = favoriteMealId.includes(MealIds);
  const changeFavoriteStatusHandler = () => {
    if (mealIsFavorite) {
      // favoritesMealsCtx.removeFavorite(MealIds);
      dispatch(removeFavorite({ id: MealIds }));
    } else {
      // favoritesMealsCtx.addFavorite(MealIds);
      dispatch(addFavorite({ id: MealIds }));
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPressFunc={changeFavoriteStatusHandler}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails {...MealDetail} textStyle={styles.detailText} />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailMealsOverviewScreen;
const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
