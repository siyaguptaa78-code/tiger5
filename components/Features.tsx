import WhatsAppButton from "./WhatsAppButton";
import styles from "./Features.module.css";
import { SITE_CONFIG } from "@/config/constants";

const featuresData = [
  {
    title: "Verified Digital Identity",
    description: "Your official ID offers an authorized, trustworthy digital account that keeps all betting organized and fair.",
    icon: "✅"
  },
  {
    title: "Instant Tiger365 Pro ID",
    description: "Register and start betting on your favorite games in your 2 minutes. Get your verified betting ID with us today!",
    icon: "⚡"
  },
  {
    title: "Fast Payouts",
    description: "Same-day instant UPI and wallet transfers with zero delays and complete transparency.",
    icon: "💸"
  },
  {
    title: "Wide Betting Options",
    description: "Sports Exchange (Cricket, Tennis, Basketball) + Casino Exchange (Poker, Blackjack, Roulette)",
    icon: "🎯"
  },
  {
    title: "Encrypted Transactions",
    description: "Funds and account credentials are encrypted for ultimate security and to protect against unauthorized access.",
    icon: "🔒"
  },
  {
    title: "Track Records Anytime",
    description: "Data, login credentials and balance amount updated in real-time. Even if you log out, login from another device and access any game.",
    icon: "📱"
  },
  {
    title: "Exclusive Live Promos",
    description: "Enjoy daily welcome offers, color prediction bonuses and live game promotions.",
    icon: "🎁"
  },
  {
    title: "24/7 Live Support",
    description: "Chat with our customer support executives anytime directly on WhatsApp for instant assistance.",
    icon: "🤝"
  },
  {
    title: "Responsible Gaming",
    description: "Keeps you safe and promotes a risk-free betting environment.",
    icon: "🧠"
  }
];

export default function Features() {
  return (
    <section className={`section-padding ${styles.featuresSection}`} id="services">
      <div className="container">
        <h2 className="section-title text-center">
          Why Choose <span>{SITE_CONFIG.brand.name}</span>
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          A need of betting ID has become a necessary part while placing bets and enjoying your favorite games. Tiger365 pro ID is created in such a way that it provides users with the best feeling of security and excitement.
        </p>

        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <WhatsAppButton className={styles.largeCta}>
            Get Your Tiger365 Pro ID Instantly
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
