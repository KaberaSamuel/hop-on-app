import { Colors } from "@/constants/globalStyles";
import { StyleSheet, Text, View } from "react-native";

export default function TripHistory() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trip History</Text>
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
