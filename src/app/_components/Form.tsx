"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { formSchema } from "@/schema/formSchema";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type IFormInputData = z.infer<typeof formSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<IFormInputData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<IFormInputData> = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      //   throw new Error();
      console.log(data);
    } catch (err) {
      setError("root", {
        message: "Email already exits",
      });
    }
  };

  return (
    <div className="border-2 border-dashed border-blue-200 bg-blue-100 py-4 px-6 rounded-lg">
      <p className="mb-3 text-xl text-center font-semibold text-gray-800 border-b-2">
        Registration Form
      </p>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-1 mt-2">
            <input
              type="text"
              placeholder="FullName *"
              className="border-2 px-2 py-1 rounded-md "
              {...register("fullname", {
                required: "Fullname is required",
              })}
            />
            {errors.fullname && (
              <p className="text-red-500">{errors.fullname.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <input
              type="email"
              placeholder="Email *"
              className="border-2 px-2 py-1 rounded-md "
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <input
              type="password"
              placeholder="Password *"
              className="border-2 px-2 py-1 rounded-md "
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1 mt-2">
            <input
              placeholder="Phone Number *"
              type="number"
              className="border-2 px-2 py-1 rounded-md "
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
          <div className="flex items-center gap-2 mt-2">
            <label>Gender *</label>
            <select
              className="border-2 px-2 py-1 rounded-md text-center"
              {...register("gender", { required: true })}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mt-4 ">
            <button
              className={`w-full border-2 rounded-lg p-2 bg-blue-500 border-blue-500 text-white ${
                isSubmitting ? "cursor-progress" : "cursor-pointer"
              }`}
              type="submit"
              disabled={isSubmitting ? true : false}
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </button>
          </div>
          {errors.root && <p className="text-red-500">{errors.root.message}</p>}
        </form>
      </section>
    </div>
  );
};

export default Form;
