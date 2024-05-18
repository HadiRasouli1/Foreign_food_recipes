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
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const BottomTab = createBottomTabNavigator();

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
      </NavigationContainer>

      {/* <NavigationContainer>
        <Drawer.Navigator initialRouteName="UserScreen">
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
            }}
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
      </NavigationContainer> */}

      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#3c0a6b" },
            headerTintColor: "white",
            tabBarActiveTintColor: "#3c0a6b",
          }}
        >
          <BottomTab.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={color} size={size} />
              ),
            }}
            // این نیز اسم  متفاوتی برای تنظیم ایکون دارد ولی همان کار قبلی را میکند و به ما پراپس هایی مثل سایز و رنگ میدهد
          />
          <BottomTab.Screen
            name="UserScreen"
            component={UserScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="person" color={color} size={size} />
              ),
            }}
            //
          />
        </BottomTab.Navigator>
      </NavigationContainer>
      {/* میتوانیم ازین نوع نویگیتور نیز استفاده کنیم مثل قبلی ها */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
