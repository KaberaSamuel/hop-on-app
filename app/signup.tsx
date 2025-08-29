import { Colors } from "@/constants/globalStyles";
import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function SignUp() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email or Phone number</Text>
      <TextInput placeholder="example@gmail.com" />
      <Text style={styles.next}>Next</Text>
      <Link href="/login" style={styles.login}>
        Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  next: {
    width: "auto",
    marginVertical: 15,
    paddingVertical: 15,
    color: Colors.white,
    backgroundColor: Colors.blue[2],
    textAlign: "center",
    borderRadius: 10,
    fontWeight: "600",
  },

  login: {
    fontWeight: "600",
    textAlign: "center",
  },

  label: {
    fontWeight: "600",
  },
});
