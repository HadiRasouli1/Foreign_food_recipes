import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();
// ما میتوانستیم نویگیتور های مختلفی که در اکسپو هست در پروژه نصب کنیم و از انها استفاده کنیم مثلا چون در این پروژه  نیتیو استک را نصب کردیم در اینجا هم در فراخوانی کردن نویگیتور از این کد استفاده میکنیم در ضمن این را هم در بالا از نیتیو استکی که نصب کردیم ایمپورت میکینیم

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        {/* کل محتوایی که نیاز است از نویگیشن استفاده کنند یاید داخل این کامپوننت قرار بگیرند که ما آنرا از ریاکت نویگیشن ایمپورت کردیم */}
        <Stack.Navigator>
          {/* با استفاده از اسمی که به نویگیتورمون گزاشتیم دات نویگتور را میزنیم تا اسکرین های مختلف را داخل این کامپوننت قرار بدیم */}
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          {/* اسکرین های مختلف در این کامپوننت که اسم نویگیشن دات اسکرین نام دارد قرار میگیرد فقط داخل کامپوننت اسم کامپوننت مورد نظر را مینویسیم نه به صورت سینتکس کامپوننتی در ضمن هر اسکرین یک نام نیز باید داشته باشد */}
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
