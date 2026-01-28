"use client";

import Image from "next/image";

type HeaderProps = {
    onNavigate: (id: string) => void;
};

export function Header({ onNavigate }: HeaderProps) {
    const navItems = [
        { id: "home", label: "Home" },
        { id: "story", label: "Our Story" },
        { id: "brands", label: "Brands" },
        { id: "solutions", label: "Solutions" },
        { id: "gallery", label: "Gallery" },
        { id: "contact", label: "Contact Us" },
    ] as const;

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-sm border-b"
            style={{
                backgroundColor: "rgba(250, 248, 243, 0.95)",
                borderColor: "#E8E0D5",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => onNavigate("home")}
                    >
                        <Image
                            src="/logo/abc-spacery-logo.svg"
                            alt="ABC Spacery Logo"
                            width={200}
                            height={40}
                            className="h-8 md:h-10 w-auto object-contain"
                        />
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => onNavigate(item.id)}
                                className="text-sm font-medium transition-colors"
                                style={{ color: "#4A5568" }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "#8B6F47")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "#4A5568")
                                }
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    {/* Mobile Menu Button (visual only for now) */}
                    <button className="md:hidden" style={{ color: "#4A5568" }}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}

