import { Colors } from "@/constants/globalStyles";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function signup() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>Email or Phone number</Text>
        <TextInput style={styles.input} placeholder="example@gmail.com" />
      </View>

      <View>
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            secureTextEntry={!isPasswordVisible}
            style={styles.input}
          />
          <Pressable onPress={togglePasswordVisibility}>
            <Ionicons
              name={isPasswordVisible ? "eye-off" : "eye"}
              size={20}
              color={Colors.gray[2]}
              style={styles.eyeIcon}
            />
          </Pressable>
        </View>
      </View>

      <Text style={styles.button}>Login</Text>
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

  passwordContainer: {
    position: "relative",
  },

  eyeIcon: { position: "absolute", right: 20, bottom: 7 },

  button: {
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
