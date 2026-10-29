import { z } from "zod";
// Schema for validating sign up form fields

// Validation for name fields
const name = (label:string) =>
  z.string()
    // Trim whitespace before validating length
    .trim()
    // Check if the name is between 2 and 30 characters
    .min(2, `${label} must be at least 2 characters.`)
    .max(30, `${label} must be less than 30 characters.`);

// Validation for email field
const email = z.email("Invalid email address.")
  // Trim whitespace before validating
  .trim()
  // Check if the email is not empty
  .min(1, "Email is required.")

// Validation for password field
const password = z.string()
  // Trim whitespace before validating length
  .trim()
  // Check if the password is at least 8 characters
  .min(8, "Password must be at least 8 characters.");

const confirmPassword = z.string()
  // Trim whitespace before validating
  .trim()
  // Check if the confirm password is not empty
  .min(1, "Confirm password is required.");

// Schema for validating the entire sign up form
// Exported for use in validating the sign up form
export const signupSchema = z
  // Define what goes into the sign up form object
  .object({
    firstName: name("First name"),
    lastName: name("Last name"),
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  })
  // Ensure that the password and confirm password fields match
  .refine((matching) => matching.password === matching.confirmPassword, {
    message: "Passwords must match.",
    path: ["confirmPassword"],
  });

  // input and output types for the sign up form
  // input holds the fields data while typing
  export type SignupFormInput = z.input<typeof signupSchema>;
  // output represents the validated and parsed form data
  export type SignupFormOutput = z.output<typeof signupSchema>;