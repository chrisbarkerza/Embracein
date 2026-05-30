import { TeamMember, ServiceCategory, Testimonial, FAQItem } from "./types";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Samantha-Lee Barker",
    role: "Founder & Lead Facilitator",
    energy: "Rooted earth, ancient womb-deep wisdom, unwavering container.",
    bio: "Samantha-Lee is a certified birth and postpartum doula, trauma-informed yoga facilitator, and somatic guide deeply committed to holding space for women during transitional life thresholds. Following her own physical and spiritual initiations, she founded EmbraceIN in Beverley, Sandton, to provide a refuge for women to reclaim their physical agency, navigate pregnancy, integrate IVF journeys, and move from a state of survival into deep embodiment. Her approach is physical, honest, and unshakeably grounded.",
    image: "/src/assets/images/sam_barker_1780136317054.png"
  },
  {
    name: "Lerato Sibanda",
    role: "Postpartum Advocate & Pediatric Somatics",
    energy: "Nurturing water, gentle rhythm, playful exploration.",
    bio: "Lerato is a maternal-infant health practitioner, certified postpartum doula, and children's yoga guide. Specialized in the vital 'fourth trimester' — the critical weeks after birth — Lerato steps into the home with ancestral wisdom, practical nourishment, and somatic touch. She helps mothers heal through nourishing womb foods, abdominal wrapping, and gentle nervous system re-patterning, whilst also leading children’s classes that celebrate natural, raw playfulness and bodily confidence.",
    image: "https://picsum.photos/seed/lerato_doula/400/500"
  },
  {
    name: "Chloe van der Merwe",
    role: "Somatic Massage Therapist & Sound Alchemist",
    energy: "Vibrant fire, resonant release, sensory integration.",
    bio: "Chloe is a therapeutic bodyworker, prenatal massage specialist, and sound therapist. Drawing from somatic release therapy, she specializes in relieving the deep physical armor that women carry in their pelvis, shoulders, and lower back. By combining deep, intuitive physical massage with low-frequency acoustic vibrations (sound baths), she facilitates a somatic drop that allows women to dissolve control, ground into their pelvic space, and witness their own inner alchemy.",
    image: "https://picsum.photos/seed/chloe_somatic/400/500"
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "doula-care",
    title: "Birth & Doula Support",
    shortDesc: "Comprehensive physical, active-labor, IVF, and postpartum guardianship.",
    longDesc: "Birth is not a clinical procedure to be managed; it is a profound physical, emotional, and spiritual threshold. Our doula services provide steady, unwavering companionship through every phase of this cycle. We do not stand between you and your choices; we bolster your authority, hold the gate, and protect your physical and psychic space so that you can surrender to the power of the passage.",
    image: "/src/assets/images/doula_support_1780136338126.png",
    offerings: [
      {
        title: "IVF & Conscious Conception Companioning",
        subtitle: "Somatic holding for the clinical journey",
        description: "The IVF path can feel sterile, cold, and profoundly disconnected from the sacred nature of creation. We bring warmth, embodiment, and sacred pacing back to the clinic. We accompany you to appointments, help you navigate hormones somatically, and hold space for the grief, fear, and tender hope that IVF carries.",
        experience: "A deep deceleration of the nervous system. Integrating medical checklists with intentional, physical breath anchors and body grounding so your womb remains a sanctuary, not just a clinical host.",
        details: [
          "Pre-retrieval and pre-transfer pelvic relaxation sessions",
          "Accompaniment and advocacy during egg retrievals and transfers in Johannesburg clinics",
          "Dedicated emotional container for processing the trial-and-error cycles"
        ],
        suitedFor: [
          "Women currently navigating or preparing for assisted reproductive technology (IVF, IUI)",
          "Those experiencing anxiety, dissociation, or loneliness during conception journeys"
        ]
      },
      {
        title: "Full-Spectrum Birth Guardianship",
        subtitle: "Continuous care from seed to sovereign birth",
        description: "A complete circle of protection for your pregnancy and delivery. We meet multiple times prenatally to map your fears, write a flexible birth plan, understand your body's pain navigation, and cultivate trust. We reside with you continuously once active labor begins — at home, in hospital, or water birth — anchoring your autonomy throughout.",
        experience: "A heavy, warm, physical anchor. A quiet voice pushing past noise, firm hands applying double hip squeezes in the peak of waves, and an unshakeable boundary in the birthing room.",
        details: [
          "3 deep in-person prenatal preparation sessions in Sandton studio/home",
          "Continuous on-call availability from 37 weeks until birth",
          "Uninterrupted physical and advocacy support throughout labor and initial skin-to-skin",
          "Postpartum check-in and birth integration within the first week"
        ],
        suitedFor: [
          "First-time mothers seeking an empowered, autonomous labor experience",
          "Vaginal Birth After Cesarean (VBAC) seekers needing high Advocacy",
          "Mothers wanting deep, non-medical pain coping strategies"
        ]
      },
      {
        title: "The Fourth Trimester: Postpartum Sanctuary",
        subtitle: "Guarding the rebirth of the mother",
        description: "When a baby is born, a mother is also born – and she is newborn. We step into your home in the delicate weeks post-birth to mother the mother. Rather than highlighting quick bounce-backs, we support slow integration through nourishing meals, belly wrapping, newborn support, and deep womb rest.",
        experience: "The smell of rich warming broths, the physical security of traditional Bengkung belly binding, and a warm, safe hands-off pocket of absolute quiet to sleep, bleed, and heal.",
        details: [
          "Ancestral postpartum nutrition: healing soups, teas, and warming porridges cooked in your kitchen",
          "Traditional postpartum abdominal wrapping (Bengkung or tailored elastic/linen)",
          "Candid, tender birth story integration sessions to process your delivery process"
        ],
        suitedFor: [
          "Mothers wishing to protect the sacred 40-day postpartum window",
          "Women without local family support in Johannesburg",
          "Those wanting a trauma-informed recovery after difficult or surgical births"
        ]
      }
    ]
  },
  {
    id: "yoga-somatics",
    title: "Yoga & Somatic Movement",
    shortDesc: "Classes built to root you back in the physical vessel of truth.",
    longDesc: "This is not dynamic exercise decorated with spiritual phrasing. Our classes focus on the felt experience from inside the skin. We use specific anatomical sequencing, heavy holds, and heavy sensory tracking to dissolve mental overdrive and anchor you deeply into your bones and womb cavity.",
    image: "/src/assets/images/yoga_meditation_1780136360919.png",
    offerings: [
      {
        title: "Prenatal & Sovereign Pregnancy Yoga",
        subtitle: "Preparing the physical clay of the body",
        description: "Movement tailored to build structural stamina, pelvis space, and muscle endurance needed for labor, while releasing the standard physical compression of pregnancy (sciatica, heavy back strain, tight hips). More than pelvic circles, this is an initiation into trusting intense sensory input.",
        experience: "Grounded standing postures, deep hip opening, and low guttural breath work. Strong but spacious, physical, and highly stabilizing.",
        details: [
          "Pelvic floor release and containment techniques",
          "Anatomical posturing to encourage optimal fetal positioning (optimal spinning babies)",
          "Labor breathing practices integrated directly into strong, physical holds"
        ],
        suitedFor: [
          "Pregnant women from 12 weeks to birth trying to find comfort inside their changes",
          "Mothers wanting to train their nervous system to stay quiet under heavy physical stimulation"
        ]
      },
      {
        title: "Yoni & Somatic Pelvic Reclamation",
        subtitle: "Reconnecting to the core seat of power",
        description: "A class focused purely on the pelvic bowl, womb space, and lower root. Combining somatic intuitive shaking, pelvic floor mapping, and myofascial release, this practice helps dissolve physical armor, chronic tension, and stored reproductive tracking or traumas. We hold space for the raw, real feminine current to circulate without shame.",
        experience: "Quiet, heavy, tactile exploration. Slower floor-based sequencing, physical pelvic tilts, and internal resonance tracking that moves past static mind chatter.",
        details: [
          "Pelvic floor tension mapping and somatic release",
          "Womb-heart connection flow mapping",
          "Intuitive breathing and nervous system soft-drops"
        ],
        suitedFor: [
          "Women struggling with sexual dissociation, pelvic pain, or lack of bodily vital sensation",
          "Those navigating postpartum scar tissue, menopause, or fertility grief"
        ]
      },
      {
        title: "Restorative Somatic Drop & Sound Alchemy",
        subtitle: "Surrender to the absolute pull of gravity",
        description: "The ultimate container for high-functioning, chronically exhausted women. We use heavy bolsters, physical wool blankets, and weights to support the body in passive postures for long periods, combined with low-frequency quartz and tibetan bowl sound therapy to trigger cell-level rest.",
        experience: "The complete release of holding yourself up. Weightless yet incredibly heavy; a velvet-like darkness of deep resonance and deep restoration.",
        details: [
          "Acoustic resonant sound therapy with deep somatic grounding",
          "Extended bolsters, heavy cotton sandbags, and warm weighted blankets",
          "Vagal system down-regulation and deep deep sleep trigger"
        ],
        suitedFor: [
          "Women dealing with adrenal fatigue, burnout, or chronic system hyper-vigilance",
          "Those who find 'sitting quiet' triggers severe restlessness"
        ]
      }
    ]
  },
  {
    id: "workshops-gatherings",
    title: "Empowerment & Sacred Circles",
    shortDesc: "Feminine empowerment workshops, circles, and community rites of passage.",
    longDesc: "When women gather intentionally, they step outside of linear time. Our workshops and circles in Beverley are sacred, heavy containers to celebrate, grieve, and mark life transitions. No superficial socializing — we gather to look each other in the eye, speak actual truth, and hold the thread of dynamic community support.",
    image: "/src/assets/images/community_circle_1780136382664.png",
    offerings: [
      {
        title: "Monthly Womb & Moon Fire Circles",
        subtitle: "Grounded thresholds to sync and release",
        description: "An intentional monthly gathering under the dark or full moon. Designed for women who seek raw sisterhood, ritual pacing, and a sacred container to speak unedited truth. We run somatic release exercises, guided visualization, and share open, confidential conversations around the fire.",
        experience: "Warm fireplace embers, scent of hand-pressed resins, collective deep breathing, and the unparalleled weight of shared unmasked truth.",
        details: [
          "Herbal tea ceremony and intentional somatic check-ins",
          "Somatic ritualized release ceremonies",
          "Uncensored sharing circle held under strict, secure confidentiality contracts"
        ],
        suitedFor: [
          "Women seeking deep, local community and non-clinical emotional support",
          "Those wanting a spiritual practice that respects their physical cyclical nature"
        ]
      },
      {
        title: "Sovereign First Menstruation (Menarche) & Teen Circles",
        subtitle: "Rewriting the pelvic story for the next generation",
        description: "A workshop design for young girls (ages 10-14) navigating their first bloods. We teach anatomical sovereignty, physical cycle respect, and self-advocacy in an atmosphere that celebrates bodily transitions with warmth, beauty, and absolute support, far from clinical dryness or school shame.",
        experience: "Soft, artistic, holding. Beautiful flowers, simple warm crafts, tactile guidance, and an absolute feeling of belonging and protection.",
        details: [
          "Anatomy of wonder: physical explanation of menstrual phases and cycles with fabric models",
          "Introduction to sustainable pelvic hygiene with somatic sensory choice",
          "Parent-child connection ceremony to celebrate the threshold"
        ],
        suitedFor: [
          "Young girls approaching or who have just entered menarche",
          "Parents looking for a sacred, grounded way to initiate their daughters into feminine cyclical health"
        ]
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "With Sam, I didn't just survive labor – I met myself in it. When the hospital room became loud and clinical hands rushed around, Sam's eyes were my visual horizon. Her double hip squeezes literally held my hips from breaking apart, and her deep, physical, ancient silence gave me the courage to bring my son into the world on my terms.",
    author: "Naledi Mabaso",
    location: "Sandown, JHB",
    context: "Full-Spectrum Birth Guardianship"
  },
  {
    quote: "Having Lerato in my home during the first 3 weeks postpartum was like being held by a warm, protective mountain. She cooked bone broths that warmed my very marrow, bound my aching belly every single morning, and held my baby so I could actually sleep. She saved me from the postpartum abyss.",
    author: "Caitlin Meyer",
    location: "Fourways, JHB",
    context: "Postpartum Sanctuary Care"
  },
  {
    quote: "My IVF journey felt like a mechanical assault on my femininity. Joining Samantha's pelvic reclamation classes reminded me that my body is still a sacred creation, not a biological laboratory. The physical warmth and the unedited tears allowed me to stay embodied enough to conceive on our fourth round.",
    author: "Zahra Patel",
    location: "Beverley, JHB",
    context: "IVF Companioning & Pelvic Somatics"
  },
  {
    quote: "Chloe's somatic massage plus sound alchemy is the only space where I can truly let go of my control. As a corporate executive and mother, I am always holding. In her studio, the weight of the world dissolves. It is highly tactile, powerful, and deeply therapeutic bodywork.",
    author: "Elena Petrova",
    location: "Bryanston, JHB",
    context: "Restorative Somatic Drop"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Where exactly are you located, and do you travel for doula support?",
    answer: "Our home studio space is nestled in the serene suburb of Beverley, Sandton (adjacent to Lonehill and Fourways, Johannesburg). Yoga classes, bodywork, and workshops are held here in this dedicated physical sanctuary. For birth doula support, we travel to homes, birth centers, and hospitals across Johannesburg Central, North, and West (including Sandton, Bryanston, Randburg, Parktown, and Rosebank).",
    category: "all"
  },
  {
    question: "Do you offer virtual/online support for those outside Johannesburg?",
    answer: "Yes. While our bodywork and birth attendances are physical and local, we offer remote IVF companioning, postpartum planning consultations, somatic breathing sequences, and one-on-one meditation integration virtually over secure video link for women across South Africa and internationally.",
    category: "all"
  },
  {
    question: "At what point in my pregnancy should I hire a birth doula?",
    answer: "Most women book our guardianship services between 12 and 24 weeks of pregnancy. This ensures we have ample time for our prenatal preparation sessions and allows us to cultivate a deep, sensory connection well before you enter labor. However, we also hold 1 or 2 slots per quarter for late-entry mothers (up to 34 weeks) if scheduling permits.",
    category: "doula"
  },
  {
    question: "I am having a planned Cesarean or hospital delivery. Can I still work with you?",
    answer: "Absolutely. A sovereign birth is defined by choice, not delivery style. We provide comprehensive companioning for planned Cesareans, epidural births, and clinical inductions. A doula is vital in hospital setups to help explain protocols in real-time, keep the nervous system grounded, set up sensory calming parameters (lighting, music, textures), and protect your golden-hour skin-to-skin experience.",
    category: "doula"
  },
  {
    question: "I have had fertility trauma and find traditional yoga spaces triggering. Is this safe?",
    answer: "Our classes are the antithesis of the toxic-positivity fitness yoga scene. Samantha-Lee and the team are trauma-informed guides. Every sequence is invitational, we never perform unsolicited physical adjustments, and we focus heavily on raw somatic feedback rather than achieving perfect postures. Your body is honored exactly as it arrives — heavy, tired, grieving, or blooming.",
    category: "yoga"
  },
  {
    question: "How do I book, and can I consult first before committing?",
    answer: "Yes, physical alignment is everything. We start all major journeys (especially doula care and somatic bodywork) with a complimentary 20-minute alignment phone call or herbal tea in our Beverley studio. This is an open space to feel our presence, ask honest questions, and ensure we are the right guardians for your threshold. Reach out directly via the email or phone links below to schedule a time.",
    category: "booking"
  }
];
