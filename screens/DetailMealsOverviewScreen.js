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
import { useLayoutEffect } from "react";
import IconButton from "../component/IconButton";

const DetailMealsOverviewScreen = ({ navigation }) => {
  const route = useRoute();
  const MealIds = route.params.MealId;

  const selectedMeal = MEALS.find((t) => t.id == MealIds);

  const MealDetail = {
    duration: selectedMeal.duration,
    complexity: selectedMeal.complexity,
    affordability: selectedMeal.affordability,
  };

  const headerButtonPressHandler = () => {
    console.log("pressed!");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPressFunc={headerButtonPressHandler}
            icon="star"
            color="white"
          />
        );
      },
    });
    // هدر رایتی که داخل اپشن های این نویگیتور است به ما این امکان را میدهد که در طرف راست هدر هر چیزی که دلمان میخواهد را اد کنیم و در واقع چیزی که این اپشن در ریترن میدهد یک کامپوننت است که در قسمت راست هدر قرار داده میشود همینطور میتوان به قسمت چپ نیز اضافه کرد البته میتوانستیم در انجا هم استفاده کنیم ولی خواستیم از ست اپشن استفاده کنیم
  }, [navigation, headerButtonPressHandler]);

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
