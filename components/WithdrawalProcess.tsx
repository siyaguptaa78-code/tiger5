import styles from "./WithdrawalProcess.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function WithdrawalProcess() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          Payment & Withdrawal Information
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          Tiger365 Pro ID supports multiple secure payment methods to ensure smooth deposits and withdrawals for all users.
        </p>

        <div className={styles.methodsGrid}>
          <div className={styles.methodCard}>
            <div className={styles.icon}>📱</div>
            <h3>UPI Payments</h3>
            <p>Support for major UPI applications including GPay, PhonePe, and Paytm. A convenient method for quick transactions.</p>
          </div>
          
          <div className={styles.methodCard}>
            <div className={styles.icon}>🏦</div>
            <h3>Bank Transfer</h3>
            <p>Direct bank transfers (NEFT/IMPS) available for secure, direct account routing.</p>
          </div>

          <div className={styles.methodCard}>
            <div className={styles.icon}>₿</div>
            <h3>Cryptocurrency</h3>
            <p>Support for major cryptocurrencies including USDT and Bitcoin for enhanced privacy and security.</p>
          </div>
        </div>

        <div className={styles.securityBox}>
          <h3>Committed to Security</h3>
          <p>
            All transactions are processed through encrypted channels. We prioritize the security of your funds and the privacy of your financial information.
          </p>
        </div>
      </div>
    </section>
  );
}
