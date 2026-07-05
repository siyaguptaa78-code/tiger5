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
              Instructions To Generate Your Tiger365 Pro ID
            </h2>
            <p className={styles.intro}>
              An ID is the first step toward making things easier and more convenient. With Tiger365 Pro ID, anyone can open their account within minutes without having to go through a long and tedious process.
            </p>
            
            <div className={styles.stepsList}>
              <div className={styles.step}>
                <h3>Step 1 – Open Tiger365 Pro ID</h3>
                <p>Go to the official website of tiger365 pro ID. Avoid using any third-party sites as they might be fraudulent.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 2 – Sign In</h3>
                <p>Click on Sign In and complete the registration form to create your account.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 3 – Fill In Your Details</h3>
                <p>Provide your personal details including your name, mobile number and email id.</p>
              </div>
              
              <div className={styles.step}>
                <h3>Step 4 – Verify Your Details</h3>
                <p>Once you are done filling the form, the website will verify your details through a code or OTP.</p>
              </div>

              <div className={styles.step}>
                <h3>Step 5 – Set Up A New Password</h3>
                <p>You will be provided with a username, however, you will have to set up a new password. Ensure to set up a strong password that you will be able to remember easily.</p>
              </div>

              <div className={styles.step}>
                <h3>Step 6 – Obtain Your ID</h3>
                <p>Your account has been created. You can browse the website, access the games, features and your login portal.</p>
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
