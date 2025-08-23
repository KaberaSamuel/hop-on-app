import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Home",
            title: "Home",
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "About",
            title: "About",
          }}
        />
        <Drawer.Screen
          name="account"
          options={{
            drawerLabel: "My Account",
            title: "My Account",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
