import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import MealsList from "../component/MealsList/MealsList";
const MealsOverviewScreen = ({ route, navigation }) => {
  //   const route = useRoute();

  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayMeals} />;
};

export default MealsOverviewScreen;
