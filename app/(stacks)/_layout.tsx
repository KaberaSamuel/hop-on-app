import { Stack } from "expo-router";
import React from "react";

const StacksLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="about" />
      <Stack.Screen name="account" />
    </Stack>
  );
};

export default StacksLayout;
