import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export default function Logo({ onClick }) {
  return (
    <Link to="/" onClick={onClick} className="flex items-center gap-2">
      <GraduationCap className="h-6 w-6 text-blue-600" />
      <span className="text-2xl font-bold text-blue-600">NextStep</span>
    </Link>
  );
}
