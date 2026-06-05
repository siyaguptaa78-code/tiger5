import styles from "./RegistrationSteps.module.css";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/constants";

export default function RegistrationSteps() {
  return (
    <section className={`section-padding ${styles.section}`} id="steps">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.contentCol}>
            <h2 className="section-title">
              How to Generate Your Tiger365 Pro ID
            </h2>
            <p className={styles.intro}>
              Obtaining an ID is the first and easiest step. With Tiger365 Pro ID, even a beginner can create their own account in minutes without any long, time-wasting steps.
            </p>
            
            <div className={styles.stepsList}>
              <div className={styles.step}>
                <h3>Step 1 – Go to Tiger365 Pro ID</h3>
                <p>Visit the official website of tiger365 pro ID. Avoid any duplicate or fake sites.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 2 – Sign In</h3>
                <p>Tap on Sign In and fill out the registration form to create an account.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 3 – Filling in Your Details</h3>
                <p>Fill up your personal information, which includes name, mobile number, and email.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 4 – Verify Your Information</h3>
                <p>The platform would verify whether the information is correct or not by verifying using code or OTP.</p>
              </div>

              <div className={styles.step}>
                <h3>Step 5 – Create a Password</h3>
                <p>A username will be generated, but a password will be required. Create a strong password that you can easily remember.</p>
              </div>

              <div className={styles.step}>
                <h3>Step 6 – Get Your ID</h3>
                <p>Your account will be created. Explore the website, games, features and your login page.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.imageCol}>
            <div className={styles.imageWrapper}>
              <Image 
                src={SITE_CONFIG.images.registrationBanner} 
                alt="Tiger365 Pro ID Registration Steps" 
                width={1000}
                height={500}
                className={styles.stepImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
