import styles from "./WithdrawalProcess.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function WithdrawalProcess() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          Genuine Betting IDs Withdrawal Process – Fast, Transparent, Guaranteed
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          The most common concern any bettor has is “Will I actually get my money?” Well at Genuine Betting IDs, we give a loud YES to that question, and we do it with full speed, because we know that cash is the ultimate motivator for our members.
        </p>

        <div className={styles.methodsGrid}>
          <div className={styles.methodCard}>
            <div className={styles.icon}>📱</div>
            <h3>UPI (GPay, PhonePe, Paytm)</h3>
            <div className={styles.time}>Insta to 30 mins</div>
            <p>Most preferred withdrawal method due to high speed and availability across almost all smartphones in India</p>
          </div>
          
          <div className={styles.methodCard}>
            <div className={styles.icon}>🏦</div>
            <h3>Bank Transfer (NEFT/IMPS)</h3>
            <div className={styles.time}>1 to 2 hours</div>
            <p>For large withdrawals, or for members who prefer direct credit to their bank account, available 24/7</p>
          </div>

          <div className={styles.methodCard}>
            <div className={styles.icon}>₿</div>
            <h3>Crypto (USDT, Bitcoin)</h3>
            <div className={styles.time}>5 to 15 mins</div>
            <p>For members who want to withdraw directly to their crypto wallets, with super-fast confirmations</p>
          </div>
        </div>

        <div className={styles.recordsBox}>
          <h3>Verified Withdrawal Records</h3>
          <p className={styles.recordSub}>Real members withdrawing real money with Genuine Betting IDs</p>
          <ul className={styles.recordList}>
            <li><strong>Rajesh Sharma, Mumbai</strong> – ₹1,85,000 via UPI – 22 mins</li>
            <li><strong>Priya Singh, Delhi</strong> – ₹45,000 via Paytm – 11 mins</li>
            <li><strong>Suresh Patel, Bangalore</strong> – ₹2,50,000 via Bank Transfer – 18 mins</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
