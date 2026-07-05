import styles from "./Bonuses.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function Bonuses() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          Genuine Betting IDs Bonuses – Complete Breakdown
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.badge}>CODE: TIGER500</div>
            <h3>500% Welcome Bonus</h3>
            <p>The highest welcome bonus in Indian online betting scene. Deposit up to ₹50,000</p>
            <ul className={styles.list}>
              <li>Deposit ₹500 & Play With ₹3,000</li>
              <li>Deposit ₹1,000 & Play With ₹6,000</li>
              <li>Deposit ₹5,000 & Play With ₹30,000</li>
              <li>Deposit ₹10,000 & Play With ₹60,000</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.badge}>DAILY CASHBACK</div>
            <h3>15% Daily Cashback</h3>
            <p>Every day at midnight we will credit back 15% of your daily net losses to your account</p>
            <ul className={styles.list}>
              <li>100% Auto-credited, No promo code needed</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.badge}>NO LIMIT</div>
            <h3>₹1,500 Referral Bonus</h3>
            <p>On every friend who deposits ₹500 or more, you get ₹1,500 instant payout</p>
            <ul className={styles.list}>
              <li>5 Friends = ₹7,500 Bonus</li>
              <li>20 Friends = ₹30,000 Bonus</li>
              <li>50 Friends = ₹75,000 Bonus</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
