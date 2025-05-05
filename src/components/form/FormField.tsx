export default function FormField({
  children,
  label,
  error,
  required = false,
}: {
  children: React.ReactNode;
  label: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label>{label} {required && <span className="text-red-500">*</span>}</label>
      {children}
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
}
