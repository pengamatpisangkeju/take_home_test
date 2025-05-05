export default function FormField({
  children,
  label,
  error,
}: {
  children: React.ReactNode;
  label: string;
  error?: string;
}) {
  return (
    <div>
      <label>{label}</label>
      {children}
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
