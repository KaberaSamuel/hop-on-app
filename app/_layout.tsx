import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen
        name="signup"
        options={{ title: "Sign Up", headerShown: true }}
      />
      <Stack.Screen
        name="login"
        options={{ title: "Login", headerShown: true }}
      />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="settings"
        options={{ title: "Settings", headerShown: true }}
      />
    </Stack>
  );
}
