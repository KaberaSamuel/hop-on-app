import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About us</Text>
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
