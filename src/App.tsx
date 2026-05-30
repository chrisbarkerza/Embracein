import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import ContactFooter from "./components/ContactFooter";
import { ArrowUp, Sparkles, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Page navigation handler
  const handleNavigation = (id: string) => {
    if (id === "contact") {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
      return;
    }

    setActiveSection(id);
    // Smoothly reset viewport to pristine top position upon tab change
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="bg-earth-linen min-h-screen relative font-sans text-earth-dark select-none flex flex-col justify-between">
      
      {/* Decorative Warm Top Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-earth-clay via-gold-accent to-plum-deep fixed top-0 left-0 z-[100] pointer-events-none" />

      {/* Global Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />

      {/* Main Page Frame with Smooth Fade transitions */}
      <main className="flex-grow pt-24 pb-12">
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Hero onLearnMore={handleNavigation} />
            </motion.div>
          )}

          {activeSection === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <About />
            </motion.div>
          )}

          {activeSection === "services" && (
            <motion.div
              key="services"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Services onContactClick={() => handleNavigation("contact")} />
            </motion.div>
          )}

          {activeSection === "doula-care" && (
            <motion.div
              key="doula-care"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Services onContactClick={() => handleNavigation("contact")} initialCategory="doula-care" />
            </motion.div>
          )}

          {activeSection === "testimonials" && (
            <motion.div
              key="testimonials"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <Testimonials />
            </motion.div>
          )}

          {activeSection === "faq" && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <FAQ />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Contact Deck & Sensory Footer */}
      <ContactFooter />

      {/* Floating Scroll to Top Target */}
      {showScrollTop && (
        <button
          id="scroll_to_top_floating_btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 bg-plum-deep hover:bg-[#201A18] hover:scale-105 text-earth-light w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-plum-deep"
          title="Scroll back up into stillness"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Quick floating indicator for local location precision */}
      <div className="hidden md:flex fixed bottom-6 left-6 z-40 bg-earth-linen/90 backdrop-blur-md border border-earth-clay/15 rounded-full px-4 py-2 shadow-md items-center gap-2">
        <MapPin className="w-3.5 h-3.5 text-earth-clay" />
        <span className="font-mono text-[9px] uppercase tracking-widest text-earth-dark/70 font-semibold">
          Beverley, Sandton
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
      </div>

    </div>
  );
}
