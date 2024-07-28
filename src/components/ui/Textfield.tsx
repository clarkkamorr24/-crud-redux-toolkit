type TextfieldProps = {
  placeholder: string;
  name: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Textfield({
  placeholder,
  name,
  value,
  onChange,
}: TextfieldProps) {
  return (
    <input
      placeholder={placeholder}
      name={name}
      className="rounded-lg border-2 border-[#EEEEEE] p-1 text-[#222831]"
      value={value}
      onChange={onChange}
    />
  );
}
