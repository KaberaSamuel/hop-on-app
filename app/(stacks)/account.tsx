import { Colors } from "@/constants/globalStyles";
import { StyleSheet, Text, View } from "react-native";

export default function Account() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark[2],
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
