import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQS } from "../data";
import { ChevronRight, HelpCircle, Sparkles, PhoneCall } from "lucide-react";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState<"all" | "doula" | "yoga" | "booking">("all");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "doula", label: "Birth & Doula Support" },
    { id: "yoga", label: "Yoga & Pelvic Somatics" },
    { id: "booking", label: "Consultation & Booking" },
  ];

  const filteredFaqs = FAQS.filter(
    (faq) => activeTab === "all" || faq.category === activeTab || faq.category === "all"
  );

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-earth-linen bg-tactile-pattern relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/3 left-0 w-[20%] h-[30%] bg-earth-clay/5 rounded-full filter blur-[110px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[20%] h-[30%] bg-plum-deep/5 rounded-full filter blur-[105px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-mono text-[10px] tracking-widest uppercase text-earth-clay font-bold block mb-3">
            Sacred Logistics
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-earth-dark mb-4">
            Demystifying the Passage.
          </h2>
          <p className="font-sans text-sm sm:text-base text-earth-dark/70 leading-relaxed">
            Crossing heavy thresholds often brings practical uncertainties. We believe in high specificity, upfront honesty, and direct answers.
          </p>
          <div className="w-16 h-1 bg-earth-clay mx-auto mt-6 rounded" />
        </div>

        {/* FAQ Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-earth-clay/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`faq_tab_${cat.id}`}
              onClick={() => {
                setActiveTab(cat.id as any);
                setExpandedIndex(null);
              }}
              className={`px-4.5 py-2.5 rounded-full text-xs tracking-wider uppercase font-semibold transition-all border ${
                activeTab === cat.id
                  ? "bg-earth-clay border-earth-clay text-earth-light shadow-sm"
                  : "bg-earth-light border-earth-clay/15 text-earth-dark/75 hover:bg-earth-light hover:border-earth-clay/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion Questions List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={faq.question}
                id={`faq_accordion_${index}`}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded
                    ? "bg-earth-light border-earth-clay/35 shadow-sm"
                    : "bg-earth-linen border-earth-clay/10 hover:border-earth-clay/20"
                }`}
              >
                {/* Header Toggle */}
                <button
                  id={`faq_trigger_${index}`}
                  onClick={() => toggleExpand(index)}
                  className="w-full text-left p-6 sm:p-7 flex justify-between items-center gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3.5 flex-grow pr-4">
                    <HelpCircle className="w-5 h-5 text-earth-clay flex-shrink-0 mt-0.5" />
                    <h3 className="font-serif text-base sm:text-lg font-bold text-earth-dark leading-snug">
                      {faq.question}
                    </h3>
                  </div>
                  <span className={`w-7 h-7 rounded-full border border-earth-clay/15 flex items-center justify-center text-earth-clay flex-shrink-0 transition-transform duration-300 ${
                    isExpanded ? "rotate-90 bg-earth-clay text-earth-linen" : "rotate-0"
                  }`}>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </button>

                {/* Body Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="border-t border-earth-clay/10 bg-earth-linen/50"
                    >
                      <div className="p-6 sm:p-7 sm:pl-16 font-sans text-xs sm:text-sm text-earth-dark/85 leading-relaxed space-y-2">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Call to direct phone contact card */}
        <div className="mt-16 bg-plum-deep text-earth-light rounded-3xl p-8 border border-earth-clay/15 relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
          <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-earth-clay/10 rounded-full filter blur-[40px] pointer-events-none" />
          
          <div className="max-w-md relative z-10">
            <span className="font-mono text-[9px] uppercase tracking-widest text-gold-accent font-bold flex items-center gap-1 mb-2">
              <Sparkles className="w-3 h-3" /> Still wondering?
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold mb-2">
              Let&apos;s talk like real people.
            </h4>
            <p className="font-sans text-xs text-earth-light/80 leading-relaxed">
              We do not use ticketing tools or cold support queues. We prefer the warmth of a phone conversation or a cup of herbal tea in our Sandton space.
            </p>
          </div>

          <div className="flex-shrink-0 relative z-10">
            <a
              href="mailto:samantha@embracein.co.za?subject=Inquiry regarding somatic care"
              id="faq_direct_email_link"
              className="inline-flex items-center gap-2.5 bg-earth-clay hover:bg-[#854B35] text-white py-3 px-6 rounded-xl text-xs uppercase tracking-widest font-bold transition-all shadow-md hover:shadow-lg"
            >
              <PhoneCall className="w-3.5 h-3.5 text-gold-accent" />
              <span>Contact Sam Directly</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
