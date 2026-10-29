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
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={form.FirstName}
            onChangeText={(text) => setForm({ ...form, FirstName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            value={form.LastName}
            onChangeText={(text) => setForm({ ...form, LastName: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={form.Email}
            onChangeText={(text) => setForm({ ...form, Email: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={form.Password}
            onChangeText={(text) => setForm({ ...form, Password: text })}
          />
          <TextInput
            style={styles.input}
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
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
