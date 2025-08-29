import { Colors } from "@/constants/globalStyles";
import axios from "axios";
import { Link } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

interface SignupFormTypes {
  email: string;
}

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<SignupFormTypes>();
  const baseApi = "https://c45e4c8ccb8d.ngrok-free.app/users";

  const onSubmit = async (data: SignupFormTypes) => {
    try {
      setIsLoading(true);
      await axios.post(`${baseApi}/register/`, data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email </Text>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="example@gmail.com"
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />

      <Pressable onPress={handleSubmit(onSubmit)}>
        <Text style={styles.next}>Next</Text>
      </Pressable>
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
