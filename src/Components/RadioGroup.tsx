interface RadioGroupProps {
  label: string;
  options: string[];
  register: ReturnType<any>;
  error?: string;
}

export default function RadioGroup({
  label,
  options,
  register,
  error,
}: RadioGroupProps) {
  return (
    <div className="space-y-1">
      <label className="font-medium">{label}</label>

      <div className="flex gap-4">
        {options.map((o) => (
          <label key={o} className="flex items-center gap-2">
            <input type="radio" value={o} {...register} />
            {o}
          </label>
        ))}
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
