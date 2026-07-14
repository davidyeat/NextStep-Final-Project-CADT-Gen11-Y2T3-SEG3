import { Search } from "lucide-react";

export default function SearchBar({ placeholder = "Search" }) {
    return (
        <label className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-500 shadow-sm">
            <Search className="h-4 w-4" />
            <input
                type="text"
                placeholder={placeholder}
                className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
        </label>
    );
}
