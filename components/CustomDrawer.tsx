import { baseFontSize, Colors } from "@/constants/globalStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { DrawerActions } from "@react-navigation/native";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CustomDrawer(props: any) {
  const router = useRouter();

  const handleNavigation = (route: "/settings") => {
    props.navigation.dispatch(DrawerActions.closeDrawer());
    router.push(route);
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={true}
        contentContainerStyle={{ flex: 1, padding: 0 }}
      >
        {/* profile */}
        <View style={styles.profileContainer}>
          <MaterialIcons
            name="account-circle"
            size={100}
            color={Colors.gray[1]}
          />
          <Text style={styles.username}>Kabera Nshuti Samuel</Text>
          <Text style={styles.text}>kaberanshutisamuel@gmail.com</Text>
        </View>

        {/* Main screens */}
        <View style={styles.screensContainer}>
          <DrawerItemList {...props} />
        </View>

        {/* footer */}
        <View style={styles.footerContainer}>
          <Pressable onPress={() => handleNavigation("/settings")}>
            <Text style={styles.footerItem}>Settings</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.footerItem}>About</Text>
          </Pressable>

          <Pressable>
            <Text style={styles.footerItem}>Logout</Text>
          </Pressable>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 0,
    backgroundColor: Colors.white,
    position: "relative",
  },

  profileContainer: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 30,
    paddingRight: 10,
    backgroundColor: Colors.dark[1],

    // extending to borders
    marginTop: -20,
    marginHorizontal: -20,
  },

  username: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: baseFontSize * 1.4,
    fontWeight: "600",
    color: Colors.blue[2],
  },

  text: {
    color: "white",
  },

  screensContainer: {
    flex: 1,
    paddingTop: 20,
    borderRadius: 0,
  },

  footerContainer: {
    gap: 30,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginHorizontal: -10,
    borderTopColor: Colors.gray[2],
    borderTopWidth: 1,
    borderStyle: "solid",
  },

  footerItem: {
    fontWeight: "600",
    color: Colors.gray[2],
  },
});
