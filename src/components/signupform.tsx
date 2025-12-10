"use client";
import { countries } from "@/components/countries";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { InferType, object, ref, string } from "yup";


const signSchema = object({
    firstName: string().required("First name is required"),
    lastName: string().required("Last name is required"),
    email: string().email("Invalid email").required("Email is required"),
    password: string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    confirmPassword: string()
        .oneOf([ref("password")], "Passwords do not match")
        .required("Confirm your password"),
    country: string().required("Country is required"),

    city: string()
        .default("")
        .when("country", {
        is: (val: string) => val !== "",
        then: s => s.required("City is required"),
        }),

    address: string()
        .default("")
        .when("country", {
        is: (val: string) => val !== "",
        then: s => s.required("Address is required"),
        }),

    ward: string()
        .default("")
        .when("country", {
        is: (val: string) => val !== "",
        then: s => s.required("Ward number is required"),
        }),
    });

    type SignupFormType = InferType<typeof signSchema>;

    export default function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<SignupFormType>({
        resolver: yupResolver(signSchema),
        defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        city: "",
        address: "",
        ward: "",
        },
    });

    const countrySelected = watch("country");

    const onSubmit = (data: SignupFormType) => {
        console.log("Signup Data:", data);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-emerald-100 via-white to-purple-200">
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-4"
        >
            <h1 className="text-2xl font-bold text-center mb-4">Sign Up</h1>

        <div className="flex gap-2">
        <div className="flex flex-col w-full">
            <label className="text-sm font-medium">First Name</label>
            <input
            {...register("firstName")}
            placeholder="First name"
            className="w-full border rounded-md p-2"
            />
            <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
        </div>

        <div className="flex flex-col w-full">
            <label className="text-sm font-medium">Last Name</label>
            <input
            {...register("lastName")}
            placeholder="Last name"
            className="w-full border rounded-md p-2"
            />
            <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
        </div>
        </div>

        <label className="text-sm font-medium">Email</label>
        <input
        {...register("email")}
        placeholder="Email"
        type="email"
        className="w-full border rounded-md p-2"
        />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>

        <label className="text-sm font-medium">New Password</label>
        <input
        {...register("password")}
        placeholder="Password"
        type="password"
        className="w-full border rounded-md p-2"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>

        <label className="text-sm font-medium">Confirm Password</label>
        <input
        {...register("confirmPassword")}
        placeholder="Confirm Password"
        type="password"
        className="w-full border rounded-md p-2"
    />
    <p className="text-red-500 text-sm">{errors.confirmPassword?.message}</p>

        <label className="text-sm font-medium">Country</label>
        <select {...register("country")} className="w-full border rounded-md p-2">
            <option value="">Select country...</option>
            {countries.map((c) => (
            <option key={c} value={c.toLowerCase()}>
            {c}
            </option>
        ))}
        </select>

        <p className="text-red-500 text-sm">{errors.country?.message}</p>

        {countrySelected && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
 
        <div className="flex flex-col">
        <label className="text-sm font-medium">City</label>
        <input
            {...register("city")}
            placeholder="City"
            className="w-full border rounded-md p-2"
        />
        <p className="text-red-500 text-sm">{errors.city?.message}</p>
        </div>

        <div className="flex flex-col">
        <label className="text-sm font-medium">Address</label>
        <input
            {...register("address")}
            placeholder="Address"
            className="w-full border rounded-md p-2"
        />
        <p className="text-red-500 text-sm">{errors.address?.message}</p>
        </div>

        <div className="flex flex-col">
        <label className="text-sm font-medium">Ward No.</label>
        <input
            {...register("ward")}
            placeholder="Ward Number"
            className="w-full border rounded-md p-2"
        />
        <p className="text-red-500 text-sm">{errors.ward?.message}</p>
        </div>
    </div>
    )}

            <button
            type="submit"
            className="w-full bg-[#A6D7A8] hover:bg-[#8CCB90] text-[#2E3B2E] font-semibold py-2 rounded-md"
            >
            Sign Up
            </button>
        </form>
        </div>
    );
}
