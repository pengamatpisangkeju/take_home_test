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
  disabled = false,
}: {
  name: string;
  options: Option[];
  placeholder?: string;
  value?: any;
  onChange?: ChangeEventHandler;
  disabled?: boolean;
}) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className="block w-full px-2 py-1 mt-1 border border-gray-300 rounded focus:outline-none focus:border-gray-600 disabled:bg-gray-100"
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
