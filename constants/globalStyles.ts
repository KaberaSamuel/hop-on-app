import { StyleSheet } from "react-native";

export const baseFontSize = 16;

export const Colors = {
  white: "#fff",
  black: "#000",
  blue: { 1: "#bedbff", 2: "#2b7fff" },

  gray: { 0: "#e5e5e5", 1: "#d4d4d4", 1.5: "#a6a09b", 2: "#6b7280" },

  dark: {
    1: "#262626",
    2: "#171717",
    3: "#0a0a0a",
  },
};

export const CommonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },

  contentContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    borderColor: "red",
    borderStyle: "solid",
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

export const settingsStyles = StyleSheet.create({
  container: CommonStyles.container,

  contentContainer: CommonStyles.contentContainer,

  profileContainer: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: Colors.gray[0],
  },

  accountContainer: {
    gap: 2,
    flex: 1,
  },

  flexContainer: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },

  topBottomBorders: {
    borderColor: Colors.gray[1.5],
    borderWidth: 1,
    borderStyle: "solid",
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },

  header: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: Colors.gray[1],
  },

  delete: {
    color: "#fb2c36",
    textTransform: "uppercase",
  },
  username: {
    fontWeight: "600",
    textTransform: "capitalize",
  },

  borderBottom: {
    borderBottomColor: Colors.gray[1.5],
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
});
