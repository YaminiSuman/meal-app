import { View, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealItem from "./MealItem";

function MealsList({ items }) {
  const navigation = useNavigation();
  function renderMealItem(itemData) {
    const item = itemData.item;

    function onPressHandle() {
      navigation.navigate("MealsDetail", {
        mealId: item.id,
      });
    }

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem onPress={onPressHandle} {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
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
