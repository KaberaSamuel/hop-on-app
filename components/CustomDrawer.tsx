import { baseFontSize, Colors } from "@/constants/globalStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CustomDrawer(props: any) {
  const [drawerOffset, setDrawerOffset] = useState(20);
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={true}
        contentContainerStyle={{ flex: 1, padding: 0 }}
      >
        {/* profile */}
        <View
          style={[
            styles.profileContainer,
            // counteracting padding offset
            {
              marginTop: -drawerOffset,
              marginHorizontal: -drawerOffset,
            },
          ]}
          onLayout={(event) => {
            const { x, width } = event.nativeEvent.layout;
            // Update offset
            if (x > 0 && x !== drawerOffset) {
              // adding 5 pixels to ensure profile reaches parent borders
              setDrawerOffset(x + 5);
            }
          }}
        >
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
          <Pressable>
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
    paddingTop: 60,
    paddingBottom: 30,
    paddingRight: 20,
    backgroundColor: Colors.dark[1],
  },

  username: {
    marginTop: 15,
    marginBottom: 5,
    fontSize: baseFontSize * 1.4,
    fontWeight: "600",
    color: Colors.blue,
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
