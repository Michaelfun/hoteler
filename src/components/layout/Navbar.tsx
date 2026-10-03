import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "HOME", path: "/" },
  { name: "ROOMS & SUITES", path: "/rooms" },
  { name: "PAGES", path: "/about" }, // This would normally be a dropdown
  { name: "NEWS", path: "/news" },
  { name: "CONTACT", path: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // If we scroll down past 100px, add the scrolled state (blurred dark bg)
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out border-b border-transparent",
          scrolled ? "top-0 py-4 bg-background/90 backdrop-blur-md border-background-alt" : "top-0 md:top-[45px] py-6 bg-transparent"
        )}
        animate={hidden ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-50">
            <svg width="32" height="32" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 40L15 20L25 30L30 15L35 30L45 20L50 40H10Z" stroke="#b8895b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 45H50" stroke="#b8895b" strokeWidth="3" strokeLinecap="round"/>
            </svg>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-widest text-foreground uppercase leading-none mb-1">Hoteler</span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-accent">Luxury Hotel</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-xs uppercase tracking-[0.1em] text-foreground hover:text-accent transition-colors relative group font-medium"
              >
                {link.name}
                {/* Underline effect */}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300 ease-out" />
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6 z-50">
            <button aria-label="Search" className="text-foreground hover:text-accent transition-colors hidden md:block">
              <Search className="w-5 h-5" />
            </button>
            <button aria-label="Cart" className="text-foreground hover:text-accent transition-colors relative">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-accent text-background-dark text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button 
              aria-label="Menu" 
              className="lg:hidden text-foreground hover:text-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-30 bg-background pt-24 px-8 pb-8 flex flex-col justify-between"
          >
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-2xl font-serif text-foreground uppercase hover:text-accent transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
