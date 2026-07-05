import styles from "./ResponsibleGaming.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function ResponsibleGaming() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.warningHeader}>
            <span className={styles.icon}>⚠️</span>
            <h2>Responsible Gaming – Read Before You Start</h2>
          </div>

          <div className={styles.content}>
            <p className={styles.intro}>
              Genuine Betting IDs is an entertainment service and betting involves real money. We encourage responsible gaming and ask that you gamble only with money that you are willing to spend and within your means. If you feel that you have a problem, please seek help and do not continue betting.
            </p>

            <div className={styles.grid}>
              <div className={styles.col}>
                <h3>Before You Start Betting, Remember:</h3>
                <ul className={styles.list}>
                  <li>Only bet with money you are prepared to lose without financial strain</li>
                  <li>Set a deposit limit for yourself and stick to it</li>
                  <li>If you have a losing streak, do not chase losses by depositing more money</li>
                  <li>Always take breaks, especially during live betting</li>
                  <li>If betting is negatively affecting your life, stop immediately and seek help</li>
                </ul>
              </div>

              <div className={styles.col}>
                <p className={styles.age}>
                  This site is for users 18 years or older only. By using this site, you agree to our terms and conditions and acknowledge that you have read and understood the responsible gaming information provided.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
