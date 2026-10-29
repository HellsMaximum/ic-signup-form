import { StyleSheet } from "react-native";

export function getThemeStyles(isDark: boolean) {
  const colors = isDark
    ? {
        background: "black",
        surface: "black",
        text: "white",
        secondaryText: "lightgray",
        border: "#262626",
        button: "#363636",
      }
    : {
        background: "white",
        surface: "white",
        text: "black",
        secondaryText: "#262626",
        border: "lightgray",
        button: "lightgray",
      };

  return StyleSheet.create({
    background: { backgroundColor: colors.background },
    surface: { backgroundColor: colors.surface },
    primaryText: { color: colors.text },
    secondaryText: { color: colors.secondaryText },
    border: { borderColor: colors.border },
    button: { backgroundColor: colors.button },
    icon: { color: colors.text },
    selectedBorder: { borderBottomColor: colors.text },
  });
}

export const styles = StyleSheet.create({
  RootContainer: {
    flex: 1,
  },
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  Input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});