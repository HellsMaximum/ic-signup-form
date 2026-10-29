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