import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../component/MealItem";
const MealsOverviewScreen = ({ route }) => {
  // کامپوننت های که داخل دات نویگاتور هستند در قسمت پراپس نویگیشن و روت را داخل ابجکت دریافت میکنند که میتوانیم از آنها استفاده کنیم
  //   const route = useRoute();
  // این هوک یوز روت نیز همان روت را به ما میدهد منتها در کامپوننت های تو در تویی که روت به انها به عنوان پراپس ارسال نشده نیز میتوانیم از یوز روت استفاده کنیم پس یوز روت بهتر است

  const catId = route.params.categoryId;
  // روت یک چیزی به اسم پارامس به ما میدهد که میتوانیم داده هایی که از آنطرف به این کامپوننت فرستادیم را با آن دریافت کنیم

  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  const renderMealItem = (itemData) => {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
    //  میتوانیم به این صورت ابجکتی که بالا ساختیم را تک به تک المان هایش را به عنوان پراپس به این کامپوننت ارسال کنیم
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
