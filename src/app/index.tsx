import { useState } from "react";
import { ScrollView, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [form, setForm] = useState({
    FirstName: "test",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  return (
    <SafeAreaView style={styles.RootContainer}>
      <ScrollView style={styles.RootContainer}>
        <View style={styles.Container}>
          <TextInput
            style={styles.Input}
            placeholder="First Name"
            value={form.FirstName}
            onChangeText={(text) => setForm({ ...form, FirstName: text })}
          />
          <TextInput
            style={styles.Input}
            placeholder="Last Name"
            value={form.LastName}
            onChangeText={(text) => setForm({ ...form, LastName: text })}
          />
          <TextInput
            style={styles.Input}
            placeholder="Email"
            value={form.Email}
            onChangeText={(text) => setForm({ ...form, Email: text })}
          />
          <TextInput
            style={styles.Input}
            placeholder="Password"
            value={form.Password}
            onChangeText={(text) => setForm({ ...form, Password: text })}
          />
          <TextInput
            style={styles.Input}
            placeholder="Confirm Password"
            value={form.ConfirmPassword}
            onChangeText={(text) => setForm({ ...form, ConfirmPassword: text })}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
