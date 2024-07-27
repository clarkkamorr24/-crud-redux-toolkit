type ButtonProps = {
  type: "submit" | "button" | "reset";
  children: React.ReactNode;
};
export default function Button({ type, children }: ButtonProps) {
  return (
    <button type={type} className="rounded-lg bg-[#00ADB5] p-2">
      {children}
    </button>
  );
}
