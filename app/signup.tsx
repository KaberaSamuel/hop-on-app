import { Colors } from "@/constants/globalStyles";
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

interface SignupFormTypes {
  email: string;
}

export default function SignUp() {
  const { width: screenWidth } = useWindowDimensions();
  const animatedWidth = useSharedValue(screenWidth - 50);
  const loaderBaseSize = 40;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedWidth.value,
      height: loaderBaseSize,
    };
  });

  const [isLoading, setIsLoading] = useState(false);
  const { control, handleSubmit } = useForm<SignupFormTypes>();
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
        animatedWidth.value = withTiming(screenWidth - 50, { duration: 300 });
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
        rules={{ required: true }}
        defaultValue=""
      />

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
