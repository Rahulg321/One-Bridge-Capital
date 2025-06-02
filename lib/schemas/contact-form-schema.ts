import { z } from "zod";

// Define Zod schema for validation
export const contactFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  interest: z.string().min(1, { message: "Please select an interest" }),
  message: z.string().min(1, { message: "Message is required" }),
});
