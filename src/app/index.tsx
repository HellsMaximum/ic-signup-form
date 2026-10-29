import { useState } from "react";
import { Pressable, ScrollView, TextInput, useColorScheme, View, Text } from "react-native";
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
    <SafeAreaView style={[styles.rootContainer, themeStyles.background]}>
      <ScrollView style={[styles.rootContainer, themeStyles.background]}>

        <View style={styles.container}>
          <Text style={[styles.title, themeStyles.primaryText]}>Sign Up</Text>
          <TextInput
            style={[styles.input, themeStyles.border, themeStyles.primaryText]}
            placeholder="First Name"
            value={form.FirstName}
            onChangeText={(text) => setForm({ ...form, FirstName: text })}
          />
          <TextInput
            style={[styles.input, themeStyles.border, themeStyles.primaryText]}
            placeholder="Last Name"
            value={form.LastName}
            onChangeText={(text) => setForm({ ...form, LastName: text })}
          />
          <TextInput
            style={[styles.input, themeStyles.border, themeStyles.primaryText]}
            placeholder="Email"
            value={form.Email}
            keyboardType="email-address"
            onChangeText={(text) => setForm({ ...form, Email: text })}
          />
          <TextInput
            style={[styles.input, themeStyles.border, themeStyles.primaryText]}
            placeholder="Password"
            value={form.Password}
            secureTextEntry={true}
            onChangeText={(text) => setForm({ ...form, Password: text })}
          />
          <TextInput
            style={[styles.input, themeStyles.border, themeStyles.primaryText]}
            placeholder="Confirm Password"
            value={form.ConfirmPassword}
            secureTextEntry={true}
            onChangeText={(text) => setForm({ ...form, ConfirmPassword: text })}
          />
          <Pressable style={[styles.button, themeStyles.button]}>
            <Text style={themeStyles.primaryText}>Sign Up</Text>
          </Pressable>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}