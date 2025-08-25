import { RootParamList } from "@/app/_layout";
import { Colors, CommonStyles } from "@/constants/globalStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import type { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

export default function Navbar() {
  const navigation = useNavigation<DrawerNavigationProp<RootParamList>>();

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <MaterialIcons name="menu" size={24} style={CommonStyles.icon} />
        </Pressable>
        <MaterialIcons
          name="notifications"
          size={24}
          style={CommonStyles.icon}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons
          name="location-on"
          size={20}
          style={styles.locationIcon}
        />
        <TextInput style={[CommonStyles.input, { paddingLeft: 50 }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 10,
    gap: 25,
    backgroundColor: Colors.dark[2],
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  inputContainer: {
    flexDirection: "row",
    position: "relative",
  },

  locationIcon: {
    color: Colors.gray[2],
    paddingHorizontal: 8,
    position: "absolute",
    zIndex: 10,
    top: "50%",
    transform: [{ translateY: "-50%" }],
    borderRightColor: Colors.gray[1],
    borderRightWidth: 2,
  },
});
