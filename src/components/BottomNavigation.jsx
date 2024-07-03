import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//Screen imports
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import AddRecipeScreen from "../screens/AddRecipeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DetailDish from "../screens/DetailDish";
import FilterScreen from "../screens/FilterScreen";
import SettingScreen from "../screens/SettingScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//Stack Navigator for HomeScreen
function HomeStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailDish}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

//Stack Navigator for SearchScreen
function SearchStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailDish}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Filter"
        component={FilterScreen}
        options={{ headerShown: true, headerTitle: "" }}
      />
    </Stack.Navigator>
  );
}

// Stack Navigator for ProfileScreen
function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{ headerTitle: "Edit Profile", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 55,
        },
        tabBarItemStyle: {
          marginHorizontal: 38,
          justifyContent: "center",
          alignContent: "center",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "HomeTab":
              iconName = "home-outline";
              break;
            case "SearchTab":
              iconName = "search-outline";
              break;
            case "CommunityTab":
              iconName = "add-outline";
              break;
            case "FavoritesTab":
              iconName = "bookmark-outline";
              break;
            case "ProfileTab":
              iconName = "person-outline";
              break;
          }

          return (
            <View
              style={
                focused ? styles.iconContainerSelected : styles.iconContainer
              }
            >
              <Icon name={iconName} size={24} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="SearchTab" component={SearchStackNavigator} />
      <Tab.Screen name="CommunityTab" component={AddRecipeScreen} />
      <Tab.Screen name="FavoritesTab" component={FavoritesScreen} />
      <Tab.Screen name="ProfileTab" component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainerSelected: {
    backgroundColor: "black",
    borderRadius: 10,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
