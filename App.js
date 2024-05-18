import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import DetailMealsOverviewScreen from "./screens/DetailMealsOverviewScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import WelcomeScreen from "./OtherNavigation/WelcomeScreen";
import UserScreen from "./OtherNavigation/UserScreen";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      {/* <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: "All Categories",
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="DetailsMealOverview"
            component={DetailMealsOverviewScreen}
            // options={{
            //   headerRight:()=>{
            //     return <Button title="Tap Me !"/>
            //   }
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer> */}

      <NavigationContainer>
        <Drawer.Navigator initialRouteName="UserScreen">
          {/* اینشیال روت نیم به ما اولین کامپوننتی که در اپ رندر میشود را نشان میدهد */}
          <Drawer.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{
              headerStyle: { backgroundColor: "#3c0a6b" },
              headerTintColor: "white",
              drawerLabel: "welcome Screen",
              drawerActiveBackgroundColor: "#f0e1ff",
              drawerInactiveTintColor: "#3c0a6b",
              drawerStyle: { backgroundColor: "#fff" },
              drawerIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
              // دراور ایکون به ما یک فانکشنی میدهد که در ان میتواند ایکون مورد نظر را قرار دهیم که البته پراپس هایی مثل رنگ و سایز ایکون را نیز در اختیارمان قرار میدهد
            }}
            // در قسمت اپشن همانند قبلی میتوانند تمامی قسمت های نویگیتور را شخصی سازی کرد
          />
          <Drawer.Screen
            name="UserScreen"
            component={UserScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
      {/* در این قسمت از یک نویگیتور جدید به اسم دراور استفاده کردیم که البته انرا در پروژه نصب کردیم و بعد در بالا با استفاده از کریت دراور       نویگیتور آنرا ایمپورت کردیم*/}
      {/* بقیه قسمت ها مثل نویگیتور قبلی است یعنی باز نویگیشون کنتینور میخواهیم که از که از ری اکت نویگیشن ایمپورت میکنیم و ...مثل همان است */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
