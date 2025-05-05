import { ChangeEventHandler } from "react";

export default function Textarea({
  name,
  rows = 4,
  value = "",
  onChange,
}: {
  name: string;
  rows?: number;
  value?: string;
  onChange: ChangeEventHandler;
}) {
  return (
    <textarea
      name={name}
      rows={rows}
      value={value}
      onChange={onChange}
      className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
    ></textarea>
  );
}
