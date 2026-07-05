import WhatsAppButton from "./WhatsAppButton";
import styles from "./HeroSection.module.css";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.content}`}>
        <h1 className={`${styles.title} animate-fade-in`}>
          TIGER365 PRO ID – <span className={styles.accent}>ULTIMATE GUIDE</span> TO ONLINE BETTING
        </h1>
        
        <div className={`${styles.bannerWrapper} animate-fade-in animate-delay-1`}>
          <Image 
            src={SITE_CONFIG.images.heroBanner} 
            alt="Tiger365 Pro ID Official Banner" 
            width={1000}
            height={500}
            priority
            className={styles.mainBanner}
          />
        </div>
        
        <p className={`${styles.subtitle} animate-fade-in animate-delay-2`}>
          A need of betting ID has become a necessary part while placing bets and enjoying your favorite games. Tiger365 pro ID is created in such a way that it provides users with the best feeling of security and excitement.
        </p>
        
        <div className={`${styles.ctaGroup} animate-fade-in animate-delay-3`}>
          <WhatsAppButton className={styles.mainCta}>
            👉 Buy Tiger365 Pro ID Here 👈
          </WhatsAppButton>
          <WhatsAppButton variant="outline" className={styles.secondaryCta}>
            👉 Chat With Genuine Betting IDs 👈
          </WhatsAppButton>
        </div>
        
        <div className={`${styles.stats} animate-fade-in animate-delay-3`}>
          <div className={styles.statItem}>
            <h3>1,00,000+</h3>
            <p>Active Bettors</p>
          </div>
          <div className={styles.statItem}>
            <h3>24/7</h3>
            <p>Live Chat Support</p>
          </div>
          <div className={styles.statItem}>
            <h3>60 Sec</h3>
            <p>ID Generation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
