"use client";

import Formfields from "@/components/form/Formfields";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";

type SignupFormFields = {
  name: string;
  email: string;
  phone: string;
  password: string;
  username: string;
  confirmPassword: string;
  dateOfBirth?: Date;
  acceptTerms: boolean;
  gender: string;
};
function SignupForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormFields>();

  const onsubmit = async (data: SignupFormFields) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
  };
  const password = watch("password", "");
  return (
    <Card className="w-full max-w-md sm:max-w-lg p-8 sm:p-10 md:p-12 rounded-2xl shadow-2xl">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Signup
      </h1>
      <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col gap-6">
        <Formfields
          label="Name"
          type="text"
          placeholder="Enter your name"
          register={register("name", { required: "Name is required" })}
          error={errors.name}
        />
        <Formfields
          label="Email"
          type="text"
          placeholder="example@email.com"
          register={register("email", { required: "Email is required" })}
          error={errors.email}
        />
        <Formfields
          label="Phone Number"
          type="string"
          placeholder="Enter your phone number"
          register={register("phone", { required: "Phone number is required" })}
          error={errors.phone}
        />
        <div className="flex flex-col md:flex-row gap-4 md:items-end justify-center">
          <Formfields
            label="Date of Birth"
            type="date"
            placeholder="mm/dd/yyyy"
            register={register("dateOfBirth", {
              required: "Date of Birth is required",
            })}
            error={errors.dateOfBirth}
          />

          <div className="flex flex-col gap-3">
            <label className="text-sm font-semibold text-gray-700">
              Select Gender
            </label>
            <select
              {...register("gender", { required: "Please Select gender" })}
              className="bg-blue-300/30 border border-gray-500 focus:border-blue-500
    focus:ring-4 focus:ring-blue-300/40 focus:outline-none rounded-md px-5 py-2 text-sm"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <span className="text-red-500 text-sm">
                {errors.gender.message}
              </span>
            )}
          </div>
        </div>
        <Formfields
          label="username"
          type="text"
          placeholder="Enter your username"
          register={register("username", { required: "Username is required" })}
          error={errors.username}
        />
        <Formfields
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register("password", { required: "Password is required" })}
          error={errors.password}
        />
        <Formfields
          label="Confirm Password"
          type="password"
          placeholder="Re-enter your password"
          register={register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value == password || "Password does not match",
          })}
          error={errors.confirmPassword}
        />
        <label className="flex items-center gap-2 flex-col">
          <input
            type="checkbox"
            {...register("acceptTerms", {
              required: "Please accept the terms and conditions",
            })}
          ></input>
          {errors.acceptTerms && (
            <span className="text-red-500">{errors.acceptTerms.message}</span>
          )}
          <span>I accept the terms and conditions</span>
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-slate-900 text-white font-bold py-2 px-4 mt-4 rounded-md hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed "
        >
          {isSubmitting ? "Signing up..." : "SignUP"}
        </button>
      </form>
    </Card>
  );
}

export default SignupForm;
