import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import CategoryGridTil from "../component/CategoryGridTil";

const renderCategoryItem = (itemData) => {
  return (
    <CategoryGridTil title={itemData.item.title} color={itemData.item.color} />
  );
};

const CategoriesScreen = () => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategoryItem}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      numColumns={2}
      // این نام کالمز که میدیم تعداد ستون های این فلت لیست رو برای ما تنظیم میکند که این لیست در چند ستون نمایش داده شود
    />
  );
};

export default CategoriesScreen;
