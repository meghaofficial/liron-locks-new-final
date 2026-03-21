interface InputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
}: InputProps) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="peer w-full px-4 pt-5 pb-2 bg-transparent border border-gray-300 rounded-xl outline-none focus:border-[#123458]"
      />
      <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all 
        peer-placeholder-shown:top-4 
        peer-placeholder-shown:text-base 
        peer-focus:top-2 
        peer-focus:text-sm">
        {label}
      </label>
    </div>
  );
}