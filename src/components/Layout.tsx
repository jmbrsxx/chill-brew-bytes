import { Link, Outlet } from "@tanstack/react-router";
import { Coffee, Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/menu", label: "Menu" },
  { to: "/contact", label: "Contact" },
] as const;

export function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2 text-primary">
            <Coffee className="h-6 w-6" />
            <span className="font-display text-xl font-bold">Maple & Bean</span>
          </Link>
          <nav className="hidden gap-8 md:flex">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-primary"
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
              <span className="block h-0.5 w-6 bg-current" />
            </div>
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 md:hidden">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-primary"
                activeProps={{ className: "text-primary bg-muted" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Coffee className="h-5 w-5" />
              <span className="font-display text-lg font-bold">Maple & Bean</span>
            </div>
            <p className="mt-3 text-sm opacity-80">
              A cozy neighborhood café — warm coffee, fresh food, friendly faces.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Visit</h4>
            <p className="mt-3 text-sm opacity-80">
              123 Oak Street<br />
              Downtown, City 10001<br />
              Open daily · 7am – 8pm
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider">Follow</h4>
            <div className="mt-3 flex gap-4">
              <a href="#" aria-label="Instagram" className="opacity-80 transition hover:opacity-100"><Instagram className="h-5 w-5" /></a>
              <a href="#" aria-label="Facebook" className="opacity-80 transition hover:opacity-100"><Facebook className="h-5 w-5" /></a>
              <a href="#" aria-label="Twitter" className="opacity-80 transition hover:opacity-100"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 py-4 text-center text-xs opacity-70">
          © {new Date().getFullYear()} Maple & Bean Café. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
