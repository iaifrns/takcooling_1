export const CustomizedInput = ({
  type,
  placeholder,
  onChange,
  value,
}: {
  type: React.HTMLInputTypeAttribute | undefined;
  placeholder: string;
  onChange: (e: string) => void;
  value: string;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className="w-full p-3 text-[16px] focus:outline-none border border-gray-400"
      onChange={(e) => onChange(e.target.value)}
      required
    />
  );
};
