import { FlatList, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import Category from "../models/category";
import CategoryGridTil from "../component/CategoryGridTil";
import { useNavigation } from "@react-navigation/native";

const CategoriesScreen = ({ navigation }) => {
  // کامپوننت های که داخل دات نویگاتور هستند در قسمت پراپس نویگیشن و روت را داخل ابجکت دریافت میکنند که میتوانیم از آنها استفاده کنیم
  // const navigation = useNavigation();
  // این هوک یوز نویگیشن نیز همان نویگیشن را به ما میدهد منتها در کامپوننت های تو در تویی که نویگیشن به انها به عنوان پراپس ارسال نشده نیز میتوانیم از یوز نویگیشن استفاده کنیم پس یوز نویگیشن بهتر است

  const renderCategoryItem = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
      });
      // ما در اینجا با استفاده از نویگیشنی که داریم نویگیت میکنیم به یک کامپوننت با اسمی که به ان کامپوننت در قسمت نویگیشن دادیم در ضمن میتوانیم کنار نویگیت کردن پارامتر هایی هم به ان صفحه ارسال کنیم و ان طرف انهارا در یافت کنیم
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
