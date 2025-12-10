"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, useFieldArray } from "react-hook-form";
import { array, number, object, string } from "yup";

type RegType = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    age: number;
    dob: string;
    gender: string;
    education: string;
    country: string;
    interests: string[];
    bio: string;
    skills: string[];
};

const regSchema = object({
    firstName: string().required("First name is required"),
    lastName: string().required("Last name is required"),
    email: string().email("Invalid email").required("Email is required"),
    phone: string().required("Phone is required"),
    age: number().typeError("Age must be a number").required("Age is required"),
    dob: string().required("Date of birth is required"),
    gender: string().required("Select gender"),
    education: string().required("Select education"),
    country: string().required("Select country"),

    interests: array(string().required("Required"))
        .min(1, "Pick at least one interest")
        .required(),

    bio: string().required("Bio is required"),

    skills: array(string().required("Skill cannot be empty"))
        .min(1, "Add at least one skill")
        .required(),
});

export default function Register() {
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(regSchema),
        defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: 0,
        dob: "",
        gender: "",
        education: "",
        country: "",
        interests: [],
        bio: "",
        skills: [""],
        },
    } as const);


    const { fields, append, remove, update } =
        useFieldArray({
        control: control as any,
        name: "skills",
        });

    const onSubmit = (data: RegType) => {
        console.log("Submitted:", data);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-emerald-100 via-white to-purple-200">
        <div className="bg-white max-w-3xl w-full rounded-xl shadow-sm border p-10 space-y-10">
            <h1 className="text-3xl font-semibold text-center">Registration Form</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <span className="flex flex-col">
                <label className="text-sm font-medium">First Name</label>
                <input
                    {...register("firstName")}
                    className="mt-1 border-b border-gray-300 focus:border-purple-600 outline-none py-2"
                    placeholder="First name"
                />
                <p className="text-red-500 text-sm">{errors.firstName?.message}</p>
                </span>

                <span className="flex flex-col">
                <label className="text-sm font-medium">Last Name</label>
                <input
                    {...register("lastName")}
                    className="mt-1 border-b border-gray-300 focus:border-purple-600 outline-none py-2"
                    placeholder="Last name"
                />
                <p className="text-red-500 text-sm">{errors.lastName?.message}</p>
                </span>

                <span className="flex flex-col">
                <label className="text-sm font-medium">Email</label>
                <input
                    {...register("email")}
                    className="mt-1 border-b border-gray-300 focus:border-purple-600 outline-none py-2"
                    placeholder="yo@gmail.com"
                    type="email"
                />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
                </span>

                <span className="flex flex-col">
                <label className="text-sm font-medium">Phone Number</label>
                <input
                    {...register("phone")}
                    className="mt-1 border-b border-gray-300 focus:border-purple-600 outline-none py-2"
                    placeholder="Phone"
                    type="tel"
                />
                <p className="text-red-500 text-sm">{errors.phone?.message}</p>
                </span>

                <span className="flex flex-col">
                <label className="text-sm font-medium">Date of Birth</label>
                <input
                    {...register("dob")}
                    className="mt-1 border-b border-gray-300 focus:border-purple-600 outline-none py-2"
                    type="date"
                />
                <p className="text-red-500 text-sm">{errors.dob?.message}</p>
                </span>

                <span className="flex flex-col">
                <label className="text-sm font-medium">Age</label>
                <input
                    {...register("age")}
                    className="mt-1 border-b border-gray-300 focus:border-purple-600 outline-none py-2"
                    placeholder="Age"
                    type="number"
                />
                <p className="text-red-500 text-sm">{errors.age?.message}</p>
                </span>

                <span className="flex flex-col">
                <label className="text-sm font-medium">Education Level</label>
                <select
                    {...register("education")}
                    className="mt-1 border-b border-gray-300 focus:border-purple-600 outline-none py-2 bg-transparent"
                >
                    <option value="">Select...</option>
                    <option value="highschool">High School</option>
                    <option value="bachelor">Bachelor</option>
                    <option value="masters">Masters</option>
                    <option value="phd">PhD</option>
                </select>
                <p className="text-red-500 text-sm">{errors.education?.message}</p>
                </span>

                <span className="flex flex-col">
                <label className="text-sm font-medium">Gender</label>

                <label className="flex items-center gap-2">
                    <input {...register("gender")} type="radio" value="male" /> Male
                </label>

                <label className="flex items-center gap-2">
                    <input {...register("gender")} type="radio" value="female" /> Female
                </label>

                <label className="flex items-center gap-2">
                    <input {...register("gender")} type="radio" value="other" /> Other
                </label>

                <p className="text-red-500 text-sm">{errors.gender?.message}</p>
                </span>

                <span className="flex flex-col">
                <label className="text-sm font-medium">Country</label>
                <select
                    {...register("country")}
                    className="mt-1 border-b border-gray-300 focus:border-purple-600 outline-none py-2 bg-transparent"
                >
                    <option value="">Select...</option>
                    <option value="nepal">Nepal</option>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                </select>
                <p className="text-red-500 text-sm">{errors.country?.message}</p>
                </span>

                <span className="flex flex-col">
                <label className="text-sm font-medium">Interests</label>

                <label className="flex items-center gap-2">
                    <input {...register("interests")} type="checkbox" value="coding" />
                    Coding
                </label>

                <label className="flex items-center gap-2">
                    <input {...register("interests")} type="checkbox" value="music" />
                    Music
                </label>

                <label className="flex items-center gap-2">
                    <input {...register("interests")} type="checkbox" value="sports" />
                    Sports
                </label>

                <p className="text-red-500 text-sm">{errors.interests?.message}</p>
                </span>

                <span className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium">Short Bio</label>
                <textarea
                    {...register("bio")}
                    className="mt-1 border-b border-gray-300 focus:border-purple-600 outline-none py-2 h-24 resize-none"
                    placeholder="Tell us about yourself..."
                />
                <p className="text-red-500 text-sm">{errors.bio?.message}</p>
                </span>

                <span className="flex flex-col md:col-span-2">
                <label className="text-sm font-medium">Skills</label>

                {fields.map((field, index) => {
                    const currentSkill = watch(`skills.${index}`);

                    return (
                    <div key={field.id} className="flex gap-3 items-center mt-2">
                        <input
                        {...register(`skills.${index}` as const)}
                        className="w-full border-b border-gray-300 focus:border-purple-600 outline-none py-2"
                        placeholder={`Skill ${index + 1}`}
                        />

                        <button
                        type="button"
                        onClick={() => {
                            const newSkill = prompt("Edit skill:", currentSkill);
                            if (newSkill !== null) update(index, newSkill);
                        }}
                        className="text-blue-600 hover:underline text-sm"
                        >
                        Edit
                        </button>

                        <button
                        type="button"
                        onClick={() => remove(index)}
                        className="text-red-600 hover:underline text-sm"
                        >
                        Delete
                        </button>
                    </div>
                    );
                })}

                <button
                    type="button"
                    onClick={() => append("")}
                    className="mt-3 text-sm text-green-600 hover:underline"
                >
                    + Add Skill
                </button>

                <p className="text-red-500 text-sm">{errors.skills?.message}</p>
                </span>
            </div>

            <div className="text-center">
                <button
                type="submit"
                className="w-full bg-[#A6D7A8] hover:bg-[#8CCB90] text-white p-3 rounded-lg font-semibold"
                >
                Submit Form
                </button>
            </div>

            </form>
        </div>
        </div>
    );
}
