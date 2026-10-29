import { SafeAreaView } from "react-native-safe-area-context";
import { getThemeStyles, styles } from "./data/styles";
import { useColorScheme, View, Text } from "react-native";


export default function NewUser() {
  
  // Determine the current device color scheme and get the corresponding theme styles
  const themeStyles = getThemeStyles(useColorScheme() === "dark");
  
    return(
    <SafeAreaView style={[styles.rootContainer, themeStyles.background]}>
      <View style={styles.container}>
        <Text style={[styles.title, themeStyles.primaryText]}>awindawoindawoind</Text>
      </View>
    </SafeAreaView>
  );
}