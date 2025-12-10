import { useState } from "react";
import { useForm } from "react-hook-form";

export default function BasicInfoForm() {
    const {
        register, handleSubmit, formState: { errors },
    } = useForm({
        defaultValues: {
        fullName: "",
        age: "",
        email: "",
        city: "",
        hobbies: [],
        bio: "",
        },
    });

const [submittedData, setSubmittedData] = useState(null);

const onSubmit = (data: any) => {
    console.log("Submitted:", data)
    setSubmittedData(data);
};

    return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-emerald-100 via-white to-purple-200">
        <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-lg">

            <h1 className="text-2xl font-bold mb-6 text-center">
                Basic Information Form
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <input {...register("fullName", { required: "Name is required" })} placeholder="Full Name"
            className="w-full border p-2 rounded"
            />
            <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
            <input
            {...register("age", { required: "Age is required" })}
            placeholder="Age"
            type="number" className="w-full border rounded-md p-2"
            />
            <p className="text-red-500 text-sm">{errors.age?.message}</p>

            <input
            {...register("email", {required: "Email is required", pattern: {value: /\S+@\S+\.\S+/, message: "Invalid email",
            },})} placeholder="Email" className="w-full border p-2 rounded"/>
            <p className="text-red-500 text-sm">{errors.email?.message}</p>

            <input
            {...register("city", { required: "City is required" })} placeholder="Location" className="w-full border p-2 rounded"/>
            <p className="text-red-500 text-sm">{errors.city?.message}</p>

            <p className="font-medium mb-1">Hobbies</p>
        <div  >
            <label className="mx-2">
            <input {...register("hobbies")} type="checkbox" value="Reading"/> Reading
            </label >
            <label className="mx-2">
            <input {...register("hobbies")} type="checkbox" value="Music" /> Music
            </label>
            <label className="mx-2">
            <input {...register("hobbies")} type="checkbox" value="Travel" /> Travel
            </label >
            <label className="mx-2">
            <input {...register("hobbies")} type="checkbox" value="Cooking" /> Cooking
            </label>
        </div>

        <textarea
        {...register("bio")} placeholder="Write a short bio..."
        className="w-full border p-2 rounded h-24" />

        <button type="submit" className="w-full bg-[#A6D7A8] hover:bg-[#8CCB90] text-white p-2 rounded"
        >
        Submit
        </button>

        {submittedData && (
        <pre className="w-full bg-[#A6D7A8] hover:bg-[#8CCB90] text-[#2E3B2E] font-semibold py-2 rounded-md">{JSON.stringify(submittedData, null, 2)}
        </pre>
        )}
            </form>
        </div>
    </div>

    );
}
