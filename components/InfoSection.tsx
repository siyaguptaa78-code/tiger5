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
            SECTION 1: WHAT IS TIGER365 PRO ID
            ========================================== */}
        <div className={styles.twoColumnGrid}>
          <div className={styles.textColumn}>
            <div className={styles.headerHighlight}>
              <h2>What is Tiger365 Pro ID?</h2>
            </div>
            <p className={styles.introParagraph}>
              Tiger365 Pro ID is your secure digital passport to premium sports betting and live casino entertainment. It acts as a single, verified identity that provides seamless access to world-class platforms.
            </p>
            
            <div className={styles.highlightsList}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>🔒</span>
                <div>
                  <strong>Personal Account</strong>
                  <p>Secure, private access to all betting markets.</p>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>⚡</span>
                <div>
                  <strong>Instant Login Access</strong>
                  <p>One-click entry to sports and casino lobbies.</p>
                </div>
              </div>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>📊</span>
                <div>
                  <strong>Activity Tracking</strong>
                  <p>Real-time monitoring of all your transactions.</p>
                </div>
              </div>
            </div>
            
            <div className={styles.btnRowOne}>
              <WhatsAppButton className="btn-red-action">
                Create Pro ID Now
              </WhatsAppButton>
            </div>
          </div>

          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src={SITE_CONFIG.images.heroBanner}
                alt="Tiger365 Pro ID"
                width={1000}
                height={500}
                className={styles.idImg}
              />
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 2: HOW IT WORKS (TIMELINE)
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.timelineHeader}>
            <h2 className={styles.introTitle}>How Tiger365 Pro ID Works</h2>
            <p className={styles.subtitle}>A seamless process from registration to premium gaming access.</p>
          </div>
          
          <div className={styles.timeline}>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.stepContent}>
                <h4>Registration</h4>
                <p>Provide basic details to create your secure digital profile.</p>
              </div>
            </div>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.stepContent}>
                <h4>ID Generation</h4>
                <p>Instant generation of your unique Tiger365 Pro ID credentials.</p>
              </div>
            </div>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.stepContent}>
                <h4>Verification & Login</h4>
                <p>Secure authentication for safe platform access.</p>
              </div>
            </div>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>04</div>
              <div className={styles.stepContent}>
                <h4>System Records</h4>
                <p>Automatic maintenance of all your betting activities.</p>
              </div>
            </div>
            <div className={styles.timelineStep}>
              <div className={styles.stepNumber}>05</div>
              <div className={styles.stepContent}>
                <h4>Safety & Clarity</h4>
                <p>Encrypted data protection ensuring complete privacy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 3: PLATFORM OVERVIEW
            ========================================== */}
        <div className={styles.idSectionBox}>
          <div className={styles.timelineHeader}>
            <h2 className={styles.introTitle}>Platform Overview</h2>
          </div>
          
          <div className={styles.overviewGrid}>
            <div className={styles.overviewMain}>
              <div className={styles.overviewImageWrapper}>
                <Image
                  src={SITE_CONFIG.images.banners.banner1.src}
                  alt="Sports Exchange"
                  width={SITE_CONFIG.images.banners.banner1.width}
                  height={SITE_CONFIG.images.banners.banner1.height}
                  className={styles.idImg}
                />
              </div>
              <div className={styles.overviewContent}>
                <h3>Sports Exchange</h3>
                <p>Access premium odds across global sporting events including Cricket, Tennis, and Football.</p>
              </div>
            </div>
            
            <div className={styles.overviewSecondaryCol}>
              <div className={styles.overviewCard}>
                <div className={styles.overviewCardContent}>
                  <h3>Casino Exchange</h3>
                  <p>World-class casino lobbies featuring hundreds of premium games.</p>
                </div>
              </div>
              <div className={styles.overviewCard}>
                <div className={styles.overviewCardContent}>
                  <h3>Live Gaming</h3>
                  <p>Real-time dealers and interactive live entertainment experiences.</p>
                </div>
              </div>
              <div className={styles.overviewCardDark}>
                <div className={styles.overviewCardContent}>
                  <h3>Safety & Account Info</h3>
                  <p>Military-grade encryption securing all your personal information and transaction data.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

