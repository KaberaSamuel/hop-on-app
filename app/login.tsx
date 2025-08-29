import { Colors } from "@/constants/globalStyles";
import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function signup() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Email or Phone number</Text>
        <TextInput style={styles.input} placeholder="example@gmail.com" />
      </View>

      <View>
        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} />
      </View>

      <Text style={styles.login}>signup</Text>
      <Link href="/signup" style={styles.signup}>
        New? Signup
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  login: {
    width: "auto",
    marginVertical: 15,
    paddingVertical: 15,
    color: Colors.white,
    backgroundColor: Colors.blue[2],
    textAlign: "center",
    borderRadius: 10,
    fontWeight: "600",
  },

  signup: {
    fontWeight: "600",
    textAlign: "center",
  },

  input: {
    marginTop: 5,
    borderBottomColor: Colors.gray[1],
    borderBottomWidth: 1,
    borderStyle: "solid",
  },

  label: {
    fontWeight: "600",
  },
});
