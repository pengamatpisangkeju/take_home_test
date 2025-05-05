import { ChangeEventHandler } from "react";

export default function Input({
  name,
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  required = false,
}: {
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
    />
  );
}
