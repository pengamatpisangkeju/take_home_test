export default function Button({
  text,
  type = "button",
  className = "",
  disabled = false,
}: {
  text: string;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${className} px-4 py-2 text-white bg-blue-500 rounded cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed hover:opacity-80`}
    >
      {text}
    </button>
  );
}
