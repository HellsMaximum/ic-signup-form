import { useState } from "react";
import { ScrollView, TextInput, useColorScheme, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, getThemeStyles } from "./data/styles";

export default function Index() {
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  const themeStyles = getThemeStyles(useColorScheme() === "dark");
  
  return (
    <SafeAreaView style={[styles.RootContainer, themeStyles.background]}>
      <ScrollView style={[styles.RootContainer, themeStyles.background]}>

        <View style={styles.Container}>
          <TextInput
            style={[styles.Input, themeStyles.border, themeStyles.primaryText]}
            placeholder="First Name"
            value={form.FirstName}
            onChangeText={(text) => setForm({ ...form, FirstName: text })}
          />
          <TextInput
            style={[styles.Input, themeStyles.border, themeStyles.primaryText]}
            placeholder="Last Name"
            value={form.LastName}
            onChangeText={(text) => setForm({ ...form, LastName: text })}
          />
          <TextInput
            style={[styles.Input, themeStyles.border, themeStyles.primaryText]}
            placeholder="Email"
            value={form.Email}
            onChangeText={(text) => setForm({ ...form, Email: text })}
          />
          <TextInput
            style={[styles.Input, themeStyles.border, themeStyles.primaryText]}
            placeholder="Password"
            value={form.Password}
            onChangeText={(text) => setForm({ ...form, Password: text })}
          />
          <TextInput
            style={[styles.Input, themeStyles.border, themeStyles.primaryText]}
            placeholder="Confirm Password"
            value={form.ConfirmPassword}
            onChangeText={(text) => setForm({ ...form, ConfirmPassword: text })}
          />
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}