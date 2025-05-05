import { ChangeEventHandler } from "react";

export default function Textarea({
  name,
  rows = 4,
  value = "",
  onChange,
  required = false,
}: {
  name: string;
  rows?: number;
  value?: string;
  onChange: ChangeEventHandler;
  required?: boolean;
}) {
  return (
    <textarea
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
      required={required}
      className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
    ></textarea>
  );
}
