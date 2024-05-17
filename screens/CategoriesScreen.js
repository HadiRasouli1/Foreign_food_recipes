import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import CategoryGridTil from "../component/CategoryGridTil";
import { useNavigation } from "@react-navigation/native";

const CategoriesScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTil
        title={itemData.item.title}
        color={itemData.item.color}
        onPressFunc={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
