import { motion } from "motion/react";
import { Phone, ArrowRight, Compass, Heart, Waves } from "lucide-react";

interface HeroProps {
  onLearnMore: (id: string) => void;
}

export default function Hero({ onLearnMore }: HeroProps) {
  // Animation constraints
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } },
  };

  const imageFade = {
    hidden: { opacity: 0, scale: 1.05 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="bg-tactile-pattern relative min-h-screen pt-24 lg:pt-32 flex items-center overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-earth-clay/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-plum-deep/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Hero text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Metadata / Location Pin */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center space-x-2 bg-earth-clay/10 text-earth-dark border border-earth-clay/20 px-3.5 py-1.5 rounded-full w-fit mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-earth-clay animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest font-semibold">
                Beverley, Sandton, Johannesburg &amp; Online
              </span>
            </motion.div>

            {/* Core Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl text-earth-dark font-serif font-bold leading-[1.1] mb-6"
            >
              Surrender into the <br />
              <span className="serif-italic text-earth-clay font-normal">Sovereignty</span> of <br />
              Your Physical Vessel.
            </motion.h1>

            {/* Descriptive Body */}
            <motion.p
              variants={fadeInUp}
              className="font-sans text-base sm:text-lg text-earth-dark/85 leading-relaxed max-w-xl mb-8"
            >
              EmbraceIN is an intimate wellness practice offering trauma-informed birth and postpartum doula companioning, pelvic reclamation, children&apos;s clases, and somatic meditation circles. We hold space for women navigating deep physical thresholds — conception, birthing, postpartum integration, and spiritual awakening.
            </motion.p>

            {/* Tactile Actions */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
            >
              <button
                id="hero_offerings_btn"
                onClick={() => onLearnMore("services")}
                className="group flex items-center justify-center space-x-3 bg-earth-clay hover:bg-[#854B35] text-earth-linen px-8 py-4 rounded-xl text-xs tracking-widest uppercase font-semibold shadow-md transition-all duration-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-earth-clay"
              >
                <span>Explore Offerings</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <a
                href="mailto:bookings@embracein.co.za"
                id="hero_contact_btn"
                className="flex items-center justify-center space-x-3 bg-plum-deep hover:bg-[#201A18] text-earth-linen px-8 py-4 rounded-xl text-xs tracking-widest uppercase font-semibold shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <Phone className="w-4 h-4 text-gold-accent" />
                <span>Speak to Samantha</span>
              </a>
            </motion.div>

            {/* Emotional Pillars */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-earth-clay/10"
            >
              <div className="flex items-start space-x-3">
                <Heart className="w-5 h-5 text-earth-clay flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold text-earth-dark">Birth Guardianship</h3>
                  <p className="font-sans text-xs text-earth-dark/60 mt-1 leading-snug">Continuous physical labor advocacy &amp; IVF protection.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Waves className="w-5 h-5 text-earth-clay flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold text-earth-dark">Somatic Somatics</h3>
                  <p className="font-sans text-xs text-earth-dark/60 mt-1 leading-snug">Pelvic bowl restoration, pregnancy &amp; pediatric yoga.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Compass className="w-5 h-5 text-earth-clay flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-serif text-sm font-semibold text-earth-dark">Sacred Thresholds</h3>
                  <p className="font-sans text-xs text-earth-dark/60 mt-1 leading-snug">Monthly womb-moon circles &amp; menarche initiations.</p>
                </div>
              </div>
            </motion.div>

          </motion.div>

          {/* Hero image frame */}
          <motion.div
            variants={imageFade}
            initial="hidden"
            animate="show"
            className="lg:col-span-5 relative pt-4"
          >
            {/* Wooden / Clay framing elements */}
            <div className="absolute -inset-4 border border-earth-clay/20 pill-mask -z-10 pointer-events-none transform translate-x-3 translate-y-3" />
            <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/10 via-transparent to-transparent z-10 pill-mask pointer-events-none" />
            
            {/* Terracotta solid overlay frame for tactile weight */}
            <div className="absolute bottom-4 left-4 bg-earth-linen border border-earth-clay/20 p-4 rounded-xl shadow-lg z-20 max-w-[240px]">
              <span className="block font-serif text-xs italic text-earth-clay mb-0.5">Physical &amp; Devoted</span>
              <p className="font-sans text-[11px] text-earth-dark/80 font-medium leading-relaxed">
                &ldquo;We work with gravity, bone, womb, and breath. This practice has weight.&rdquo;
              </p>
            </div>

            {/* Generated Image in Pill Mask Frame */}
            <div className="overflow-hidden pill-mask border-8 border-earth-light shadow-2xl aspect-[4/5] bg-earth-light card-shadow">
              <img
                src="/src/assets/images/yoga_meditation_1780136360919.png"
                alt="Grounded woman in yoga meditation pose inside Sandton wellness studio, reflecting real somatic presence"
                className="w-full h-full object-cover select-none object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Visual indicators to show local roots */}
            <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full border border-earth-clay/25 flex items-center justify-center bg-earth-linen text-sm text-earth-clay font-serif font-semibold opacity-90 backdrop-blur-sm shadow-md">
              JHB
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
