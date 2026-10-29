import { useState } from "react";
import { Pressable, ScrollView, TextInput, useColorScheme, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, getThemeStyles } from "./data/styles";
import { signupSchema, SignupFormInput, SignupFormOutput } from "../schemas/signup"

export default function Index() {
  // State for the form fields
  const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  // Get theme styles basaed on what systems color scheme is active
  const themeStyles = getThemeStyles(useColorScheme() === "dark");
  
  return (
    <SafeAreaView style={[styles.rootContainer, themeStyles.background]}>
      <ScrollView style={[styles.rootContainer, themeStyles.background]}>

        <View style={styles.container}>
          <Text style={[styles.title, themeStyles.primaryText]}>Sign Up</Text>
          {/* First Name Input */}
          <TextInput
            style={[styles.input, themeStyles.border, themeStyles.primaryText]}
            placeholder="First Name"
            value={form.FirstName}
            onChangeText={(text) => setForm({ ...form, FirstName: text })}
          />
          {/* Last Name Input */}
          <TextInput
            style={[styles.input, themeStyles.border, themeStyles.primaryText]}
            placeholder="Last Name"
            value={form.LastName}
            onChangeText={(text) => setForm({ ...form, LastName: text })}
          />
          {/* Email Input */}
          <TextInput
            style={[styles.input, themeStyles.border, themeStyles.primaryText]}
            placeholder="Email"
            value={form.Email}
            keyboardType="email-address"
            onChangeText={(text) => setForm({ ...form, Email: text })}
          />
          {/* Password Input */}
          <TextInput
            style={[styles.input, themeStyles.border, themeStyles.primaryText]}
            placeholder="Password"
            value={form.Password}
            secureTextEntry={true}
            onChangeText={(text) => setForm({ ...form, Password: text })}
          />
          {/* Confirm Password Input */}
          <TextInput
            style={[styles.input, themeStyles.border, themeStyles.primaryText]}
            placeholder="Confirm Password"
            value={form.ConfirmPassword}
            secureTextEntry={true}
            onChangeText={(text) => setForm({ ...form, ConfirmPassword: text })}
          />
          {/* Sign Up Button */}
          <Pressable style={[styles.button, themeStyles.button]}>
            <Text style={themeStyles.primaryText}>Sign Up</Text>
          </Pressable>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}