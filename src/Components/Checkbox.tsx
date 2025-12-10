interface CheckboxProps {
  label: string;
  register: ReturnType<any>;
  error?: string;
}

export default function Checkbox({ label, register, error }: CheckboxProps) {
  return (
    <div className="space-y-1">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...register} />
        {label}
      </label>

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
