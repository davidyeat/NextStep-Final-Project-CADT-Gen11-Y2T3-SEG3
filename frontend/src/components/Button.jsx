import { ArrowRight } from "lucide-react";

export default function Button({ children, variant = "primary" }) {
    const baseClasses = "px-6 py-3 rounded-full font-medium transition-colors";
    const variantClasses = {
        primary: "flex items-center gap-2 cursor-pointer bg-blue-500 text-white hover:bg-blue-600",
        secondary: "cursor-pointer border border-blue-500 text-blue-500 hover:bg-blue-100"
    };

    return (
        <button
            className={`${baseClasses} ${variantClasses[variant]}`}
        >
            {children}
            {variant === "primary" && <ArrowRight className="h-4 w-4" />}
        </button>
    );
}