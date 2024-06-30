import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//Screen imports
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import AddRecipeScreen from "../screens/AddRecipeScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
              case "Home":
                iconName = "home-outline";
                break;
              case "Search":
                iconName = "search-outline";
                break;
              case "Community":
                iconName = "add-outline";
                break;
              case "Favorites":
                iconName = "bookmark-outline";
                break;
              case "Profile":
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
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ tabBarLabel: "Trang chủ" }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{ tabBarLabel: "Tìm kiếm" }}
        />
        <Tab.Screen
          name="Community"
          component={AddRecipeScreen}
          options={{ tabBarLabel: "Cộng đồng" }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{ tabBarLabel: "Yêu thích" }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ tabBarLabel: "Hồ sơ" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

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
