import { Colors } from "@/constants/globalStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import Drawer from "expo-router/drawer";
import React from "react";
import { Pressable } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export type RootParamList = {
  home: undefined;
};

// Button for navigating back
const BackButton = () => {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.back()} style={{ padding: 8 }}>
      <MaterialIcons name="arrow-back" size={24} color="white" />
    </Pressable>
  );
};

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          drawerStyle: {
            backgroundColor: Colors.dark[2],
          },
          drawerLabelStyle: {
            color: "white",
          },
          headerStyle: {
            backgroundColor: Colors.dark[2],
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Home",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "About",
            title: "About Us",
            headerShown: true,
            headerLeft: () => <BackButton />, // Custom back button
          }}
        />
        <Drawer.Screen
          name="account"
          options={{
            drawerLabel: "My Account",
            title: "My Account",
            headerShown: true,
            headerLeft: () => <BackButton />, // Custom back button
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
