import { Colors } from "@/constants/globalStyles";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { StyleSheet, View } from "react-native";

export default function CustomDrawer(props: any) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          labelStyle={{ color: Colors.white }}
          onPress={() => {
            alert("Logout clicked");
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    color: Colors.black,
  },
});
