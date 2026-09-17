import type { NavBarProps, Page } from "../types";

const links: { page: Page; label: string; icon: string }[] = [
  { page: "home", label: "Home", icon: "⌂" },
  { page: "map", label: "Explore", icon: "🗺" },
  { page: "lists", label: "Lists", icon: "✦" },
  { page: "memories", label: "Us", icon: "♡" },
];

export default function NavBar({ current, onNavigate, onLogout }: NavBarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-6 border-b border-[#DDD0C4] bg-[#FFF9F5]/90 backdrop-blur-md">
      <button
        onClick={() => onNavigate("home")}
        className="font-display text-lg text-[#C4603A] tracking-tight"
        style={{ fontFamily: "'Fraunces', Georgia, serif" }}
      >
        VikiTripedia ♡
      </button>

      <div className="flex items-center gap-1">
        {links.map(({ page, label, icon }) => (
          <button
            key={page}
            onClick={() => onNavigate(page)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              current === page
                ? "bg-[#C4603A] text-[#FFF9F5]"
                : "text-[#5C3520] hover:bg-[#F0E6DC]"
            }`}
          >
            <span className="mr-1.5">{icon}</span>{label}
          </button>
        ))}
        <button
          onClick={onLogout}
          className="ml-3 px-3 py-1.5 rounded-full text-xs font-medium text-[#8A6550] hover:bg-[#F0E6DC] transition-all"
        >
          {"Kilépés :("}
        </button>
      </div>
    </nav>
  );
}