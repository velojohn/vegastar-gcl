import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Why Google?", path: "/why-google" },
  { label: "What is Cloudflare?", path: "/cloudflare" },
  { label: "How the Web Works", path: "/how-web-works" },
  { label: "Resources", path: "/resources" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-extrabold text-lg text-foreground select-none shrink-0">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Globe className="w-4 h-4 text-primary-foreground" />
            </div>
            <span>WebInsight</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 font-bold text-base mb-3">
                <Globe className="w-4 h-4 text-primary" />
                WebInsight
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                An independent educational resource explaining how the web's most important technologies work.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Learn</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {navLinks.map((l) => (
                  <li key={l.path}><Link to={l.path} className="hover:text-primary transition-colors">{l.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Topics</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["Search Engines", "Internet Security", "DNS & CDN", "Web Protocols", "Cybersecurity Basics"].map((t) => (
                  <li key={t}><span className="hover:text-primary cursor-default transition-colors">{t}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-3">Disclaimer</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                This is an independent informational site. We are not affiliated with Google, Cloudflare, or any other company mentioned.
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} WebInsight — Independent Educational Resource</p>
            <p>Not affiliated with Google, Cloudflare, or any mentioned brand.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
