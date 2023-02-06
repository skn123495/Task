import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import HomeScreen from "../screens/HomeScreen";
import AboutUsScreen from "../screens/AboutUsScreen";
import { Routes } from "../constants/Constants";
import { useSelector } from "react-redux";
import styles from "./styles";
import { DARK } from "../constants/Strings";
import Colors from "../constants/Colors";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DrawerNavigator = () => {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <Drawer.Navigator screenOptions={styles.drawerScreenOptions(theme)}>
      <Drawer.Screen
        name={Routes.HomeScreen}
        component={HomeScreen}
        options={{
          title: "HomeScreen",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={Routes.AboutUsScreen}
        component={AboutUsScreen}
        options={{
          title: "AboutUsScreen",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="help" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
const BottomNavigator = () => {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <Tab.Navigator screenOptions={styles.tabScreenOptions(theme)}>
      <Tab.Screen
        name="Home"
        component={AuthenticatedStack}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="home"
              size={25}
              color={theme === DARK ? Colors.WHITE : Colors.error100}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="settings"
              size={25}
              color={theme === DARK ? Colors.WHITE : Colors.error100}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const AuthenticatedStack = () => {
  const theme = useSelector((state) => state.theme.mode);
  return (
    <Stack.Navigator screenOptions={styles.screenOptionsing(theme)}>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
};
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};
export default React.memo(MainNavigator);
