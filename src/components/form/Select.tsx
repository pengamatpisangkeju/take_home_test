import { ChangeEventHandler } from "react";

export type Option = {
  text: string;
  value: any;
};

export default function Select({
  name,
  options,
  placeholder = "Pilih opsi",
  value,
  onChange,
  required = false,
}: {
  name: string;
  options: Option[];
  placeholder?: string;
  value?: any;
  onChange?: ChangeEventHandler;
  required?: boolean;
}) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded focus:outline-none focus:border-gray-600"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
