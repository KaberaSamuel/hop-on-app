import { Colors } from "@/constants/globalStyles";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

import Navbar from "@/components/Navbar";

export default function Index() {
  return (
    <View style={styles.container}>
      <Navbar />

      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome To Hop On App</Text>
        <Link href="/about" style={styles.button}>
          Go to about screen
        </Link>
        <Link href="/account" style={styles.button}>
          Go to account screen
        </Link>
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
