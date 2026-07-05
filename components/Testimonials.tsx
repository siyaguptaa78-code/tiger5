import styles from "./Testimonials.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function Testimonials() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          What Our Members Say About Genuine Betting IDs
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              “I have been using Genuine Betting IDs for 3 IPL seasons. Withdrawals are super fast on this site, I have never had to wait for more than 20 minutes for a UPI withdrawal. I recommended this to 4 of my friends and they all had the same great experience. Trust me, this is the only online betting ID I use now.”
            </p>
            <div className={styles.author}>
              <h4>Vikram Mehta</h4>
              <span>Hyderabad</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              “I was really hesitant to deposit money into any online betting site since I got scammed on a telegram channel. But my friend suggested I try Genuine Betting IDs and I’m so glad he did. I deposited ₹100, placed a few bets on CSK matches and won ₹3,400 which I received in my paytm wallet within 15 minutes!”
            </p>
            <div className={styles.author}>
              <h4>Sneha Iyer</h4>
              <span>Chennai</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              “I started with ₹100 deposits because that was the minimum deposit amount here. I was not comfortable doing ₹1,000 deposits on a new site. But after 3 months I have grown as a regular member and withdrawn over ₹40,000 from the platform. I have to say, playing live sports betting on IPL matches is awesome here.”
            </p>
            <div className={styles.author}>
              <h4>Arjun Kapoor</h4>
              <span>Jaipur</span>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>
              “I had a few questions about the live login registration and the support team responded to me on whatsapp within seconds. My betting id was ready to use within a minute. Honestly, this made other companies look really bad in comparison.”
            </p>
            <div className={styles.author}>
              <h4>Ravi Verma</h4>
              <span>Pune</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
