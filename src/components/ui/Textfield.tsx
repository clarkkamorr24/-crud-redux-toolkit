type TextfieldProps = {
  placeholder: string;
  name: string;
};

export default function Textfield({ placeholder, name }: TextfieldProps) {
  return (
    <input
      placeholder={placeholder}
      name={name}
      className="rounded-lg border-2 border-[#EEEEEE] p-1 text-[#222831]"
    />
  );
}
