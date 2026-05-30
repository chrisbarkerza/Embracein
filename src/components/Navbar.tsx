import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail, Sparkles } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "Our Presence" },
    { id: "services", label: "Somatic Offerings" },
    { id: "doula-care", label: "Birth & Doula Support" },
    { id: "testimonials", label: "Shared Stories" },
    { id: "faq", label: "Questions" },
  ];

  const handleItemClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="app_header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-earth-linen/95 backdrop-blur-md shadow-sm border-b border-earth-clay/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand Name */}
            <button
              id="brand_logo_btn"
              onClick={() => handleItemClick("home")}
              className="group flex items-center space-x-2 text-left focus:outline-none"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-plum-deep text-earth-light font-serif text-lg font-bold">
                E
              </span>
              <div>
                <span className="block font-serif text-xl tracking-wider uppercase font-semibold text-earth-dark group-hover:text-earth-clay transition-colors">
                  EmbraceIN
                </span>
                <span className="block font-sans text-[10px] tracking-widest text-earth-clay uppercase -mt-1 font-medium">
                  Somatic Sanctuary
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav_link_${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                  className={`relative font-sans text-xs tracking-widest uppercase font-medium transition-colors hover:text-earth-clay py-1 focus:outline-none ${
                    activeSection === item.id ? "text-earth-clay font-semibold" : "text-earth-dark/70"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-earth-clay"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Primary Action Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                href="mailto:bookings@embracein.co.za"
                id="header_email_link"
                className="text-xs hover:text-earth-clay text-earth-dark/70 font-mono tracking-tight transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" /> Bookings
              </a>
              <a
                href="tel:+27825550291"
                id="header_phone_btn"
                className="flex items-center space-x-2 bg-plum-deep hover:bg-[#201A18] text-earth-light px-4 py-2 rounded-full text-xs tracking-widest uppercase font-medium shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-plum-deep"
              >
                <Phone className="w-3.5 h-3.5 mr-1" />
                <span>Call Sam</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                id="mobile_menu_toggle_btn"
                onClick={() => setIsOpen(!isOpen)}
                className="text-earth-dark hover:text-earth-clay focus:outline-none p-1 rounded-md"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile_nav_drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-earth-linen border-t border-earth-clay/10 overflow-hidden"
            >
              <div className="px-4 pt-4 pb-6 space-y-3 shadow-inner">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    id={`mobile_nav_link_${item.id}`}
                    onClick={() => handleItemClick(item.id)}
                    className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm tracking-wider uppercase font-medium transition-all ${
                      activeSection === item.id
                        ? "bg-earth-clay/10 text-earth-clay font-bold pl-5 border-l-4 border-earth-clay"
                        : "text-earth-dark hover:bg-earth-light hover:pl-4"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                {/* Mobile Actions block */}
                <div className="pt-4 border-t border-earth-clay/10 flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:bookings@embracein.co.za"
                    id="mobile_email_btn"
                    className="flex-1 flex items-center justify-center space-x-2 border border-earth-clay/30 hover:border-earth-clay text-earth-dark bg-transparent px-4 py-3 rounded-xl text-xs tracking-widest uppercase font-medium transition-all"
                  >
                    <Mail className="w-4 h-4 text-earth-clay" />
                    <span>Email Bookings</span>
                  </a>
                  <a
                    href="tel:+27825550291"
                    id="mobile_phone_btn"
                    className="flex-1 flex items-center justify-center space-x-2 bg-plum-deep hover:bg-[#201A18] text-earth-light px-4 py-3 rounded-xl text-xs tracking-widest uppercase font-medium transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Sam</span>
                  </a>
                </div>
                
                <div className="text-center pt-2">
                  <p className="text-[10px] uppercase tracking-widest text-earth-dark/40 font-mono flex items-center justify-center gap-1">
                    <Sparkles className="w-3 h-3 text-gold-accent" /> Beverley, Sandton, Johannesburg
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
