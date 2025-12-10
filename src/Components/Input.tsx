interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
  register: ReturnType<any>;
}

export default function Input({
  label,
  type = "text",
  placeholder,
  error,
  register,
}: InputProps) {
  return (
    <div className="space-y-1">
      <label className="font-medium">{label}</label>

      <input
        type={type}
        {...register}
        placeholder={placeholder}
        className="w-full border rounded-lg px-3 py-2 outline-none focus:ring focus:ring-blue-300"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
