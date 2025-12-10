"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/Components/Input";
import Select from "@/Components/Select";
import RadioGroup from "@/Components/RadioGroup";
import Checkbox from "@/Components/Checkbox";
import { countries, countryDetails } from "@/data/countries";

interface FormValues {
  fullname: string;
  email: string;
  phone: string;
  password: string;
  province: string;
  gender: string;
  tnc: boolean;
  country: string;
  countryInfo: string; 
}

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const selectedCountry = watch("country");
  const password = watch("password", "");
  
  const getStrength = (value: string) => {
    if (!value) return "";
    const hasUpper = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSymbol = /[^A-Za-z0-9]/.test(value);

    if (value.length >= 8 && hasUpper && hasNumber && hasSymbol) return "Strong";
    if (value.length >= 6 && (hasUpper || hasNumber)) return "Medium";
    return "Weak";
  };

  const strength = getStrength(password);

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Create New Account
        </h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            register={register("fullname", {
              required: "Full name is required",
            })}
            error={errors.fullname?.message}
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            register={register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
            error={errors.email?.message}
          />

          <Input
            label="Phone Number"
            placeholder="Enter phone number"
            register={register("phone", {
              required: "Phone number is required",
              minLength: { value: 10, message: "Minimum 10 digits" },
            })}
            error={errors.phone?.message}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Enter password"
            register={register("password", {
              required: "Password is required",
              validate: (value) =>
                value.length < 6
                  ? "Password must be at least 6 characters"
                  : !/[A-Z]/.test(value)
                  ? "Password must have at least one uppercase letter"
                  : true,
            })}
            error={errors.password?.message}
          />

          {/* Password Strength */}
          {password && (
            <div className="text-sm mt-1">
              {strength === "Weak" && (
                <p className="text-red-500 font-semibold">Weak</p>
              )}
              {strength === "Medium" && (
                <p className="text-yellow-500 font-semibold">Medium</p>
              )}
              {strength === "Strong" && (
                <p className="text-green-600 font-semibold">Strong</p>
              )}
            </div>
          )}

          {/* Select Country */}
          <Select
            label="Select Country"
            register={register("country", {
              required: "Country is required",
            })}
            error={errors.country?.message}
            options={countries}
          />

          {/* Dynamic field based on selected Country */}
          {selectedCountry && countryDetails[selectedCountry] && (
            <Select
              label={countryDetails[selectedCountry].label}
              register={register("countryInfo", {
                required: `${countryDetails[selectedCountry].label} is required`,
              })}
              error={errors.countryInfo?.message}
              options={countryDetails[selectedCountry].options}
            />
          )}

          {/* Gender */}
          <RadioGroup
            label="Choose Gender"
            register={register("gender", {
              required: "Gender is required",
            })}
            error={errors.gender?.message}
            options={["male", "female", "other"]}
          />

          {/* Terms Checkbox */}
          <Checkbox
            label="I agree to all terms & conditions"
            register={register("tnc", {
              required: "You must accept the terms",
            })}
            error={errors.tnc?.message}
          />

          <button
            type="submit"
            disabled={!isValid}
            className={`w-full py-2 rounded-lg text-white transition ${
              isValid
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
