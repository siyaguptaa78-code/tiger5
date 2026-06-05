import WhatsAppButton from "./WhatsAppButton";
import styles from "./Features.module.css";
import { SITE_CONFIG } from "@/config/constants";

const featuresData = [
  {
    title: "Verified Digital Identity",
    description: "Your official ID acts as a secure, verified digital account to keep betting organized and fair.",
    icon: "✅"
  },
  {
    title: "Instant Tiger365 Pro ID",
    description: "Register and start betting on your favorite games in under 2 minutes.",
    icon: "⚡"
  },
  {
    title: "Fast Payouts",
    description: "Same-day instant UPI and wallet transfers with zero delay and complete clarity.",
    icon: "💸"
  },
  {
    title: "Wide Betting Options",
    description: "Access Sports Exchange (Cricket, Tennis, Basketball) and Casino Exchange (Poker, Blackjack, Roulette).",
    icon: "🎯"
  },
  {
    title: "Encrypted Transactions",
    description: "Funds and credentials remain encrypted and protected against suspicious activities.",
    icon: "🔒"
  },
  {
    title: "Track Records Anytime",
    description: "Your login records, data, and balance history are updated in real-time, even if you switch devices.",
    icon: "📱"
  },
  {
    title: "Exclusive Live Promos",
    description: "Get welcome offers, color prediction bonuses, and live sports promotions.",
    icon: "🎁"
  },
  {
    title: "24/7 Live Support",
    description: "Reach our support team anytime directly via WhatsApp chat for instant troubleshooting.",
    icon: "🤝"
  },
  {
    title: "Responsible Gaming",
    description: "Ensuring a safe, risk-free, and healthy gaming experience for all members.",
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
          Experience the ultimate guide to online betting with Tiger365 Pro ID.
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
