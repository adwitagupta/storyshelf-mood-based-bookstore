import { Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function FloatingAssistant() {
  return (
    <Link
      to="/moodfinder"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[var(--gradient-warm)] px-4 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
    >
      <span className="relative grid h-5 w-5 place-items-center">
        <Sparkles className="h-5 w-5" />
        <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
      </span>
      <span className="hidden sm:inline">Ask the Mood Finder</span>
    </Link>
  );
}
