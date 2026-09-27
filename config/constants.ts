export const SITE_CONFIG = {
  brand: {
    name: "Tiger365 Pro ID",
    logoText1: "TIGER365",
    logoText2: "PRO ID",
    logoSub: "— PREMIUM ACCESS —"
  },

  // ==========================================
  // THEME CONFIGURATION & PRESETS
  // ==========================================
  theme: {
    // Reference Site Color Palette (Black & Gold/Yellow)
    primary: "#f3c242",
    primaryHover: "#f2b827",
    primaryRgb: "243, 194, 66",
    background: "#000000",
    secondary: "#131313",
    foreground: "#ffffff",
    textPrimary: "#ffffff",
    textSecondary: "rgba(255, 255, 255, 0.8)",
    textMuted: "rgba(255, 255, 255, 0.6)",
    border: "#222222",
  },

  description: "Learn about Tiger365 Pro ID, login access, sports betting markets, casino games, payment methods and responsible gaming information.",
  whatsappNumber: "918360750829",
  whatsappLink: "https://wa.me/918360750829",
  url: "https://tiger365login.com",

  // ==========================================
  // IMAGES CONFIGURATION
  // ==========================================
  images: {
    heroBanner: "https://genuinebettingids.com/wp-content/uploads/2025/11/Tiger365-Pro-ID-.webp",
    registrationBanner: "https://genuinebettingids.com/wp-content/uploads/2025/11/Tiger365-Pro-ID-.webp",
    banners: {
      banner1: {
        src: "https://genuinebettingids.com/wp-content/uploads/2025/11/Tiger365-Pro-ID-.webp",
        alt: "Tiger365 Pro ID Ultimate Guide to Online Betting",
        width: 1000,
        height: 500
      },
      banner2: {
        src: "https://genuinebettingids.com/wp-content/uploads/2025/11/Tiger365-Pro-ID-.webp",
        alt: "Bonuses and Rewards Banner",
        width: 1000,
        height: 500
      },
      banner3: {
        src: "https://genuinebettingids.com/wp-content/uploads/2025/11/Tiger365-Pro-ID-.webp",
        alt: "Join Now Banner",
        width: 1000,
        height: 500
      }
    }
  },

  // ==========================================
  // LAYOUT CONFIGURATION & PRESETS
  // ==========================================
  // You can change the order of the sections, shuffle them, or disable some.
  // Available section IDs:
  // - "hero"          (Hero banner, subtitle, CTA buttons, stats)
  // - "registration"  (How to register in 60 seconds list & steps banner)
  // - "banner1"       (First wide image banner - Live Sports Coverage)
  // - "features"      (6 cards explaining benefits - e.g. Daily Cashback, Human support)
  // - "info"          (About Reddy Anna detailed text sections)
  // - "sports"        (Sports coverage list: Cricket, Tennis, Soccer, Live Casino etc.)
  // - "withdrawal"    (Withdrawal process steps & direct proof box)
  // - "banner2"       (Second wide image banner - Bonuses & Rewards)
  // - "bonuses"       (Bonus details table - Welcome Bonus, Deposit Bonus etc.)
  // - "comparison"    (Reddy Anna vs other platforms comparison table)
  // - "banner3"       (Third wide image banner - Join Now)
  // - "faq"           (Accordions containing questions and answers)
  // - "testimonials"  (User testimonials/reviews cards)
  // - "responsible"   (Responsible gaming warning footer section)

  layout: {
    // PRESET A: Classic Layout (Standard Landing Order)
    // sectionOrder: [
    //   "hero",
    //   "registration",
    //   "banner1",
    //   "sports",
    //   "withdrawal",
    //   "banner2",
    //   "bonuses",
    //   "comparison",
    //   "banner3",
    //   "faq",
    //   "testimonials",
    //   "responsible"
    // ],

    // PRESET B: Shuffled Content Sections (More info upfront)
    // sectionOrder: [
    //   "hero",
    //   "info",
    //   "features",
    //   "banner1",
    //   "registration",
    //   "sports",
    //   "withdrawal",
    //   "banner2",
    //   "bonuses",
    //   "comparison",
    //   "banner3",
    //   "faq",
    //   "testimonials",
    //   "responsible"
    // ],

    // PRESET C: Trust & Conversion Focused (Active - Highlights comparison & bonuses immediately)
    sectionOrder: [
      "hero",
      "sports",
      "info",
      "features",
      "banner1",
      "registration",
      "withdrawal",
      "bonuses",
      "comparison",
      "faq",
      "responsible"
    ]
  }
};

