import { ChangeEventHandler } from "react";

export default function Input({
  name,
  type = "text",
  placeholder = "",
  value = "",
  onChange,
}: {
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
    />
  );
}
