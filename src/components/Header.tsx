"use client";

type Props = {
  scrollToSection: (id: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
};

export function Header({
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen,
}: Props) {
  const links = [
    { label: "Home", id: "home" },
    { label: "Story", id: "story" },
    { label: "Brands", id: "brands" },
    { label: "Solutions", id: "solutions" },
    { label: "Gallery", id: "gallery" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/35 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <img
            src="/logo/abc-spacery-logo.svg"
            className="h-9 cursor-pointer"
            onClick={() => scrollToSection("home")}
          />

          <nav className="hidden lg:flex gap-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollToSection(l.id)}
                className="px-4 py-2 text-sm rounded-full hover:bg-neutral-100"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
