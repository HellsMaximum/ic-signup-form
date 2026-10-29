import { SafeAreaView } from "react-native-safe-area-context";
import { getThemeStyles, styles } from "./data/styles";
import { useColorScheme, View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";


export default function NewUser() {
  
  // Determine the current device color scheme and get the corresponding theme styles
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  // Get the first name from the local search parameters passed from the previous page
  const { firstName } = useLocalSearchParams();
  
    return(
    <SafeAreaView style={[styles.rootContainer, themeStyles.background]}>
      <View style={styles.container}>
        {/* display the success message and say welcome + user first name */}
        <Text style={[styles.title, themeStyles.primaryText]}>Successfully Signed Up</Text>
        <Text style={[styles.subtitle, themeStyles.primaryText]}>Welcome {firstName}!</Text>
      </View>
    </SafeAreaView>
  );
}