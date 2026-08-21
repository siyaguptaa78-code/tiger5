"use client";
import { useState } from "react";
import styles from "./FAQSection.module.css";
import { SITE_CONFIG } from "@/config/constants";

const faqs = [
  {
    q: `What is ${SITE_CONFIG.brand.name}?`,
    a: `Tiger365 Pro ID is your secure, unified digital identity providing instant access to premium sports betting exchanges and live casino platforms with 24/7 customer support.`
  },
  {
    q: `How do I get a Tiger365 Pro ID?`,
    a: `Click any "Get ID" or WhatsApp button on our page, enter your basic details, and receive your verified login credentials securely.`
  },
  {
    q: "What payment methods are supported?",
    a: "We support major secure payment methods including UPI (GPay, PhonePe, Paytm), direct bank transfers, and cryptocurrency for deposits and withdrawals."
  },
  {
    q: "Can I access the platform on my mobile device?",
    a: "Yes. Our platform is fully optimized for all mobile browsers, providing a seamless experience without requiring any app downloads."
  },
  {
    q: "What is the age requirement to use this platform?",
    a: "You must be 18 years or older to register and use our services. Age verification is a mandatory part of our secure registration process."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          Frequently Asked Questions
        </h2>
        
        <div className={styles.faqWrapper}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
            >
              <div 
                className={styles.faqQuestion} 
                onClick={() => toggleFaq(index)}
              >
                <h3>{faq.q}</h3>
                <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
              </div>
              <div className={styles.faqAnswer}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
