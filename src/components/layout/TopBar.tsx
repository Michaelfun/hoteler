import { MapPin, Mail } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden md:flex justify-between items-center py-3 px-8 bg-background border-b border-background-alt text-xs text-foreground-muted font-sans relative z-50">
      <div className="flex items-center gap-6">
        <a href="mailto:needhelp@company.com" className="flex items-center gap-2 hover:text-accent transition-colors">
          <Mail className="w-3 h-3 text-accent" />
          needhelp@company.com
        </a>
        <span className="flex items-center gap-2">
          <MapPin className="w-3 h-3 text-accent" />
          123 Serengeti Road, Arusha, Tanzania
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors font-medium">FB</a>
        <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors font-medium">TW</a>
        <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors font-medium">IG</a>
      </div>
    </div>
  );
}
