import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/prx-research-logo.webp";


const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "FAQs", to: "/faq" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-8 w-full z-[1001] bg-card/95 backdrop-blur-md shadow-sm border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="font-heading text-xl font-bold text-primary">
            <img 
              src={logo} 
              alt="PRX Research Logo" 
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? "text-primary bg-primary/10"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="mailto:admin@prxresearch.com"
            className="hidden lg:inline-flex gradient-orange text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Appointment
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/50 z-[1000] lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-72 bg-card z-[1003] shadow-2xl p-6 flex flex-col gap-2 lg:hidden"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="self-end p-2 text-foreground"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname === link.to
                      ? "text-primary bg-primary/10"
                      : "text-foreground/70 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="mailto:admin@prxresearch.com"
                className="gradient-orange text-accent-foreground px-5 py-3 rounded-full text-sm font-semibold text-center mt-4"
              >
                Appointment
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
