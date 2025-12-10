"use client";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {Form,FormControl,FormField,FormItem,FormLabel,FormMessage} from "@/components/ui/form";
import {Select,SelectTrigger,SelectValue,SelectItem,SelectContent} from "@/components/ui/select";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import SkillsForm from "../components/formComponents/skills";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .email("Invalid email")
    .min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
  role: z.string().min(1, "Please select a role"),
  bio: z.string().optional(),
  skills: z.array(z.string().min(1, "Skill cannot be empty")).min(1, "At least one skill is required")
  
});

type FormValues = z.infer<typeof formSchema>;

export default function FormPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "",
      bio: "",
      skills : [""]
    }
  });
  const {watch}= form;
  const nameValue = watch("name");

  useEffect(() => {
    console.log("Name changed:", nameValue);
  }, [nameValue]);


  function onSubmit(values: FormValues) {
    console.log("Submitted:", values);
    alert("Form submitted! Check console.");
  }

  return (
    <div className="flex justify-center items-center py-16">
      <Card className="max-w-lg w-full p-8 shadow-xl rounded-2xl border border-gray-200 bg-white/80 backdrop-blur">
        
        <h1 className="text-3xl font-semibold mb-8 text-center tracking-tight">
          Create Your Account
        </h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="font-medium">Full Name</FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 text-base"
                      placeholder="Enter you full name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="font-medium">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 text-base"
                      placeholder="example@gmail.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="font-medium">Password</FormLabel>
                  <FormControl>
                    <Input
                      className="h-12 text-base"
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="font-medium">Select Role</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Choose role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="moderator">Moderator</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="font-medium">Bio</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[100px] text-base"
                      placeholder="Tell us about yourself"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <SkillsForm />

            <Button
              type="submit"
              className="w-full h-12 text-lg font-medium rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              Register
            </Button>

          </form>
        </Form>
      </Card>
    </div>
  );
}
