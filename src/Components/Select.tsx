interface SelectProps {
  label: string;
  error?: string;
  register: ReturnType<any>;
  options: string[];
}

export default function Select({
  label,
  error,
  register,
  options,
}: SelectProps) {
  return (
    <div className="space-y-1">
      <label className="font-medium">{label}</label>

      <select
        {...register}
        className="w-full border rounded-lg px-3 py-2 outline-none bg-white focus:ring focus:ring-blue-300"
      >
        <option value="">--- Select ---</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
