import { TESTIMONIALS } from "../data";
import { Quote, Sparkles, MapPin } from "lucide-react";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-earth-light bg-tactile-pattern relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-[15%] h-[30%] bg-earth-clay/5 rounded-full filter blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[25%] h-[25%] bg-plum-deep/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[10px] tracking-widest uppercase text-earth-clay font-bold block mb-3">
            Shared Passages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-dark leading-tight">
            Vessels of Truth: <br />
            Stories Shared by the Sisterhood.
          </h2>
          <p className="font-sans text-sm sm:text-base text-earth-dark/70 mt-4 max-w-xl">
            These are not transactional ratings. These are authentic accounts of birth thresholds, pelvic reclaimers, and restorative sanctuary care experienced here in Johannesburg.
          </p>
          <div className="w-16 h-1 bg-earth-clay mt-6 rounded" />
        </div>

        {/* Testimonials Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.author}
              id={`testimonial_card_${idx}`}
              className="bg-earth-linen rounded-2xl p-8 lg:p-10 border border-earth-clay/10 shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-earth-clay/10 pointer-events-none" />

              {/* Program label */}
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 bg-earth-clay/10 border border-earth-clay/20 text-earth-clay px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-semibold">
                  <Sparkles className="w-3 h-3" /> {t.context}
                </span>
              </div>

              {/* Quote Block */}
              <blockquote className="font-serif italic text-base sm:text-lg text-earth-dark leading-relaxed mb-8 flex-grow">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="pt-6 border-t border-earth-clay/10 flex justify-between items-center bg-transparent">
                <div>
                  <h4 className="font-serif text-base font-bold text-earth-dark">
                    {t.author}
                  </h4>
                  <p className="font-sans text-xs text-earth-dark/50 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-earth-clay/70" /> {t.location}
                  </p>
                </div>
                
                {/* Micro branding stamp */}
                <div className="text-right">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-earth-clay font-bold">
                    VERIFIED INITIATE
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Grounding statement underneath testimonials */}
        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="font-serif italic text-sm text-earth-dark/70">
            &ldquo;Every birth is an individual footprint. We do not look for compliance, we honor your specific current.&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
