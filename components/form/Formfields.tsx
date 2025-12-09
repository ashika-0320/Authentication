"use client";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  type?: string;
  placeholder?: string;
  error?: FieldError;
  register?: UseFormRegisterReturn;
};
export default function Formfields({
  label,
  type = "text",
  placeholder,
  register,
  error,
}: Props) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="capitalize text-sm font-semibold">{label}</label>
      <input
        className="bg-blue-300/30 border border-gray-500 focus:border-blue-500
    focus:ring-4 focus:ring-blue-300/40 focus:outline-none rounded-md px-5 py-2 "
        {...register}
        type={type}
        placeholder={placeholder}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
}
