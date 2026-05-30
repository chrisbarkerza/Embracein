import { Phone, Mail, MapPin, Clock, Calendar, Sparkles, Heart } from "lucide-react";

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#1C1816] py-20 px-4 sm:px-6 lg:px-8 border-t border-earth-clay/10 relative overflow-hidden text-earth-light">
      {/* Mystical Background Highlights */}
      <div className="absolute top-0 right-0 w-[30%] h-[40%] bg-earth-clay/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[20%] h-[30%] bg-earth-clay/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section - Large Callout and Action Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand Signature */}
          <div className="lg:col-span-5">
            <span className="flex items-center justify-center w-12 h-12 rounded-full bg-earth-clay text-earth-light font-serif text-xl font-bold mb-4">
              E
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold uppercase tracking-widest text-earth-clay">
              EmbraceIN
            </h3>
            <span className="block font-mono text-[10px] tracking-widest uppercase text-gold-accent font-semibold mt-1">
              Somatic Sanctuary &amp; Birth Guardianship
            </span>
            <p className="font-sans text-xs sm:text-sm text-earth-light/65 leading-relaxed mt-6 max-w-sm">
              We stand at the threshold with you. Offering birth doula care, trauma-informed pelvic yoga, women&apos;s circles, and somatic sound treatments in Beverley, Sandton, Johannesburg.
            </p>
            
            {/* Johannesburg Community Note */}
            <div className="mt-8 flex items-center gap-2 text-xs text-earth-clay font-mono tracking-wider uppercase font-bold">
              <Sparkles className="w-4 h-4 text-gold-accent" />
              <span>Beverley, Sandton, Johannesburg</span>
            </div>
          </div>

          {/* Contact Actions (Direct Links) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
            
            {/* Phone Card */}
            <a
              href="tel:+27825550291"
              id="footer_phone_card"
              className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-earth-clay hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-earth-clay/20 flex items-center justify-center mb-4 text-earth-clay group-hover:bg-earth-clay group-hover:text-white transition-all">
                <Phone className="w-5 h-5" />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-gold-accent block mb-1">
                Call Samantha Directly
              </span>
              <h4 className="font-serif text-xl font-bold group-hover:text-earth-clay transition-colors mb-2">
                +27 (0) 82 555 0291
              </h4>
              <p className="font-sans text-xs text-white/50 leading-relaxed">
                For urgent birth enquiries, labor calls, or to set up an initial consultation conversation.
              </p>
            </a>

            {/* Email Card */}
            <a
              href="mailto:bookings@embracein.co.za?subject=Enquiry from EmbraceIN Website"
              id="footer_email_card"
              className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-earth-clay hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2D2421]/50 border border-[#2D2421]/10 flex items-center justify-center mb-4 text-gold-accent group-hover:bg-gold-accent group-hover:text-[#1C1816] transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-gold-accent block mb-1">
                Email Our Booking Team
              </span>
              <h4 className="font-serif text-xl font-bold group-hover:text-gold-accent transition-colors mb-2">
                bookings@embracein.co.za
              </h4>
              <p className="font-sans text-xs text-white/50 leading-relaxed">
                For yoga class bookings, workshop registration, or pelvic somatics questions.
              </p>
            </a>

          </div>

        </div>

        {/* Bottom Section - Logistics, Team Directory, and Copyright */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-12 text-sm text-white/60">
          
          {/* Service Logistics */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">Sanctum Logistics</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-earth-clay flex-shrink-0 mt-0.5" />
                <span>Our physical studio is situated in Beverley, Sandton, JHB (next to lonehill and Dainfern). Available by appointment.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-accent flex-shrink-0" />
                <span>Studio hours: Weekdays 07:00 – 19:00, Saturdays 08:00 – 13:00. Closed Sundays.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-earth-clay flex-shrink-0 mt-0.5" />
                <span>Continuous 24/7 on-call availability for contracted birth doula clients.</span>
              </li>
            </ul>
          </div>

          {/* Quick Team Reference directory */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">The Guardians</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-semibold text-white/80">Samantha-Lee Barker</span>
                <span className="italic text-earth-clay">Founder, Lead Doula</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-semibold text-white/80">Lerato Sibanda</span>
                <span className="italic text-gold-accent">Postpartum Specialist</span>
              </li>
              <li className="flex justify-between pb-2">
                <span className="font-semibold text-white/80">Chloe van der Merwe</span>
                <span className="italic text-gold-accent">Bodyworker</span>
              </li>
            </ul>
          </div>

          {/* Emergency support advisory */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif text-base font-bold text-white uppercase tracking-wider">Duty of Care</h4>
            <p className="font-sans text-xs leading-relaxed text-white/40">
              Doulas are non-clinical emotional and physical companion guides. We work in alignment with certified medical teams (obstetricians, midwives, gynecologists, pediatrician). We do not perform clinical diagnostics or medical deliveries.
            </p>
          </div>

        </div>

        {/* Deep copyright details */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-white/35 gap-4">
          <p>© {currentYear} EmbraceIN. All rights reserved. Beverley, Sandton, Johannesburg.</p>
          <div className="flex items-center gap-1">
            <span>Holding sacred container for Johannesburg women</span>
            <Heart className="w-3.5 h-3.5 text-earth-clay fill-current" />
          </div>
        </div>

      </div>
    </footer>
  );
}
