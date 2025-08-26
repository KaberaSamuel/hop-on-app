import { Colors } from "@/constants/globalStyles";
import { StatusBar, StyleSheet, Text, View } from "react-native";

import Navbar from "@/components/Navbar";

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.dark[3]} />
      <Navbar />

      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome To Hop On App</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },

  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: Colors.black,
  },

  button: {
    color: Colors.black,
    marginTop: 5,
  },
});
