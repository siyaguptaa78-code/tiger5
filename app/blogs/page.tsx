import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./blogs.module.css";
import { SITE_CONFIG } from "@/config/constants";

export const metadata: Metadata = {
  title: `Latest Cricket Blogs & Guides | ${SITE_CONFIG.brand.name}`,
  description: "Read the latest news, updates, cricket tournament summaries, and expert betting guides.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: `Latest Cricket Blogs & Guides | ${SITE_CONFIG.brand.name}`,
    description: "Read the latest news, updates, cricket tournament summaries, and expert betting guides.",
    url: `${SITE_CONFIG.url}/blogs`,
    siteName: "Genuine Betting IDs",
    locale: "en_IN",
    type: "website",
  },
};

export default function BlogsPage() {
  return (
    <main>
      <Navbar />

      <section className={styles.section}>
        <div className="container">
          <div className={styles.titleContainer}>
            <h1 className="section-title">
              Our <span>Blogs</span>
            </h1>
            <p className={styles.subtitle}>
              Stay updated with the latest tournament summaries, team stats, and cricket betting insights.
            </p>
          </div>

          <div className={styles.grid}>
            {/* T20 World Cup Winners List Blog Card */}
            <article className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/t20_winners_banner.png"
                  alt="T20 World Cup Winners List"
                  width={400}
                  height={220}
                  className={styles.image}
                  priority
                />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardMeta}>
                  <span>Cricket</span>
                  <span className={styles.metaSeparator}></span>
                  <span>July 10, 2026</span>
                </div>
                <h2 className={styles.cardTitle}>
                  T20 World Cup Winners List (2007–2026): All Champions, Finals & Records
                </h2>
                <p className={styles.cardExcerpt}>
                  The Men's T20 World Cup has been played ten times, and the trophy has now found its most successful home yet. India's 96-run victory over New Zealand in Ahmedabad on 8 March 2026 saw them become the first-ever team to win the tournament three times and the first to successfully defend their title.
                </p>
                <Link href="/t20-world-cup-winners-list/" className={styles.showMoreBtn}>
                  Show More
                  <svg
                    className={styles.arrowIcon}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
