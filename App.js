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
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

// const BottomTab = createBottomTabNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="list" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
  // ما میتوانیم به این صورت در قسمت ریترن یک فانکشن یک نویگیتور استفاده کنیم و اسم این فانکشن را به قسمت کامپوننت یک نویگیتور دیگر بدهیم تا به این صورت بتوانیم از نویگیتور های تو در تو استفاده کنیم
};

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
            name="Drawer"
            component={DrawerNavigator}
            // در این قسمت اسم فانکشنی که داخلش نویگتور دیگر نوشته شده را مینویسیم تا بدین صورت بتوان از نویگتور های تو در تو استفاده کرد
            options={{
              headerShown: false,
              // این کد نیز قسمت هدر این اسکرین را حذف میکند زیرا نمیخواهیم همزمان دو هدر با دوتا تایتل داشته باشیم
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="DetailsMealOverview"
            component={DetailMealsOverviewScreen}
            options={{
              title: "about meal",
            }}
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

      {/* <NavigationContainer>
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
      </NavigationContainer> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
