import WhatsAppButton from "./WhatsAppButton";
import styles from "./Features.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function Features() {
  return (
    <section className={`section-padding ${styles.featuresSection}`} id="services">
      <div className="container">
        <h2 className="section-title text-center">
          Why Choose <span>{SITE_CONFIG.brand.name}</span>
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          The most secure, fast, and reliable digital identity for premium sports betting and live casino access.
        </p>

        <div className={styles.benefitsGrid}>
          {/* Featured Primary Benefit */}
          <div className={styles.featuredCard}>
            <div className={styles.featuredContent}>
              <div className={styles.iconLarge}>⚡</div>
              <h3>Instant Tiger365 Pro ID</h3>
              <p>
                Get your verified betting ID within minutes. A single secure account provides unrestricted access to multiple premium gaming platforms, sports exchanges, and exclusive live lobbies. No waiting, no complex verification—start playing immediately.
              </p>
              <ul className={styles.featureBullets}>
                <li>Instant Activation</li>
                <li>One-Click Access</li>
                <li>Universal Login</li>
              </ul>
            </div>
          </div>

          {/* Secondary Benefits */}
          <div className={styles.secondaryGrid}>
            <div className={styles.card}>
              <div className={styles.icon}>🔒</div>
              <h3>Encrypted Transactions</h3>
              <p>Military-grade encryption protects your funds and personal information. 100% secure deposits and withdrawals.</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.icon}>🎯</div>
              <h3>Wide Betting Options</h3>
              <p>Access hundreds of sports markets and premium casino lobbies from a single unified digital identity.</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.icon}>🤝</div>
              <h3>24/7 Priority Support</h3>
              <p>Direct WhatsApp access to our customer success team any time of day for instant issue resolution.</p>
            </div>
            
            <div className={styles.card}>
              <div className={styles.icon}>✅</div>
              <h3>Verified Identity</h3>
              <p>Your official ID guarantees a trustworthy environment with fair play and completely transparent track records.</p>
            </div>
          </div>
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
