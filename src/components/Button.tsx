export default function Button({
    text,
    type = "button"
}: {
    text: string,
    type?: "button" | "submit",
}) {
    return (
        <button type={type} className="px-4 py-2 text-white bg-blue-500 rounded cursor-pointer">{text}</button>
    )
}