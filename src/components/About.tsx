import { motion } from "motion/react";
import { TEAM_MEMBERS } from "../data";
import { Sparkles, Quote, MapPin, Heart } from "lucide-react";

export default function About() {
  const leader = TEAM_MEMBERS[0];
  const staff = TEAM_MEMBERS.slice(1);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-earth-light bg-tactile-pattern relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-0 w-[20%] h-[30%] bg-earth-clay/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[30%] h-[30%] bg-plum-deep/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="font-mono text-[10px] tracking-widest uppercase text-earth-clay font-bold block mb-3">
            Our Living Presence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-earth-dark leading-tight">
            Meet Your Guardians: <br />
            The Women Who Hold the Container.
          </h2>
          <div className="w-16 h-1 bg-earth-clay mt-6 rounded" />
        </div>

        {/* Samantha-Lee Barker (Lead Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 pb-16 border-b border-earth-clay/15">
          
          {/* Sam's Image Column with Perfect Pill-Mask Architecture */}
          <div className="lg:col-span-5 relative pt-4">
            {/* Visual offset border */}
            <div className="absolute -inset-4 border border-earth-clay/15 pill-mask -z-10 pointer-events-none transform -translate-x-3 -translate-y-3 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#2D2421]/25 via-transparent to-transparent z-10 pill-mask pointer-events-none" />
            
            <div className="overflow-hidden bg-[#EAE2D8] w-full aspect-[4/5] pill-mask border-8 border-white card-shadow relative">
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover select-none object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Stamp Overlay */}
            <div className="absolute bottom-4 right-4 bg-plum-deep text-earth-light py-2 px-3.5 rounded-lg text-left shadow-lg z-20">
              <p className="font-mono text-[9px] uppercase tracking-widest text-gold-accent font-semibold flex items-center gap-1.5 mb-0.5">
                <Sparkles className="w-3 h-3" /> Rooted Anchor
              </p>
              <p className="font-serif text-xs italic">Samantha-Lee Barker</p>
            </div>
          </div>

          {/* Sam's Bio Column */}
          <div className="lg:col-span-7">
            <span className="font-serif italic text-lg text-earth-clay block mb-2">
              Founder, Lead Birth Doula &amp; Somatic Guide
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-earth-dark mb-6">
              Samantha-Lee Barker
            </h3>

            {/* Crucial Energy Statement */}
            <div className="bg-earth-linen border-l-4 border-earth-clay rounded-r-xl p-5 mb-6 shadow-sm">
              <h4 className="font-mono text-[9px] uppercase tracking-widest text-earth-clay font-bold mb-1.5 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5" /> Energy Held
              </h4>
              <p className="font-serif italic text-sm md:text-base text-earth-dark/90 leading-relaxed">
                &ldquo;{leader.energy}&rdquo;
              </p>
            </div>

            {/* Biography Details */}
            <div className="space-y-4 font-sans text-sm sm:text-base text-earth-dark/85 leading-relaxed">
              <p>{leader.bio}</p>
              <p>
                As a mother who has crossed these thresholds herself, Sam believes that modern clinical spaces often strip women of their raw bodily authority. She does not sugarcoat birth; she honors its wild, elemental intensity. Through double hip squeezes, maternal vocalisation, labor spinning, postpartum wraps, and unwavering pelvic reclamation, she ensures you never cross a threshold unsupported.
              </p>
              <p className="font-mono text-xs text-earth-clay/90 pt-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4" /> Beverley Sanctuary &amp; Selected Johannesburg Labor Rooms
              </p>
            </div>
            
            {/* Certifications and Linage Block */}
            <div className="mt-8 pt-6 border-t border-earth-clay/10 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-earth-dark/80">Support Services</h4>
                <ul className="mt-2 space-y-1 font-sans text-xs text-earth-dark/70">
                  <li>• Continuous active-labor protection</li>
                  <li>• IVF emotional companioning</li>
                  <li>• Traumatic birth somatic release</li>
                  <li>• Prenatal partner coaching</li>
                </ul>
              </div>
              <div>
                <h4 className="font-serif text-xs font-bold uppercase tracking-wider text-earth-dark/80">Movement Linage</h4>
                <ul className="mt-2 space-y-1 font-sans text-xs text-earth-dark/70">
                  <li>• Trauma-informed Pelvic Yoga</li>
                  <li>• Spin Babies labor optimal pacing</li>
                  <li>• Somatic Yin &amp; Restorative</li>
                  <li>• Kundalini womb-heart currents</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* Support Staff Section Title */}
        <div className="mb-12">
          <span className="font-mono text-[10px] tracking-widest uppercase text-earth-clay font-bold block mb-1">
            Care Expansion
          </span>
          <h3 className="font-serif text-2xl font-bold text-earth-dark">
            Our Dedicated Supporting Circles
          </h3>
          <p className="font-sans text-sm text-earth-dark/70 mt-1 max-w-xl">
            To hold a safe container, a leader needs support. Lerato and Chloe work in close physical alignment with Sam to offer full-spectrum physical sanctuary.
          </p>
        </div>

        {/* Support Staff Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {staff.map((member, idx) => (
            <div
              key={member.name}
              id={`staff_member_${idx}`}
              className="bg-earth-linen rounded-2xl p-6 lg:p-8 border border-earth-clay/10 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start"
            >
              {/* Avatar column */}
              <div className="w-24 h-32 md:w-28 md:h-36 rounded-2xl overflow-hidden shadow-inner flex-shrink-0 bg-earth-light border-4 border-white card-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center scale-105 hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Bio & Energy Info */}
              <div className="flex-grow">
                <span className="font-serif text-xs italic text-earth-clay block mb-0.5">{member.role}</span>
                <h4 className="font-serif text-lg font-bold text-earth-dark mb-3">{member.name}</h4>
                
                {/* Energy Indicator */}
                <p className="font-serif text-xs italic text-[11px] text-earth-clay bg-earth-light border-l-2 border-earth-clay px-2.5 py-1 mb-3">
                  Energy: &ldquo;{member.energy}&rdquo;
                </p>

                <p className="font-sans text-xs sm:text-sm text-earth-dark/80 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Philosophy Quote Block */}
        <div className="mt-20 border-t border-b border-earth-clay/15 py-10 text-center max-w-4xl mx-auto">
          <Quote className="w-10 h-10 text-earth-clay/20 mx-auto mb-4" />
          <p className="font-serif text-xl sm:text-2xl text-earth-dark italic font-light leading-relaxed">
            &ldquo;We do not stand between you and your choices, nor do we perform sterile management. We bolster your deep womb authority, protecting your bodily boundaries so you can drop into the physical alchemy of transition.&rdquo;
          </p>
          <span className="block font-mono text-[10px] tracking-widest text-earth-clay uppercase font-bold mt-4">
            - Samantha-Lee Barker &amp; The EmbraceIN Team
          </span>
        </div>

      </div>
    </section>
  );
}
