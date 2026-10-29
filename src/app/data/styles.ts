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
  rootContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    width: "50%",
    height: 40,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
});
