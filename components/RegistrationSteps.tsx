import styles from "./RegistrationSteps.module.css";
import WhatsAppButton from "./WhatsAppButton";

export default function RegistrationSteps() {
  return (
    <section className={`section-padding ${styles.section}`} id="steps">
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title text-center">
            Get Your Tiger365 Pro ID
          </h2>
          <p className={`text-center ${styles.subtitle}`}>
            A simple, secure, and fast process to access premium gaming.
          </p>
        </div>

        <div className={styles.processGrid}>
          <div className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>01</span>
              <span className={styles.stepIcon}>🌐</span>
            </div>
            <h3>Open Platform</h3>
            <p>Access the official Tiger365 Pro ID registration portal.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>02</span>
              <span className={styles.stepIcon}>🔑</span>
            </div>
            <h3>Sign In</h3>
            <p>Begin the secure account creation process.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>03</span>
              <span className={styles.stepIcon}>📝</span>
            </div>
            <h3>Details</h3>
            <p>Provide your basic profile information.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>04</span>
              <span className={styles.stepIcon}>✅</span>
            </div>
            <h3>Verify</h3>
            <p>Confirm your identity through secure OTP verification.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>05</span>
              <span className={styles.stepIcon}>🔐</span>
            </div>
            <h3>Password</h3>
            <p>Set a strong, unique password for your account.</p>
          </div>

          <div className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepNumber}>06</span>
              <span className={styles.stepIcon}>🎉</span>
            </div>
            <h3>ID Ready</h3>
            <p>Your Tiger365 Pro ID is now active and ready to use.</p>
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <WhatsAppButton className={styles.primaryCta}>
            Get Tiger365 Pro ID Now
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
