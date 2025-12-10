// "use client";
// import { useState } from "react";

// export default function FormPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     role: "",
//     bio: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ 
//       ...formData, 
//       [e.target.name]: e.target.value 
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted:", formData);
//     alert("Form submitted! Check console.");
//   };

//   return (
//     <div style={{ maxWidth: "550px", margin: "40px auto", padding: "20px" }}>
//       <h1>Registration Form</h1>

//       <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
//         <input
//           type="text"
//           name="name"
//           placeholder="Full Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//         />

//         {/* Dropdown Menu */}
//         <select 
//           name="role" 
//           value={formData.role} 
//           onChange={handleChange}
//           required
//         >
//           <option value="">Select Account Type</option>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//           <option value="developer">Developer</option>
//           <option value="guest">Guest</option>
//         </select>

//         <textarea
//           name="bio"
//           placeholder="Short Bio (optional)"
//           rows={4}
//           value={formData.bio}
//           onChange={handleChange}
//         />

//         <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// "use client";

// import { useForm } from "react-hook-form";

// export default function FormPage() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log("Form submitted:", data);
//     alert("Form submitted! Check console.");
//   };

//   return (
//     <div style={{ maxWidth: "550px", margin: "40px auto", padding: "20px" }}>
//       <h1>Registration Form</h1>

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         style={{ display: "flex", flexDirection: "column", gap: "15px" }}
//       >
//         {/* Name */}
//         <input
//           placeholder="Full Name"
//           {...register("name", { required: "Name is required" })}
//         />
//         {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}

//         {/* Email */}
//         <input
//           type="email"
//           placeholder="Email Address"
//           {...register("email", {
//             required: "Email is required",
//             pattern: {
//               value: /\S+@\S+\.\S+/,
//               message: "Invalid email format",
//             },
//           })}
//         />
//         {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

//         {/* Password */}
//         <input
//           type="password"
//           placeholder="Password"
//           {...register("password", { required: "Password is required" })}
//         />
//         {errors.password && (
//           <p style={{ color: "red" }}>{errors.password.message}</p>
//         )}

//         {/* Phone */}
//         <input
//           type="tel"
//           placeholder="Phone Number"
//           {...register("phone")}
//         />

//         {/* Dropdown */}
//         <select
//           {...register("role", { required: "Please select a role" })}
//         >
//           <option value="">Select Account Type</option>
//           <option value="user">User</option>
//           <option value="admin">Admin</option>
//           <option value="developer">Developer</option>
//           <option value="guest">Guest</option>
//         </select>
//         {errors.role && <p style={{ color: "red" }}>{errors.role.message}</p>}

//         {/* Bio */}
//         <textarea
//           rows={4}
//           placeholder="Short Bio (optional)"
//           {...register("bio")}
//         />

//         <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

// -------------------------
// FORM SCHEMA USING ZOD
// -------------------------
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .email("Invalid email")
    .min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
  phone: z.string().optional(),
  role: z.string().min(1, "Please select a role"),
  bio: z.string().optional(),
});

// Infer TypeScript type from schema
type FormValues = z.infer<typeof formSchema>;

export default function RegistrationForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      role: "",
      bio: "",
    },
  });

  function onSubmit(values: FormValues) {
    console.log("Submitted:", values);
    alert("Form submitted! Check console.");
  }

  return (
    <div className="max-w-lg mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">Registration Form</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          {/* Name */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@gmail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="9800000000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Role Dropdown */}
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Role</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a role" />
                    </SelectTrigger>
                  </FormControl>

                  <SelectContent>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="developer">Developer</SelectItem>
                    <SelectItem value="guest">Guest</SelectItem>
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />

          {/* Bio */}
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Short Bio (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    rows={4}
                    placeholder="Tell us about yourself..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

