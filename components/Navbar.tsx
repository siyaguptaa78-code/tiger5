"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoWrapper}>
            {/* Custom Cric Batsman Silhouette SVG */}
            <svg viewBox="0 0 100 100" className={styles.logoSvg}>
              <circle cx="50" cy="50" r="46" fill="url(#goldGrad)" stroke="var(--primary)" strokeWidth="2" />
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#111111" />
                  <stop offset="50%" stopColor="#1c1c1c" />
                  <stop offset="100%" stopColor="#0a0a0a" />
                </linearGradient>
              </defs>
              {/* Batsman Path */}
              <path d="M42,28 C45,28 46,25 44,22 C42,19 38,19 37,22 C36,25 39,28 42,28 Z M32,32 L44,28 L56,38 L62,48 L56,50 L52,42 L48,58 L54,78 L48,80 L42,62 L32,60 L28,78 L22,76 L30,48 L32,32 Z M65,18 L68,22 L46,40 L43,36 L65,18 Z" fill="var(--primary)" />
              <circle cx="68" cy="46" r="4" fill="#ffffff" />
              <path d="M68,46 Q58,52 46,55" stroke="#ffffff" strokeWidth="1" strokeDasharray="2,2" fill="none" />
            </svg>
            <div className={styles.logoTextWrapper}>
              <div className={styles.logoTextLine}>
                <span className={styles.logoReddy}>{SITE_CONFIG.brand.logoText1}</span>
                <span className={styles.logoAnna}>{SITE_CONFIG.brand.logoText2}</span>
              </div>
              <div className={styles.logoSub}>{SITE_CONFIG.brand.logoSub}</div>
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.desktopNav}>
          <Link href="#home">Home</Link>
          <a href={`${SITE_CONFIG.whatsappLink}?text=Hi! I want my 1xBet ID.`} target="_blank" rel="noopener noreferrer">1xBet</a>
          <a href={`${SITE_CONFIG.whatsappLink}?text=Hi! I want my Fairplay24 ID.`} target="_blank" rel="noopener noreferrer">Fairplay24</a>
          <a href={`${SITE_CONFIG.whatsappLink}?text=Hi! I want my Fairplay4 ID.`} target="_blank" rel="noopener noreferrer">Fairplay4</a>
          <Link href="#about">Genuine Betting IDs</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <div className={styles.navActions}>
          <WhatsAppButton variant="outline" className={styles.desktopBtn}>Sign Up</WhatsAppButton>
          <WhatsAppButton className={styles.desktopBtn}>Login</WhatsAppButton>
          
          <button 
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="#home" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <a href={`${SITE_CONFIG.whatsappLink}?text=Hi! I want my 1xBet ID.`} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>1xBet</a>
          <a href={`${SITE_CONFIG.whatsappLink}?text=Hi! I want my Fairplay24 ID.`} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Fairplay24</a>
          <a href={`${SITE_CONFIG.whatsappLink}?text=Hi! I want my Fairplay4 ID.`} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>Fairplay4</a>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)}>Genuine Betting IDs</Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <div className={styles.mobileActions}>
             <WhatsAppButton variant="outline">Sign Up</WhatsAppButton>
             <WhatsAppButton>Login</WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
