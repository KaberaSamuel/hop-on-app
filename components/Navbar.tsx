import { Colors, CommonStyles } from "@/constants/globalStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { StyleSheet, TextInput, View } from "react-native";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <MaterialIcons
          name="menu"
          size={24}
          color="black"
          style={CommonStyles.icon}
        />
        <MaterialIcons
          name="notifications"
          size={24}
          color="black"
          style={CommonStyles.icon}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons
          name="notifications"
          size={20}
          color="black"
          style={styles.locationIcon}
        />
        <TextInput style={[CommonStyles.input, { paddingLeft: 50 }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 15,
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
