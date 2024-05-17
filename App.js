import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import DetailMealsOverviewScreen from "./screens/DetailMealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: "All Categories",
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
          // ما میتوانیم با استفاده از اسکرین اپشن به پس زمینه و هدر نویگیشنی که دیفالت ایجاد شده بود استایل دهی کنیم البته اگر این کار در استک دات نویگیتور انجام بشود در کل اسکرین ها اعمال میشود

          // اولین اسکرین به عنوان اسکرین اصلی به صورت دیفالت در صفحه نمایش داده میشود
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              // headerStyle: { backgroundColor: "#351401" },
              // headerTintColor: "white",
              // contentStyle: { backgroundColor: "#3f2f25" },
              // میتوان با  استایل دهی به هدر و پس زمینه نویگیشن را این جا مخصوص این اسکرین انجام داد
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            // options={({route,navigation})=>{
            //   const catId = route.params.title
            //   return{
            //       title:catId
            //   };
            // }}
            // میتوان با روت و نویگیشنی که این کامپوننت در اختیار ما میگزارد تایتل مخصوص برای هر اسکرین مجزایی که از این اسکرین رندر میشود را قرار داد منتها این کار را در داخل خود کامپوننت  با یک ابزار دیگر انجام دادیم
          />
          <Stack.Screen
            name="DetailsMealOverview"
            component={DetailMealsOverviewScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
