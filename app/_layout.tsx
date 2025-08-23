import Drawer from "expo-router/drawer";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="(stacks)/index"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />
        <Drawer.Screen
          name="(stacks)/about"
          options={{
            drawerLabel: "About",
            title: "About",
          }}
        />
        <Drawer.Screen
          name="(stacks)/account"
          options={{
            drawerLabel: "My Account",
            title: "My Account",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
