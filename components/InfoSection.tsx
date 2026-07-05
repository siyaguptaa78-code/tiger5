"use client";
import React from "react";
import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./InfoSection.module.css";

export default function InfoSection() {
  return (
    <section className={`section-padding ${styles.infoSection}`} id="about">
      <div className="container">
        
        {/* ==========================================
            SECTION 1: BASICS OF TIGER365 PRO ID
            ========================================== */}
        <div className={styles.introBox}>
          <h2 className={styles.introTitle}>
            Basics of Tiger365 Pro ID
          </h2>
          <div className={styles.introTextWrapper}>
            <p className={styles.introParagraph}>
              A need of betting ID has become a necessary part while placing bets and enjoying your favorite games. Tiger365 pro ID is created in such a way that it provides users with the best feeling of security and excitement. It provides a verified identity to the users which becomes the part of their digital account. It will help in keeping things organized and maintain a certain level of integrity. The article below will provide our valued customers with the ultimate guide on tiger365 pro ID.
            </p>
            <p className={styles.introParagraph}>
              Before heading towards the need of an ID, it is essential to know about the basics of Tiger365 pro. Earlier when no one had an idea of a betting ID, people used to play without knowing the exact concept of online identification, which, in fact, is not a good option. Nowadays, people are given online access where they are provided with certain IDs. One of them is tiger365 pro ID. It acts as a personal identification at an online betting platform. It works more or less like your digital account where you can manage everything. The main aim of providing a betting ID to every user is to keep things secure and maintain a certain level of organization.
            </p>
            <p className={styles.introParagraph}>
              A need of that ID may also increase the feeling of trust and reliability among the users. For a newbie, it becomes important to have a basic knowledge of an online identification system. It helps keep track of all the data and information related to the game. All the data from the account, including game updates, deposits, transactions, etc., are saved in it. It is a simple and easy process which requires some level of understanding. Anyone can have it, irrespective of their experience in the domain.
            </p>
          </div>

          <div className={styles.btnRowOne}>
            <WhatsAppButton className="btn-red-action">
              📲 Create Tiger365 Pro ID
            </WhatsAppButton>
            <WhatsAppButton className="btn-green-action">
              💬 Get ID on WhatsApp
            </WhatsAppButton>
            <WhatsAppButton className="btn-gray-action">
              📞 Contact Official Support
            </WhatsAppButton>
          </div>
        </div>

        {/* ==========================================
            SECTION 2: LEARNING THE WORKING OF TIGER365 PRO ID
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  src={SITE_CONFIG.images.heroBanner}
                  alt="Working of Tiger365 Pro ID"
                  width={1000}
                  height={500}
                  className={styles.idImg}
                />
              </div>
            </div>

            <div className={styles.textColumn}>
              <div className={styles.headerHighlight}>
                <h3>Learning Working Of Tiger365 Pro ID</h3>
              </div>
              <p className={styles.idLeadText}>
                Following the same pattern of betting ID, we will be moving further toward learning the working process of tiger365 pro ID. So, in order to have an accurate idea, it becomes essential to follow certain steps listed below:
              </p>
              
              <ul className={styles.checklist}>
                <li>
                  <span className={styles.bulletCheck}>1.</span>
                  <span><strong>Registration –</strong> It is the primary step where one has to create an account by filling the registration form with relevant information and details, including personal info like a name, DOB, email address, and mobile number. Apart from keeping things organized, it also helps one to identify themselves on this platform.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>2.</span>
                  <span><strong>ID generation –</strong> After registration, a user is required to create a user ID and a password to log in to his/her account. This step is crucial as an ID is generated automatically, which will work as one’s personal identification.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>3.</span>
                  <span><strong>Verification and login –</strong> Creating a user ID is not enough. Prior to every transaction and login, a user has to go through a verification process to ensure that he/she is a real-time user</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>4.</span>
                  <span><strong>Maintenance of system records –</strong> This is the step where all the essential activities are performed. The records of every user, ranging from login details to game activities and other relevant data, are maintained to ensure safety and authenticity.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>5.</span>
                  <span><strong>Ensuring safety and clarity –</strong> The working process finally comes down to maintaining the level of security. In this regard, an online ID provides the best features that make one feel safe and secure while using it. It ensures that all the data transactions and other important credentials are kept safe and sound.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 3: ADVANTAGES YOU SHOULD KNOW ABOUT TIGER365 PRO ID
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.textColumn}>
              <div className={styles.headerHighlight}>
                <h3>Benefits Of Tiger365 Pro ID</h3>
              </div>
              <p className={styles.idLeadText}>
                As discussed earlier, it is vital to have a personal ID that offers a wide range of benefits to the users. The tiger365 pro ID, in particular, offers a lot of advantages; some of them are enlisted below:
              </p>
              
              <ul className={styles.checklist}>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span><strong>Personal identification –</strong> After having created their personal ID, every user can manage his/her account independently without relying on someone else. It can be used anywhere and anytime with personal information.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span><strong>Track record anytime –</strong> Whether one is logged out or using someone else’s phone, he/she can track his/her activity. It also helps in keeping a check on the data; the transactions are done, including deposits and withdrawals.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span><strong>Easy login –</strong> As an account holder, anyone can log in by providing their user ID and password. The information is stored within the site itself for easy accessibility.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>✓</span>
                  <span><strong>Risk-proof and protected transactions –</strong> This feature is mainly concerned with the fund transfer. It helps in managing the deposits and withdrawals safely. Every transaction is recorded, and instant notification is provided for each activity.</span>
                </li>
              </ul>
            </div>

            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  src={SITE_CONFIG.images.registrationBanner}
                  alt="Advantages of Tiger365 Pro ID"
                  width={1000}
                  height={500}
                  className={styles.idImg}
                />
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 4: LIST OF THINGS INSIDE THE PLATFORM
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.twoColumnGrid}>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  src={SITE_CONFIG.images.banners.banner1.src}
                  alt="Inside the Platform"
                  width={SITE_CONFIG.images.banners.banner1.width}
                  height={SITE_CONFIG.images.banners.banner1.height}
                  className={styles.idImg}
                />
              </div>
            </div>

            <div className={styles.textColumn}>
              <div className={styles.headerHighlight}>
                <h3>List Of Things Inside The Platform</h3>
              </div>
              <p className={styles.idLeadText}>
                The tiger365 pro ID official site provides its users with a wide range of options, including:
              </p>
              
              <ul className={styles.checklist}>
                <li>
                  <span className={styles.bulletCheck}>•</span>
                  <span><strong>Sports Exchange –</strong> A wide range of sports betting options, including Basket Ball, Cricket, Tennis, etc., are available.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>•</span>
                  <span><strong>Casino Exchange –</strong> A wide range of casino games like Poker, Blackjack, and Roulette is available.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>•</span>
                  <span><strong>Live Gaming Experience –</strong> Get the best live gaming experience where one can play competitive games and bet on live running matches along with the latest score updates, multipliers, and many more.</span>
                </li>
                <li>
                  <span className={styles.bulletCheck}>•</span>
                  <span><strong>Safety –</strong> Every activity is kept safe and sound with the transparency and immediacy of verification of each user’s ledger.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 5: CONCLUDING TIGER365 PRO ID
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.introBox} style={{ marginBottom: 0, marginTop: '2rem' }}>
            <h3 className={styles.introTitle} style={{ fontSize: '2rem' }}>
              Concluding Tiger365 Pro ID
            </h3>
            <p className={styles.introParagraph}>
              Thus, it can be concluded that the article provided our valuable customers with an ultimate guide on the basics, working process, application, and benefits related to tiger365 pro ID.
            </p>
            <p className={styles.introParagraph} style={{ fontWeight: 'bold', color: 'var(--primary)' }}>
              For more details, stay tuned with Genuinebettingids.com
            </p>
            <div className={styles.btnRowTwo}>
              <WhatsAppButton className={styles.largeChatBtn}>
                💬 Chat With Us On WhatsApp For Instant ID
              </WhatsAppButton>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
