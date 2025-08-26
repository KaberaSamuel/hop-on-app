import CustomDrawer from "@/components/CustomDrawer";
import { Colors } from "@/constants/globalStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
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
      <MaterialIcons name="arrow-back" size={24} color={Colors.black} />
    </Pressable>
  );
};

const RootLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawer}
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: Colors.gray[2],
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            drawerLabel: "Home",
            drawerIcon: ({ size }) => (
              <MaterialIcons name="home" size={size} color={Colors.gray[2]} />
            ),
          }}
        />

        <Drawer.Screen
          name="account"
          options={{
            drawerLabel: "My Account",
            title: "My Account",
            headerShown: true,
            headerLeft: () => <BackButton />,
            drawerIcon: ({ size }) => (
              <MaterialIcons
                name="account-circle"
                size={size}
                color={Colors.gray[2]}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="payments"
          options={{
            drawerLabel: "My Payments",
            title: "My Payments",
            headerShown: true,
            headerLeft: () => <BackButton />,
            drawerIcon: ({ size }) => (
              <MaterialIcons
                name="payment"
                size={size}
                color={Colors.gray[2]}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="trip-history"
          options={{
            drawerLabel: "Trip History",
            title: "Trip History",
            headerShown: true,
            headerLeft: () => <BackButton />,
            drawerIcon: ({ size }) => (
              <MaterialIcons
                name="history"
                size={size}
                color={Colors.gray[2]}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
