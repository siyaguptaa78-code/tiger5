import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { SITE_CONFIG } from "@/config/constants";

export const metadata: Metadata = {
  title: `Tiger365id – The Future of Professional Gaming Starts Now`,
  description: "Get your own Tiger365 ID and experience the best gaming, live sports, and casino games. tiger365 login pro id, tiger365 pro id login, how to get tiger365 pro id, Online cricket id, Online id beting, Tiger 365 id online.",
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main style={{ backgroundColor: "var(--background)", color: "var(--foreground)", fontFamily: "var(--font-raleway)" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ padding: "100px 20px", textAlign: "center", background: "linear-gradient(to bottom, #111, var(--background))" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: "var(--primary)", fontFamily: "var(--font-fjalla)" }}>
          Tiger365id<br/>
          <span style={{ color: "var(--foreground)", fontSize: "2.5rem" }}>The Future of Professional Gaming Starts Now</span>
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", marginBottom: "40px", color: "var(--text-secondary)" }}>
          Get your own Tiger365 ID and experience the best gaming, live sports, and casino games. We provide fast and easy access to the best cricket gaming and live casino sites with 24/7 support.
          <br/><br/>
          <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Keywords: tiger365 login pro id, tiger365 pro id login, how to get tiger365 pro id, Online cricket id, Online id beting, Tiger 365 id online</span>
        </p>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "40px" }}>
          <div style={{ background: "var(--secondary)", padding: "20px", borderRadius: "10px", minWidth: "150px" }}>
            <h3 style={{ color: "var(--primary)", fontSize: "1.5rem" }}>10K+</h3>
            <p>Active Players</p>
          </div>
          <div style={{ background: "var(--secondary)", padding: "20px", borderRadius: "10px", minWidth: "150px" }}>
            <h3 style={{ color: "var(--primary)", fontSize: "1.5rem" }}>24/7</h3>
            <p>Support</p>
          </div>
          <div style={{ background: "var(--secondary)", padding: "20px", borderRadius: "10px", minWidth: "150px" }}>
            <h3 style={{ color: "var(--primary)", fontSize: "1.5rem" }}>100%</h3>
            <p>Secure</p>
          </div>
        </div>
        
        <a href={SITE_CONFIG.whatsappLink} style={{ background: "var(--primary)", color: "#000", padding: "15px 40px", borderRadius: "30px", fontSize: "1.2rem", fontWeight: "bold", textDecoration: "none", display: "inline-block" }}>
          GET TIGER 365 ID
        </a>
        <div style={{ marginTop: "20px", color: "var(--text-muted)", display: "flex", justifyContent: "center", gap: "15px" }}>
          <span>⚡ Instant Setup</span>
          <span>₹ INR Accepted</span>
          <span>🔒 Encrypted & Safe</span>
        </div>
      </section>

      {/* Live Cricket Gaming */}
      <section style={{ padding: "60px 20px", background: "var(--secondary)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "40px", color: "var(--primary)" }}>Tiger365 ID<br/><span style={{ color: "var(--foreground)" }}>Live Cricket Gaming</span></h2>
          
          <div style={{ background: "#000", padding: "30px", borderRadius: "15px", border: "1px solid var(--border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", borderBottom: "1px solid var(--border)", paddingBottom: "15px" }}>
              <span style={{ background: "red", color: "white", padding: "5px 10px", borderRadius: "5px", fontWeight: "bold", fontSize: "0.8rem" }}>LIVE</span>
              <span style={{ fontWeight: "bold" }}>T20 World Cup</span>
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "30px" }}>
              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: "1.5rem" }}>IND</h3>
                <p style={{ color: "var(--primary)", fontSize: "1.2rem", fontWeight: "bold" }}>186/4</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>18.3 ov</p>
              </div>
              <div style={{ fontSize: "1.5rem", fontWeight: "bold", color: "var(--text-muted)" }}>VS</div>
              <div style={{ textAlign: "center" }}>
                <h3 style={{ fontSize: "1.5rem" }}>AUS</h3>
                <p style={{ fontSize: "1.2rem" }}>--/--</p>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>Yet to bat</p>
              </div>
            </div>
            
            <h4 style={{ marginBottom: "15px", color: "var(--text-secondary)" }}>Popular Bets</h4>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "10px" }}>
              <button style={{ background: "var(--secondary)", border: "1px solid var(--border)", padding: "15px", borderRadius: "8px", color: "white", display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                <span>India Win <span style={{ color: "red", fontSize: "0.7rem" }}>HOT</span></span>
                <span style={{ color: "var(--primary)", fontWeight: "bold" }}>1.85</span>
              </button>
              <button style={{ background: "var(--secondary)", border: "1px solid var(--border)", padding: "15px", borderRadius: "8px", color: "white", display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                <span>Australia Win</span>
                <span style={{ color: "var(--primary)", fontWeight: "bold" }}>2.10</span>
              </button>
              <button style={{ background: "var(--secondary)", border: "1px solid var(--border)", padding: "15px", borderRadius: "8px", color: "white", display: "flex", justifyContent: "space-between", cursor: "pointer" }}>
                <span>Super Over</span>
                <span style={{ color: "var(--primary)", fontWeight: "bold" }}>8.50</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Sports & Games */}
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Our Platform</h2>
        <h3 style={{ fontSize: "1.8rem", color: "var(--primary)", marginBottom: "20px" }}>Explore Sports & Games</h3>
        <p style={{ color: "var(--text-secondary)", marginBottom: "40px" }}>From live cricket to football gaming — all in one platform</p>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", maxWidth: "1000px", margin: "0 auto" }}>
          {[
            { icon: "⚽", title: "Bet on Football", tag: "LIVE" },
            { icon: "🎲", title: "Smart Gaming", tag: "LIVE" },
            { icon: "🏏", title: "Live Cricket", tag: "LIVE" },
          ].map((item, i) => (
            <div key={i} style={{ background: "var(--secondary)", padding: "30px", borderRadius: "15px", width: "250px", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{item.icon}</div>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "10px" }}>{item.title}</h4>
              <span style={{ background: "var(--primary)", color: "#000", padding: "2px 8px", borderRadius: "4px", fontSize: "0.8rem", fontWeight: "bold" }}>{item.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section style={{ padding: "80px 20px", background: "var(--secondary)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>What We Offer</h2>
          <h3 style={{ fontSize: "1.8rem", color: "var(--primary)", marginBottom: "40px" }}>Our Services</h3>
          <p style={{ color: "var(--text-secondary)", marginBottom: "50px" }}>Access to premium sports gaming, live casino, and games with Tiger365 ID</p>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
            {[
              { icon: "🏏", name: "Cricket Gaming" },
              { icon: "⚽", name: "Football Gaming" },
              { icon: "🎰", name: "Live Casino" },
              { icon: "✈️", name: "Aviator Game" },
              { icon: "🃏", name: "Teen Patti" },
              { icon: "📊", name: "Sports Exchange" },
            ].map((service, i) => (
              <div key={i} style={{ background: "#000", padding: "25px", borderRadius: "12px", border: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <span style={{ fontSize: "2rem" }}>{service.icon}</span>
                  <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{service.name}</span>
                </div>
                <a href={SITE_CONFIG.whatsappLink} style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "bold" }}>Play Now →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section style={{ padding: "80px 20px", maxWidth: "900px", margin: "0 auto", lineHeight: "1.8" }}>
        <h2 style={{ fontSize: "2.5rem", color: "var(--primary)", marginBottom: "20px" }}>About Tiger365 ID</h2>
        <h3 style={{ fontSize: "1.5rem", marginBottom: "20px" }}>Tiger 365 ID: Your Gateway to Online Gaming IDs and Sports Gaming</h3>
        <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>
          Tiger 365 ID is your reliable source for online gaming and sports gaming IDs in India. We specialize in providing our clients with the required tools to access the best gaming exchange sites and sports platforms. With Tiger 365 ID, you can enjoy cricket, football, tennis, and other sports gaming with a clear mind.
        </p>
        <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>
          Our platform grants you entry to premier sports gaming, exchange services, and live games. Whether you are a professional bettor or a novice, Tiger 365 ID offers you a simple and convenient way to get started. You only need to inform us through WhatsApp, and we can offer you a solution within minutes.
        </p>
        <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>
          Tiger 365 ID offers you the best live cricket gaming, unmatched odds, and a vast range of casino games and live sports gaming. You can also make deposits and withdrawals with our 24/7 customer care at your disposal around the clock. Your security is our priority as we offer you the best encryption and protection of your data.
        </p>
        <p style={{ color: "var(--text-secondary)", marginBottom: "40px" }}>
          We also allow you to make deposits and withdrawals in all local currencies and popular payment methods such as UPI, IMPS, and net banking. As a client, you can also benefit from having an accessible and friendly team that helps you with any question or query you may have.
        </p>
        <div style={{ textAlign: "center" }}>
          <a href={SITE_CONFIG.whatsappLink} style={{ background: "var(--primary)", color: "#000", padding: "15px 40px", borderRadius: "30px", fontSize: "1.2rem", fontWeight: "bold", textDecoration: "none", display: "inline-block" }}>
            GET TIGER 365 ID
          </a>
        </div>
      </section>

      {/* Team & Support */}
      <section style={{ padding: "80px 20px", background: "var(--secondary)", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Team Members</h2>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto", marginBottom: "40px" }}>We offer you the best customer support and gaming specialists that are always ready to assist you</p>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "40px" }}>
          <div style={{ background: "#000", padding: "20px", borderRadius: "10px", width: "200px" }}>
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>⚡</div>
            <h4>Instant Response</h4>
          </div>
          <div style={{ background: "#000", padding: "20px", borderRadius: "10px", width: "200px" }}>
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🔒</div>
            <h4>100% Secure</h4>
          </div>
          <div style={{ background: "#000", padding: "20px", borderRadius: "10px", width: "200px" }}>
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🕐</div>
            <h4>24/7 Available</h4>
          </div>
          <div style={{ background: "#000", padding: "20px", borderRadius: "10px", width: "200px" }}>
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🌟</div>
            <h4>Expert Support</h4>
          </div>
        </div>
        
        <div style={{ background: "var(--primary)", color: "#000", padding: "40px 20px", borderRadius: "15px", maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "10px", fontFamily: "var(--font-fjalla)" }}>PLAY MORE! EARN MORE!</h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>Join thousands of players already winning with Tiger365 ID</p>
          <a href={SITE_CONFIG.whatsappLink} style={{ background: "#000", color: "var(--primary)", padding: "12px 30px", borderRadius: "25px", fontSize: "1.1rem", fontWeight: "bold", textDecoration: "none", display: "inline-block" }}>
            GET TIGER 365 ID
          </a>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ padding: "80px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "10px" }}>Why Choose Us</h2>
        <h3 style={{ textAlign: "center", fontSize: "1.8rem", color: "var(--primary)", marginBottom: "50px" }}>Cricket Gaming Features</h3>
        
        <div style={{ display: "grid", gap: "30px" }}>
          <div style={{ background: "var(--secondary)", padding: "30px", borderRadius: "15px", borderLeft: "5px solid var(--primary)" }}>
            <h4 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>🔒 Safe & Secure</h4>
            <p style={{ color: "var(--text-secondary)" }}>
              Enjoy safe, reliable, and exciting cricket gaming at Tiger365ID. Tiger365ID offers you all the necessary security measures for all your transactions and gaming activities. Our platform uses the latest technology to protect your money and data. You can also bet with confidence knowing that you will get the best odds at the fastest payout speeds from the leading cricket gaming exchange sites in the market.
            </p>
          </div>
          
          <div style={{ background: "var(--secondary)", padding: "30px", borderRadius: "15px", borderLeft: "5px solid var(--primary)" }}>
            <h4 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>📈 Maximum Potential</h4>
            <p style={{ color: "var(--text-secondary)" }}>
              Find your inner potential and maximum profit at Tiger365ID. Whether you like to bet on pre match or live scores, at Tiger365ID we give you every tool needed for you to achieve your best performance. You can bet on all your favorite dawns and matches, as well as enjoy the action-packed sports gaming. We also offer you the best insights and odds to increase your winning potential at every bet.
            </p>
          </div>
          
          <div style={{ background: "var(--secondary)", padding: "30px", borderRadius: "15px", borderLeft: "5px solid var(--primary)" }}>
            <h4 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>⚡ Live Action</h4>
            <p style={{ color: "var(--text-secondary)" }}>
              Get the best live cricket gaming action at Tiger365ID. There is nothing better than live action, and at Tiger365ID we let you enjoy gaming on every ball, over, and wicket of your favorite matches with the best odds. We also allow you to follow the game scores and make the best decisions on your in play gaming with a 24/7 customer care that stands by you at all times.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section style={{ padding: "80px 20px", background: "var(--secondary)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Our Core Services</h2>
          <h3 style={{ fontSize: "1.8rem", color: "var(--primary)", marginBottom: "50px" }}>Why Tiger365?</h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "30px", textAlign: "left" }}>
            <div style={{ background: "#000", padding: "30px", borderRadius: "15px", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>🎧</div>
              <h4 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>24/7 Live Customer Service</h4>
              <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>Our support team is always there to answer your questions or concerns. You can rely on our professional assistance 24/7.</p>
              <ul style={{ color: "var(--text-muted)", marginBottom: "20px", paddingLeft: "20px" }}>
                <li>Instant WhatsApp Support</li>
                <li>Quick Response Time</li>
                <li>Expert Assistance</li>
              </ul>
              <a href={SITE_CONFIG.whatsappLink} style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "bold" }}>GET TIGER 365 ID →</a>
            </div>
            
            <div style={{ background: "#000", padding: "30px", borderRadius: "15px", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>💸</div>
              <h4 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Fast & Secure Payments</h4>
              <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>Make fast deposits and withdrawals with multiple payment options available. UPI, IMPS, and net banking are supported with INR as the main currency.</p>
              <ul style={{ color: "var(--text-muted)", marginBottom: "20px", paddingLeft: "20px" }}>
                <li>UPI / IMPS / Bank Transfer</li>
                <li>INR Supported</li>
                <li>Instant Processing</li>
              </ul>
              <a href={SITE_CONFIG.whatsappLink} style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "bold" }}>GET TIGER 365 ID →</a>
            </div>
            
            <div style={{ background: "#000", padding: "30px", borderRadius: "15px", border: "1px solid var(--border)" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "15px" }}>🎁</div>
              <h4 style={{ fontSize: "1.5rem", marginBottom: "15px" }}>Exclusive Bonus & Rewards</h4>
              <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>You can enjoy exciting rewards and bonuses on all your deposits and referrals. We also have weekly cashbacks for all our valued customers.</p>
              <ul style={{ color: "var(--text-muted)", marginBottom: "20px", paddingLeft: "20px" }}>
                <li>Welcome Bonus</li>
                <li>Referral Rewards</li>
                <li>Weekly Cashback</li>
              </ul>
              <a href={SITE_CONFIG.whatsappLink} style={{ color: "var(--primary)", textDecoration: "none", fontWeight: "bold" }}>GET TIGER 365 ID →</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 20px", maxWidth: "800px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "10px" }}>Common Questions</h2>
        <h3 style={{ textAlign: "center", fontSize: "1.5rem", color: "var(--text-secondary)", marginBottom: "50px" }}>Everything you need to know about Tiger365 ID</h3>
        
        <div style={{ display: "grid", gap: "15px" }}>
          {[
            "What is Tiger365?",
            "How does a Tiger365 ID work?",
            "How can I access Tiger365?",
            "What sports are available on Tiger365?",
            "Does Tiger365 provide live sports information?",
            "How can I get help with my Tiger365 account?",
            "How do I find Tiger365 login information?",
            "What payment options are supported?",
            "What should I do if I have trouble accessing my account?",
            "Where can I find the latest Tiger365 updates?"
          ].map((q, i) => (
            <div key={i} style={{ background: "var(--secondary)", padding: "20px", borderRadius: "8px", border: "1px solid var(--border)" }}>
              <h4 style={{ fontSize: "1.1rem" }}>{i + 1}. {q}</h4>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ marginBottom: "20px", color: "var(--text-secondary)" }}>Still have questions? Contact us on WhatsApp!</p>
          <a href={SITE_CONFIG.whatsappLink} style={{ background: "var(--primary)", color: "#000", padding: "12px 30px", borderRadius: "25px", fontSize: "1.1rem", fontWeight: "bold", textDecoration: "none", display: "inline-block" }}>
            GET TIGER 365 ID
          </a>
        </div>
      </section>

      {/* Disclaimer */}
      <section style={{ padding: "40px 20px", background: "#000", borderTop: "1px solid var(--border)", fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: "1.6" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", textAlign: "center" }}>
          <h4 style={{ marginBottom: "15px", color: "var(--text-secondary)" }}>Disclaimer</h4>
          <p>
            By visiting https://tiger365onlineid.co.in, you accept and agree to the following terms and conditions: Tiger365 Online ID is an information site only. We do not provide gaming services. This site is purely informational, and we do not have any gaming or gambling platform. We only help our clients offer online gaming IDs and do not engage in any gaming activities on any gaming sites. Therefore, we do not take any responsibility for any losses incurred by a client accessing the gaming sites. Each client must ensure that it is legal to access these sites in their country of residence. In addition, we do not take any responsibility for any issues and liabilities that may arise from use of the gaming IDs provided by our company. Please make sure that it is legal to access online IDs in your country before using them. By using our website, you accept these terms and conditions and accept this disclaimer of any responsibility. Gambling can be addictive; therefore, gaming should be done responsibly.
          </p>
        </div>
      </section>
      
      {/* Footer Info */}
      <footer style={{ padding: "40px 20px", background: "var(--secondary)", borderTop: "1px solid var(--border)", textAlign: "center" }}>
        <h3 style={{ color: "var(--primary)", marginBottom: "10px", fontSize: "1.5rem" }}>Tiger 365 Id</h3>
        <p style={{ color: "var(--text-secondary)", marginBottom: "20px" }}>Your trusted partner for online cricket gaming IDs and sports gaming access in India. Safe, secure, and available 24/7.</p>
        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Copyright © 2026 Tiger 365 Id. All Rights Reserved.</p>
      </footer>
    </main>
  );
}
