import { useState } from "react";
import { 
  Text, 
  View, 
  StyleSheet, 
  ScrollView 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
    const [form, setForm] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
  });

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
      <form>
        <input 
          type="text" 
          placeholder="First Name" 
          value={form.FirstName} 
        />
      </form>
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
});
