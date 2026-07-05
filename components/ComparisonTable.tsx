import styles from "./ComparisonTable.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function ComparisonTable() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          Genuine Betting IDs vs Other Id Providers
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          Indian online betting space has seen a surge in new platforms, but trust remains the ultimate currency. Take a detailed look at how we stack up against the competition.
        </p>

        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Feature</th>
                <th className={styles.highlightCol}>Genuine Betting IDs</th>
                <th>Others in Market</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Years in Operation</td>
                <td className={styles.highlightCol}>Since 2010 (13+ years)</td>
                <td>&lt;2 Years (Most)</td>
              </tr>
              <tr>
                <td>ID Activation Time</td>
                <td className={styles.highlightCol}>60 Seconds</td>
                <td>2 to 24 Hours</td>
              </tr>
              <tr>
                <td>Minimum Deposit</td>
                <td className={styles.highlightCol}>₹100</td>
                <td>₹500 to ₹1,000</td>
              </tr>
              <tr>
                <td>UPI Withdrawal Speed</td>
                <td className={styles.highlightCol}>Within 30 Minutes</td>
                <td>6 to 48 Hours</td>
              </tr>
              <tr>
                <td>Welcome Bonus</td>
                <td className={styles.highlightCol}>500% up to ₹50,000</td>
                <td>100% to 200%</td>
              </tr>
              <tr>
                <td>Daily Cashback</td>
                <td className={styles.highlightCol}>15%</td>
                <td>0% to 5%</td>
              </tr>
              <tr>
                <td>Support Availability</td>
                <td className={styles.highlightCol}>24/7 WhatsApp</td>
                <td>Business Hours Only</td>
              </tr>
              <tr>
                <td>User Rating</td>
                <td className={styles.highlightCol}>4.9 / 5</td>
                <td>3.5 to 4.2 / 5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
