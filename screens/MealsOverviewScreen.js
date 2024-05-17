import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useNavigation, useRoute } from "@react-navigation/native";
import MealItem from "../component/MealItem";
import { useLayoutEffect } from "react";
const MealsOverviewScreen = ({ route, navigation }) => {
  //   const route = useRoute();

  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    // یوز لیات افکت همان کار یوز افکت را انجام میدهد منتها یوز افکت بعد از رندر شدن کامپوننت اجرا میشود این یوز لیات افکت سعی میکند قبل از رندر شدن کامپوننت یا حداقل همزمان با رندر شدن کامپونتت اجرا شود
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
    // نویگیشن دات ست اپشن به ما این امکان را میدهد که استایل دهی به هدر و پس زمینه نویگیشن را اینجا نیز بتوانیم انجام دهیم
  }, [catId, navigation]);

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
      id: item.id,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
