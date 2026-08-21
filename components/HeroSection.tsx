import WhatsAppButton from "./WhatsAppButton";
import styles from "./HeroSection.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.backgroundGlow} />
      <div className={`container ${styles.content}`}>
        <div className={styles.textContent}>
          <h1 className={`${styles.title} animate-fade-in`}>
            YOUR PREMIUM <span className={styles.accent}>TIGER365</span> PRO ID
          </h1>
          
          <p className={`${styles.subtitle} animate-fade-in animate-delay-1`}>
            Access world-class sports betting, live exchange markets, and premium casino lobbies with a single, secure digital identity. Instant generation and 24/7 dedicated support.
          </p>
          
          <div className={`${styles.ctaGroup} animate-fade-in animate-delay-2`}>
            <WhatsAppButton className={styles.mainCta}>
              Get Tiger365 Pro ID
            </WhatsAppButton>
            <WhatsAppButton variant="outline" className={styles.secondaryCta}>
              Contact Support
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
