import { z } from "zod";

export const formSchema = z.object({
  fullname: z
    .string()
    .min(3, { message: "Fullname must be at least 3 characters" }),
  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits" }),
  gender: z.enum(["male", "female", "other"]),
});
