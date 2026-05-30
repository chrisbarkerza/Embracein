import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICE_CATEGORIES } from "../data";
import { ServiceDetail } from "../types";
import { ChevronRight, Sparkles, HeartPulse, UserCheck, HelpCircle, CheckCircle, Smartphone, MailOpen } from "lucide-react";

interface ServicesProps {
  onContactClick: () => void;
  initialCategory?: string;
}

export default function Services({ onContactClick, initialCategory }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES[0].id);
  const [expandedOfferings, setExpandedOfferings] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  const toggleOffering = (title: string) => {
    setExpandedOfferings((prev) => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const currentCategoryObj = SERVICE_CATEGORIES.find((cat) => cat.id === activeCategory) || SERVICE_CATEGORIES[0];

  return (
    <section id="services" className="py-20 md:py-28 bg-earth-linen bg-tactile-pattern relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-[20%] h-[30%] bg-earth-clay/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[25%] h-[35%] bg-plum-deep/5 rounded-full filter blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-[10px] tracking-widest uppercase text-earth-clay font-bold block mb-3">
            Somatic &amp; Guardian Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-dark mb-4">
            Embodied Spaces for Deep Transition.
          </h2>
          <p className="font-sans text-sm sm:text-base text-earth-dark/75 leading-relaxed max-w-xl mx-auto">
            We work through the body. Find the specific container that calls to you, whether you are seeking birth advocacy, pelvic reclamation, or a sacred womb-fire gathering.
          </p>
          <div className="w-16 h-1 bg-earth-clay mx-auto mt-6 rounded" />
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-12 sm:mb-16">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              id={`category_tab_${cat.id}`}
              onClick={() => {
                setActiveCategory(cat.id);
                // Clear expanded states when switching categories
                setExpandedOfferings({});
              }}
              className={`w-full sm:w-auto px-6 py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase font-semibold transition-all border text-left sm:text-center flex justify-between sm:justify-center items-center gap-3 focus:outline-none ${
                activeCategory === cat.id
                  ? "bg-plum-deep border-plum-deep text-earth-light shadow-md font-bold"
                  : "bg-earth-light border-earth-clay/10 text-earth-dark/80 hover:bg-earth-light hover:border-earth-clay/35"
              }`}
            >
              <span>{cat.title}</span>
              <ChevronRight
                className={`w-4 h-4 sm:hidden transition-transform ${
                  activeCategory === cat.id ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Active Category Content and Offerings Expansion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Category Description & Tactile Image */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 pt-4">
            <div className="bg-earth-light border border-earth-clay/10 rounded-2xl p-6 sm:p-8 shadow-sm">
              
              {/* Category Image - Pill-Mask Frame */}
              <div className="overflow-hidden pill-mask aspect-[16/9] mb-6 border-4 border-white card-shadow bg-earth-light">
                <img
                  src={currentCategoryObj.image}
                  alt={currentCategoryObj.title}
                  className="w-full h-full object-cover select-none object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              <span className="font-mono text-[9px] uppercase tracking-widest text-earth-clay font-bold block mb-2">
                Core Sanctuary Container
              </span>
              <h3 className="font-serif text-2xl font-bold text-earth-dark mb-4">
                {currentCategoryObj.title}
              </h3>
              <p className="font-sans text-sm text-earth-dark/80 leading-relaxed mb-6">
                {currentCategoryObj.longDesc}
              </p>
              
              {/* Trust Badge */}
              <div className="border-t border-earth-clay/10 pt-4 flex items-center gap-3">
                <HeartPulse className="w-5 h-5 text-earth-clay" />
                <span className="font-mono text-[10px] tracking-widest uppercase font-semibold text-earth-dark/70">
                  Fully Trauma-Informed Framework
                </span>
              </div>
            </div>
            
            {/* Quick Contact Prompt Card */}
            <div className="mt-8 bg-plum-deep text-earth-light rounded-2xl p-6 border border-earth-clay/15 shadow-sm">
              <h4 className="font-serif text-lg font-bold mb-2">Align With Us first</h4>
              <p className="font-sans text-xs text-earth-light/80 leading-relaxed mb-4">
                No automatic online calendars. We connect with intention. Each program begins with a 20-minute phone call or safe herbal tea consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+27825550291"
                  className="flex items-center justify-center gap-2 bg-earth-clay hover:bg-[#854B35] text-white py-2.5 px-4 rounded-lg text-[10px] uppercase font-bold tracking-widest transition-all"
                >
                  <Smartphone className="w-3.5 h-3.5" /> Call Sam
                </a>
                <a
                  href="mailto:bookings@embracein.co.za"
                  className="flex items-center justify-center gap-2 bg-earth-light hover:bg-[#E2D9CE] text-earth-dark py-2.5 px-4 rounded-lg text-[10px] uppercase font-bold tracking-widest transition-all"
                >
                  <MailOpen className="w-3.5 h-3.5 text-earth-clay" /> Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Expandable Offerings Grid */}
          <div className="lg:col-span-7 space-y-6">
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-earth-clay font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Available Packages &amp; Offerings
            </h4>
            
            <div className="space-y-4">
              {currentCategoryObj.offerings.map((offering: ServiceDetail, idx) => {
                const isExpanded = !!expandedOfferings[offering.title];
                return (
                  <div
                    key={offering.title}
                    id={`offering_card_${idx}`}
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                      isExpanded
                        ? "bg-earth-light border-earth-clay/35 shadow-md scale-[1.01]"
                        : "bg-earth-linen border-earth-clay/15 shadow-sm hover:border-earth-clay/25 hover:shadow"
                    }`}
                  >
                    {/* Header trigger */}
                    <button
                      id={`offering_trigger_${idx}`}
                      onClick={() => toggleOffering(offering.title)}
                      className="w-full text-left p-6 flex justify-between items-start gap-4 focus:outline-none"
                    >
                      <div className="flex-grow">
                        <span className="font-serif italic text-xs text-earth-clay block mb-1">
                          {offering.subtitle}
                        </span>
                        <h4 className="font-serif text-lg sm:text-xl font-bold text-earth-dark">
                          {offering.title}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-earth-dark/70 mt-1 line-clamp-2">
                          {offering.description}
                        </p>
                      </div>
                      <span className={`w-8 h-8 rounded-full border border-earth-clay/20 flex items-center justify-center text-earth-clay flex-shrink-0 mt-1 transition-transform duration-300 ${
                        isExpanded ? "rotate-90 bg-earth-clay text-earth-linen" : "rotate-0 hover:bg-earth-light"
                      }`}>
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </button>

                    {/* Expandable Details Container */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="border-t border-earth-clay/10 bg-earth-linen/80"
                        >
                          <div className="p-6 md:p-8 space-y-6">
                            
                            {/* The Experience Section (Sensory focus) */}
                            <div>
                              <h5 className="font-mono text-[9px] uppercase tracking-widest text-earth-clay font-bold mb-2 flex items-center gap-1.5">
                                <HelpCircle className="w-3.5 h-3.5" /> What it physically feels like
                              </h5>
                              <p className="font-serif italic text-sm text-earth-dark/95 leading-relaxed bg-earth-light p-4 rounded-xl border-l-2 border-earth-clay shadow-inner">
                                &ldquo;{offering.experience}&rdquo;
                              </p>
                            </div>

                            {/* Concrete details / Inclusions */}
                            <div>
                              <h5 className="font-mono text-[9px] uppercase tracking-widest text-earth-dark/70 font-bold mb-3">
                                Program Includes &amp; Covers
                              </h5>
                              <ul className="space-y-2.5">
                                {offering.details.map((detail, index) => (
                                  <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-earth-dark/85">
                                    <CheckCircle className="w-4 h-4 text-earth-clay flex-shrink-0 mt-0.5" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Suited for */}
                            <div className="pt-4 border-t border-earth-clay/10">
                              <h5 className="font-mono text-[9px] uppercase tracking-widest text-earth-dark/70 font-bold mb-3 flex items-center gap-1.5">
                                <UserCheck className="w-3.5 h-3.5 text-earth-clay" /> Deeply Suited for
                              </h5>
                              <div className="flex flex-wrap gap-2">
                                {offering.suitedFor.map((suited, index) => (
                                  <span
                                    key={index}
                                    className="bg-earth-clay/10 border border-earth-clay/20 text-earth-dark rounded-full px-3 py-1 text-[11px] font-sans font-medium"
                                  >
                                    {suited}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Quick Call to Action Link */}
                            <div className="pt-2 text-right">
                              <a
                                href={`mailto:bookings@embracein.co.za?subject=Inquiry regarding: ${offering.title}`}
                                className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest font-bold text-earth-clay hover:text-[#854B35] transition-colors"
                              >
                                Connect about this program <ChevronRight className="w-3.5 h-3.5" />
                              </a>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </div>
                );
              })}
            </div>

            {/* Additional custom local markers */}
            <p className="font-sans text-[11px] text-earth-dark/40 text-center italic mt-6">
              All physical bodywork is performed under the protection of certified healthcare guidelines in our Beverley, Sandton studio.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
