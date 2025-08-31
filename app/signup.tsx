import { Colors } from "@/constants/globalStyles";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { Link } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import * as yup from "yup";

interface SignupFormTypes {
  email: string;
}

const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});

export default function SignUp() {
  // animated loader variables
  const { width: screenWidth } = useWindowDimensions();
  const animatedWidth = useSharedValue(screenWidth - 40);
  const loaderBaseSize = 40;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
      height: loaderBaseSize,
    };
  });

  // form variables
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormTypes>({ resolver: yupResolver(formSchema) });
  const baseApi = "https://307cab826bb3.ngrok-free.app/users";

  const onSubmit = async (data: SignupFormTypes) => {
    try {
      animatedWidth.value = withTiming(loaderBaseSize, { duration: 300 });
      setIsLoading(true);
      await axios.post(`${baseApi}/register/`, data);
    } catch (error) {
      console.log(error);
    } finally {
      // simulating loading
      setTimeout(() => {
        setIsLoading(false);
        animatedWidth.value = withTiming(screenWidth - 40, { duration: 300 });
      }, 2000);
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
        defaultValue=""
      />

      {/* displaying validation error */}
      {errors.email && (
        <Text style={{ color: "red" }}>{errors.email.message}</Text>
      )}

      <View>
        <Animated.View
          style={[
            styles.signup,
            animatedStyle,
            isLoading && {
              marginHorizontal: "auto",
              borderRadius: 25,
            },
          ]}
        >
          {isLoading ? (
            <ActivityIndicator color={Colors.white} />
          ) : (
            <Pressable onPress={handleSubmit(onSubmit)}>
              <Text style={styles.next}>Next</Text>
            </Pressable>
          )}
        </Animated.View>

        <Link href="/login" style={styles.login}>
          Login
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
    paddingTop: 40,
    paddingHorizontal: 20,
  },

  signup: {
    alignSelf: "center",
    backgroundColor: Colors.blue[2],
    padding: 5,
    marginTop: 10,
    borderRadius: 15,

    // centering children
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  next: {
    color: Colors.white,
    textAlign: "center",
    fontWeight: "600",
  },

  login: {
    marginTop: 20,
    fontWeight: "700",
    textAlign: "center",
  },

  label: {
    fontWeight: "600",
  },
});
