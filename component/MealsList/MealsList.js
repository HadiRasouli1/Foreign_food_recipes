import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const MealsList = ({items}) => {
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
            data={items}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={renderMealItem}
          />
        </View>
      );
}

export default MealsList;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
