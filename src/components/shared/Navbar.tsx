
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Me", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Contacts", href: "/contacts" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path
      ? "text-indigo-400 underline underline-offset-4"
      : "text-muted-foreground hover:text-indigo-400";

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-gradient-to-r from-zinc-900/80 via-black/70 to-zinc-900/80 border-b border-indigo-500 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-indigo-400 italic tracking-wide hover:text-indigo-500 transition-colors">
          Jakya Afrin Bristi
        </Link>

        <nav className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative group ${isActive(item.href)} transition-colors`}
            >
              <span>{item.label}</span>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2 text-sm" asChild>
            <a  download>
              <Download className="w-4 h-4" />
              Resume
            </a>
          </Button>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-muted-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`${isActive(item.href)} block text-sm font-medium`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
