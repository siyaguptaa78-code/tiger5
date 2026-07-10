import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import styles from "./blog-post.module.css";
import { SITE_CONFIG } from "@/config/constants";

export const metadata: Metadata = {
  title: "T20 World Cup Winners List (2007–2026): All Champions, Finals & Records",
  description: "Complete T20 World Cup winners list from 2007 to 2026. Every champion, runner-up, final venue and result — including India's record third title in 2026. Updated after every edition.",
  alternates: {
    canonical: "/t20-world-cup-winners-list/",
  },
  openGraph: {
    title: "T20 World Cup Winners List (2007–2026): All Champions, Finals & Records",
    description: "Complete T20 World Cup winners list from 2007 to 2026. Every champion, runner-up, final venue and result — including India's record third title in 2026. Updated after every edition.",
    url: `${SITE_CONFIG.url}/t20-world-cup-winners-list/`,
    siteName: "Genuine Betting IDs",
    images: [
      {
        url: `${SITE_CONFIG.url}/t20_winners_banner.png`,
        width: 1200,
        height: 630,
        alt: "T20 World Cup Winners List (2007–2026)",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
};

export default function BlogPostPage() {
  return (
    <main>
      <Navbar />

      <section className={styles.section}>
        <div className="container">
          <article className={styles.article}>
            
            {/* Header */}
            <header className={styles.postHeader}>
              <div className={styles.postMeta}>
                <span>Cricket</span>
                <span className={styles.metaSeparator}></span>
                <span>July 10, 2026</span>
              </div>
              <h1 className={styles.title}>
                T20 World Cup Winners List (2007–2026): All Champions, Finals & Records
              </h1>
            </header>

            {/* Featured Image */}
            <div className={styles.imageWrapper}>
              <Image
                src="/t20_winners_banner.png"
                alt="T20 World Cup Winners List (2007-2026)"
                width={900}
                height={450}
                className={styles.image}
                priority
              />
            </div>

            {/* Post Content */}
            <div className={styles.postBody}>
              <p>
                The Men's T20 World Cup has been played ten times, and the trophy has now found its most successful home yet. India's 96-run victory over New Zealand in Ahmedabad on 8 March 2026 saw them become the first-ever team to win the tournament three times and the first to successfully defend their title.
              </p>

              <p>
                Below are the winners, the final scores, and the records associated with every Men's T20 World Cup final.
              </p>

              {/* Table 1 */}
              <h3 className={styles.tableTitle}>
                T20 World Cup Winners List: All-time Winners, Runners-up, Venues, Scores
              </h3>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Winner</th>
                      <th>Runner-up</th>
                      <th>Venue</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2007</td>
                      <td className={styles.highlightText}>India</td>
                      <td>Pakistan</td>
                      <td>Johannesburg, South Africa</td>
                      <td>India won the match by 5 runs</td>
                    </tr>
                    <tr>
                      <td>2009</td>
                      <td className={styles.highlightText}>Pakistan</td>
                      <td>Sri Lanka</td>
                      <td>Lord's, England</td>
                      <td>Pakistan won the match by 8 wickets</td>
                    </tr>
                    <tr>
                      <td>2010</td>
                      <td className={styles.highlightText}>England</td>
                      <td>Australia</td>
                      <td>Bridgetown, Barbados</td>
                      <td>England won the match by 7 wickets</td>
                    </tr>
                    <tr>
                      <td>2012</td>
                      <td className={styles.highlightText}>West Indies</td>
                      <td>Sri Lanka</td>
                      <td>Colombo, Sri Lanka</td>
                      <td>West Indies won the match by 36 runs</td>
                    </tr>
                    <tr>
                      <td>2014</td>
                      <td className={styles.highlightText}>Sri Lanka</td>
                      <td>India</td>
                      <td>Dhaka, Bangladesh</td>
                      <td>Sri Lanka won the match by 6 wickets</td>
                    </tr>
                    <tr>
                      <td>2016</td>
                      <td className={styles.highlightText}>West Indies</td>
                      <td>England</td>
                      <td>Kolkata, India</td>
                      <td>West Indies won the match by 4 wickets</td>
                    </tr>
                    <tr>
                      <td>2021</td>
                      <td className={styles.highlightText}>Australia</td>
                      <td>New Zealand</td>
                      <td>Dubai, UAE</td>
                      <td>Australia won the match by 8 wickets</td>
                    </tr>
                    <tr>
                      <td>2022</td>
                      <td className={styles.highlightText}>England</td>
                      <td>Pakistan</td>
                      <td>Melbourne, Australia</td>
                      <td>England won the match by 5 wickets</td>
                    </tr>
                    <tr>
                      <td>2024</td>
                      <td className={styles.highlightText}>India</td>
                      <td>South Africa</td>
                      <td>Bridgetown, Barbados</td>
                      <td>India won the match by 7 runs</td>
                    </tr>
                    <tr>
                      <td>2026</td>
                      <td className={styles.highlightText}>India</td>
                      <td>New Zealand</td>
                      <td>Ahmedabad, India</td>
                      <td>India won the match by 96 runs</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table 2 */}
              <h3 className={styles.tableTitle}>
                Most Number of T20 World Cup Wins
              </h3>
              <div className={styles.tableWrapper}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Team</th>
                      <th>No. of Titles</th>
                      <th>Years of Winning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className={styles.highlightText}>India</td>
                      <td>3</td>
                      <td>2007, 2024, 2026</td>
                    </tr>
                    <tr>
                      <td className={styles.highlightText}>West Indies</td>
                      <td>2</td>
                      <td>2012, 2016</td>
                    </tr>
                    <tr>
                      <td className={styles.highlightText}>England</td>
                      <td>2</td>
                      <td>2010, 2022</td>
                    </tr>
                    <tr>
                      <td className={styles.highlightText}>Pakistan</td>
                      <td>1</td>
                      <td>2009</td>
                    </tr>
                    <tr>
                      <td className={styles.highlightText}>Sri Lanka</td>
                      <td>1</td>
                      <td>2014</td>
                    </tr>
                    <tr>
                      <td className={styles.highlightText}>Australia</td>
                      <td>1</td>
                      <td>2021</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Six different teams have won the T20 World Cup in ten editions. Remarkably, no team was able to successfully defend their title before India did so in 2026.
              </p>

              {/* Heading 2 */}
              <h2>The Most Recent Final: India vs. New Zealand, 2026</h2>
              <p>
                The tenth edition of the tournament witnessed another Indian triumph. India posted a mammoth score of 255 for 5 in the final at Ahmedabad's Narendra Modi Stadium, the highest ever in a T20 World Cup final. They proceeded to bowl New Zealand out for a mere 159, posting a stunning 96-run victory. The win marked India's first-ever T20 World Cup title defense, as well as their first-ever win at the tournament as hosts. It was also the first time that the winning team managed three titles and the first time the final's winning margin exceeded 90 runs.
              </p>
              <p>
                New Zealand's misery continues with a second runner-up finish, having also lost to Australia in the 2021 final. Add their ODI World Cup final defeats in 2015 and 2019, and they have now lost four white-ball World Cup finals without winning one.
              </p>

              {/* Heading 2 */}
              <h2>Most Interesting Stats and Facts about T20 World Cup</h2>
              <p>
                There were several interesting stats and facts about the T20 World Cup, including:
              </p>
              <ul>
                <li>
                  The first six editions of the tournament (2007–2016) all produced a first-time champion — India, Pakistan, England, West Indies, Sri Lanka and West Indies again — a run of spread-out success no other global cricket trophy can match.
                </li>
                <li>
                  The West Indies are the only team to win the T20 World Cup twice as dark horses. Bridgetown's Kensington Oval is the only venue to host the final twice, with England and India winning there in 2010 and 2024, respectively. Pakistan's 2009 triumph at Lord's, a year after their heartbreaking defeat to India in the 2007 final, remains the tournament's great redemption story. The next World Cup is due to be held in 2028 and will be hosted by Australia and New Zealand, with India set to defend the trophy for the first time away from home.
                </li>
              </ul>

              {/* FAQs Section */}
              <div className={styles.faqSection}>
                <h2>T20 World Cup Winners: FAQs</h2>
                
                <div className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>Who won the T20 World Cup 2026?</h3>
                  <div className={styles.faqAnswer}>
                    India won the T20 World Cup 2026 after defeating New Zealand by 96 runs in the final at the Narendra Modi Stadium in Ahmedabad on 8 March 2026.
                  </div>
                </div>

                <div className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>Who has won the most T20 World Cups?</h3>
                  <div className={styles.faqAnswer}>
                    India has won the most T20 World Cups (3). West Indies and England have won it twice, while Sri Lanka, Pakistan, and Australia have won it once.
                  </div>
                </div>

                <div className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>Has any team defended the T20 World Cup title?</h3>
                  <div className={styles.faqAnswer}>
                    Yes — India, who won in 2024 and successfully defended the title in 2026.
                  </div>
                </div>

                <div className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>Who won the first-ever T20 World Cup?</h3>
                  <div className={styles.faqAnswer}>
                    India won the first-ever T20 World Cup after defeating Pakistan by 5 runs in the final in Johannesburg in 2007.
                  </div>
                </div>

                <div className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>Has any host nation won the T20 World Cup?</h3>
                  <div className={styles.faqAnswer}>
                    Yes, India won the 2026 T20 World Cup, becoming the only host nation to do so.
                  </div>
                </div>

                <div className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>When will the next T20 World Cup be held?</h3>
                  <div className={styles.faqAnswer}>
                    The next T20 World Cup will be held in 2028. The event will be hosted by Australia and New Zealand.
                  </div>
                </div>
              </div>

              {/* Footnote */}
              <div className={styles.footnote}>
                Last updated: 10 July 2026, covers the 2026 final. This article will be continually updated after every tournament. The results are based on those provided by the ICC.
              </div>

            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
