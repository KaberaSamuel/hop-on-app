import { StyleSheet } from "react-native";

export const baseFontSize = 16

export const Colors = {
  white: "#fff",
  black: "#000",
  blue: "#2b7fff",

  gray: {1: "#d4d4d4",2:"#6b7280"},

  dark: {
    1: "#262626",
    2: "#171717",
    3: "#0a0a0a",
  },
};

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },

  icon: {
    color: Colors.white,
  },

  input: {
    flex: 1,
    backgroundColor: Colors.white,
    color: Colors.black,
    paddingVertical: 10,
    paddingLeft: 30,
    borderRadius: 5,
  },
});
