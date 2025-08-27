import { settingsStyles } from "@/constants/globalStyles";
import User from "@/mocks-data/user";
import React from "react";
import { StatusBar, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
};

// container for safe areas
export default function OuterContainer({ children }: Props) {
  const fullname = User.firstname + " " + User.lastname;

  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[settingsStyles.container, { paddingBottom: bottom }]}>
      <StatusBar barStyle="light-content" />
      {children}
    </View>
  );
}
