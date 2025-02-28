import React from "react";
import { Heart, Loader2 } from "lucide-react"; // Using shadcn icons
import { cn } from "@/lib/utils"; // Utility for class merging in shadcn

const Button = ({ onClick, liked, loading, error }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <button
        className={cn(
          "flex items-center gap-2 border-2 px-4 py-2 rounded-lg transition-all",
          liked
            ? "bg-red-600 text-white border-red-600"
            : "bg-white text-gray-800 border-gray-400 hover:border-red-600 hover:text-red-600"
        )}
        onClick={onClick}
        disabled={loading} // Prevent multiple clicks while loading
      >
        {loading ? <Loader2 className="animate-spin" /> : liked ? <Heart fill="white" /> : <Heart />}
        <span>{liked ? "Liked" : "Like"}</span>
      </button>

      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>
  );
};

export default Button;
