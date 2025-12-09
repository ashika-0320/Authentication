"use client";
import Formfields from "@/components/form/Formfields";
import { Card } from "@/components/ui/card";
import React from "react";
import { useForm } from "react-hook-form";

type LoginFormFields = {
  username: string;
  password: string;
};
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormFields>();

  const onsubmit = async (data: LoginFormFields) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };

  return (
    <Card className="w-full max-w-md sm:max-w-lg p-8 sm:p-10 md:p-12 rounded-2xl shadow-2xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">Login</h1>
      <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-6">
        <Formfields
          label="username"
          type="string"
          placeholder="Enter your username"
          register={register("username", { required: "Enter your username" })}
        />
        <Formfields
          label="password"
          type="string"
          placeholder="Enter password"
          register={register("password", { required: "Password is required" })}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-slate-900 text-white font-bold py-2 px-4 mt-4 rounded-md hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed "
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </Card>
  );
}
