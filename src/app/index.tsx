import {
  Pressable,
  ScrollView,
  TextInput,
  useColorScheme,
  View,
  Text,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles, getThemeStyles } from "./data/styles";
import {
  signupSchema,
  SignupFormInput,
  SignupFormOutput,
} from "../schemas/signup";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Index() {
  const {
    // variables to handle the form state and submission
    // control is used to register inputs with react-hook-form
    // handleSubmit is used to handle form submission
    // reset is used to reset the form to its default values
    // errors holds the validation errors for each field
    // isSubmitting indicates if the form is currently being submitted
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormInput, unknown, SignupFormOutput>({
    // Use Zod schema for validation
    resolver: zodResolver(signupSchema),
    // make it validate on touch rather than on change
    mode: "onTouched",
    // Set default values for the form fields
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const submit = async (data: SignupFormOutput) => {
    // temporary log to check the submitted data later on
    console.log(data);
    reset();
  };

  // Get theme styles basaed on what systems color scheme is active
  const themeStyles = getThemeStyles(useColorScheme() === "dark");

  return (
    <SafeAreaView style={[styles.rootContainer, themeStyles.background]}>
      <ScrollView style={[styles.rootContainer, themeStyles.background]}>
        <View style={styles.container}>
          <Text style={[styles.title, themeStyles.primaryText]}>Sign Up</Text>

          {/* First Name Input */}
          <Controller
            control={control}
            name="firstName"
            render={({ field: { value, onChange, onBlur } }) => (
              <TextInput
                style={[
                  styles.input,
                  themeStyles.border,
                  themeStyles.primaryText,
                ]}
                placeholder="First Name"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.firstName && (
            <Text style={styles.errorText}>{errors.firstName.message}</Text>
          )}

          {/* Last Name Input */}
          <Controller
            control={control}
            name="lastName"
            render={({ field: { value, onChange, onBlur } }) => (
              <TextInput
                style={[
                  styles.input,
                  themeStyles.border,
                  themeStyles.primaryText,
                ]}
                placeholder="Last Name"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.lastName && (
            <Text style={styles.errorText}>{errors.lastName.message}</Text>
          )}

          {/* Email Input */}
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange, onBlur } }) => (
              <TextInput
                style={[
                  styles.input,
                  themeStyles.border,
                  themeStyles.primaryText,
                ]}
                placeholder="Email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}

          {/* Password Input */}
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange, onBlur } }) => (
              <TextInput
                style={[
                  styles.input,
                  themeStyles.border,
                  themeStyles.primaryText,
                ]}
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          />
          {errors.password && (
            <Text style={styles.errorText}>{errors.password.message}</Text>
          )}
          {/* Confirm Password Input */}
          {/* <TextInput
            style={[styles.input, themeStyles.border, themeStyles.primaryText]}
            placeholder="Confirm Password"
            value={form.ConfirmPassword}
            secureTextEntry={true}
            onChangeText={(text) => setForm({ ...form, ConfirmPassword: text })}
          /> */}
          {/* Sign Up Button */}
          <Pressable
            style={[styles.button, themeStyles.button]}
            onPress={handleSubmit(submit)}
          >
            <Text style={themeStyles.primaryText}>Sign Up</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
