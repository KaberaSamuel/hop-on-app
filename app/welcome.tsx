import { baseFontSize, Colors } from "@/constants/globalStyles";
import { Link } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const window = Dimensions.get("window");

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("@/assets/images/app-logo.png")}
          style={styles.image}
        />

        <Text style={styles.important}>Hop On</Text>
        <Text style={styles.aboutText}>Transportation at your hands</Text>
      </View>

      <View>
        <Link href="/signup" style={[styles.authText, styles.signup]}>
          Sign Up
        </Link>
        <Link href="/login" style={styles.authText}>
          Login
        </Link>

        {/* <Link href="/(drawer)" style={styles.authText}>
          Go to home
        </Link> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: window.height * 0.2,
    paddingBottom: 80,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.dark[1],
  },

  image: {
    width: 200,
    height: 100,
  },

  important: {
    fontSize: baseFontSize * 1.2,
    fontWeight: "600",
    color: Colors.white,
    textAlign: "center",
  },

  aboutText: { marginTop: 10, color: Colors.gray[1] },

  signup: {
    width: window.width * 0.9,
    paddingVertical: 12,
    backgroundColor: Colors.blue[2],
    marginBottom: 15,
    borderRadius: 10,
  },

  authText: {
    color: Colors.white,
    textAlign: "center",
  },
});
