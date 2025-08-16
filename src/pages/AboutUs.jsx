
import React from "react";
import "../styles/aboutus.css";

import KarmicLogo from "../assets/Karmic.jpg";
import { FaHome, FaPhone, FaEye, FaBullseye, FaGem, FaHandshake, FaSeedling, FaRecycle, FaMountain, FaHome as FaHome2, FaBuilding, FaCrown, FaCheckCircle, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      {/* Top CTA Bar */}
      <div className="top-cta-bar">
        <div className="cta-container">
          <a href="#book-visit" className="cta-button site-visit">
            <span className="cta-icon"><FaHome /></span>
            Book Site Visit
          </a>
          <a href="#contact" className="cta-button get-details">
            <span className="cta-icon"><FaPhone /></span>
            Get Details
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="aboutus-hero">
        <div className="hero-content">
          <h1>About Karmic Realty</h1>
          <p>Your Trusted Partner in Real Estate Excellence</p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="our-story-section">
        <div className="section-container">
          <div className="story-content">
            <h2 className="section-title">Our Story</h2>
            <div className="gold-line"></div>
            <p className="story-text">
              Karmic Realty was founded with a vision to transform the real
              estate landscape by providing exceptional service and building
              lasting relationships. What started as a small team with big
              dreams has evolved into one of the most respected names in the
              real estate industry.
            </p>
            <p className="story-text">
              At Karmic Realty, we are dedicated to providing exceptional real
              estate services to our clients. With years of experience and a
              team of expert agents, we specialize in plots (NA, Agricultural
              land, residential, commercial, luxury properties). Our deep
              understanding of the market dynamics and dedication to client
              satisfaction has made us a preferred choice for real estate needs.
            </p>
          </div>
          <div className="story-image">
            <img src={KarmicLogo} alt="Karmic Realty team" style={{maxWidth: '100%', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)'}} />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission-section">
        <div className="vm-container">
          <div className="vm-card vision-card">
            <div className="vm-icon"><FaEye /></div>
            <h3>Our Vision</h3>
            <p>
              To become a trustworthy brand and empower our clients with expert
              guidance making every transaction streamlined that creates trust
              and lasting value.
            </p>
          </div>
          <div className="vm-card mission-card">
            <div className="vm-icon"><FaBullseye /></div>
            <h3>Our Mission</h3>
            <p>
              Our mission is to provide personalized attention, expert
              knowledge, and unparalleled service to make your real estate
              journey seamless and stress-free. Whether you're buying, selling,
              or renting, we are committed to delivering results that exceed
              your expectations.
            </p>
          </div>
        </div>
      </section>

{/* Company Values */}
<section className="values-section">
        <div className="section-container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="gold-line"></div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon"><FaGem /></div>
              <h3>Excellence</h3>
              <p>
                We pursue excellence in every transaction, ensuring our clients
                receive the highest standards of service in the industry.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaHandshake /></div>
              <h3>Integrity</h3>
              <p>
                We operate with complete transparency and ethical practices,
                building trust with our clients through honest communication.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaSeedling /></div>
              <h3>Client-Centered</h3>
              <p>
                We prioritize our clients' needs and goals, tailoring our
                services to provide personalized solutions for every real estate
                journey.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon"><FaRecycle /></div>
              <h3>Community Focus</h3>
              <p>
                We believe in contributing to the communities we serve, helping
                to build sustainable and thriving neighborhoods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="services-section">
        <div className="section-container">
          <h2 className="section-title">Our Services</h2>
          <div className="gold-line"></div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon"><FaMountain /></div>
              <h3>NA & Agricultural Land</h3>
              <p>
                Specialized guidance for Non-Agricultural and Agricultural land
                transactions, navigating complex regulations and ensuring
                compliance.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FaHome2 /></div>
              <h3>Residential Properties</h3>
              <p>
                Expert assistance in finding your dream home or selling your
                current residence with maximum value and minimal stress.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FaBuilding /></div>
              <h3>Commercial Properties</h3>
              <p>
                Strategic solutions for businesses seeking office spaces, retail
                locations, or investment opportunities in prime commercial
                areas.
              </p>
            </div>
            <div className="service-card">
              <div className="service-icon"><FaCrown /></div>
              <h3>Luxury Properties</h3>
              <p>
                Exclusive access to premium properties featuring upscale
                amenities and prestigious locations for discerning clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-section">
        <div className="section-container">
          <h2 className="section-title">Why Choose Karmic Realty</h2>
          <div className="gold-line"></div>
          <div className="choose-grid">
            <div className="choose-item">
              <div className="choose-icon"><FaCheckCircle /></div>
              <div className="choose-content">
                <h3>Local Market Expertise</h3>
                <p>
                  Our team possesses in-depth knowledge of local markets,
                  property values, and neighborhood trends.
                </p>
              </div>
            </div>
            <div className="choose-item">
              <div className="choose-icon">✓</div>
              <div className="choose-content">
                <h3>Personalized Approach</h3>
                <p>
                  We understand that each client has unique needs and tailor our
                  services accordingly.
                </p>
              </div>
            </div>
            <div className="choose-item">
              <div className="choose-icon">✓</div>
              <div className="choose-content">
                <h3>Transparent Dealings</h3>
                <p>
                  We maintain complete transparency in all transactions with no
                  hidden costs or surprises.
                </p>
              </div>
            </div>
            <div className="choose-item">
              <div className="choose-icon">✓</div>
              <div className="choose-content">
                <h3>Extensive Network</h3>
                <p>
                  Our vast network of connections helps us find the perfect
                  properties for buyers and qualified buyers for sellers.
                </p>
              </div>
            </div>
            <div className="choose-item">
              <div className="choose-icon">✓</div>
              <div className="choose-content">
                <h3>End-to-End Support</h3>
                <p>
                  From initial consultation to closing the deal and beyond, we
                  provide continuous support throughout your journey.
                </p>
              </div>
            </div>
            <div className="choose-item">
              <div className="choose-icon">✓</div>
              <div className="choose-content">
                <h3>Results-Driven Approach</h3>
                <p>
                  We focus on achieving the best possible outcomes for our
                  clients in every transaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="section-container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="gold-line"></div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-quote">
                "Working with Karmic Realty was a game-changer for our property
                search. Their team's dedication and expertise helped us find our
                dream home in just two weeks!"
              </div>
              <br></br>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="/api/placeholder/60/60" alt="Client" />
                </div>
                <div className="author-info">
                  <h4>Ravi & Deepika Mehta</h4>
                  <p>Residential Buyer</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">
                "As first-time investors in agricultural land, we were nervous
                about the process. The Karmic team guided us through every step
                with patience and clarity, making it a smooth experience."
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="/api/placeholder/60/60" alt="Client" />
                </div>
                <div className="author-info">
                  <h4>Suresh Jain</h4>
                  <p>Land Investor</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-quote">
                "Their market knowledge and negotiation skills helped us secure
                the perfect commercial space for our business expansion at a
                rate well below our expected budget."
              </div>
              <br></br>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src="/api/placeholder/60/60" alt="Client" />
                </div>
                <div className="author-info">
                  <h4>Meera Enterprises</h4>
                  <p>Commercial Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="approach-section">
        <div className="section-container">
          <h2 className="section-title">Our Approach</h2>
          <div className="gold-line"></div>
          <div className="approach-steps">
            <div className="approach-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Understand</h3>
                <p>
                  We begin by listening to your specific needs, preferences, and
                  goals to understand your unique situation.
                </p>
              </div>
            </div>
            <div className="approach-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Research</h3>
                <p>
                  Our team conducts thorough market research to identify the
                  best options aligned with your requirements.
                </p>
              </div>
            </div>
            <div className="approach-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Strategize</h3>
                <p>
                  We develop a personalized strategy to achieve your real estate
                  objectives efficiently.
                </p>
              </div>
            </div>
            <div className="approach-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Execute</h3>
                <p>
                  Our experts handle negotiations, paperwork, and all necessary
                  steps to complete the transaction smoothly.
                </p>
              </div>
            </div>
            <div className="approach-step">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Support</h3>
                <p>
                  Our relationship continues beyond the transaction, providing
                  ongoing support and advice as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="leadership-section">
        <div className="section-container">
          <h2 className="section-title">Our Leadership Team</h2>
          <div className="gold-line"></div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/250/250" alt="CEO" />
              </div>
              <h3>Raj Sharma</h3>
              <p className="member-title">Founder & CEO</p>
              <p className="member-bio">
                With over 20 years of experience in real estate, Raj has built
                Karmic Realty on the principles of trust, transparency, and
                client satisfaction.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="/api/placeholder/250/250" alt="COO" />
              </div>
              <h3>Priya Patel</h3>
              <p className="member-title">Chief Operations Officer</p>
              <p className="member-bio">
                Priya ensures seamless operations across all our services,
                maintaining our high standards of quality and efficiency.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img
                  src="/api/placeholder/250/250"
                  alt="Head of Residential Sales"
                />
              </div>
              <h3>Aditya Kapoor</h3>
              <p className="member-title">Head of Residential Sales</p>
              <p className="member-bio">
                Aditya's deep understanding of residential market trends helps
                clients make informed decisions for their dream homes.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img
                  src="/api/placeholder/250/250"
                  alt="Commercial Division Lead"
                />
              </div>
              <h3>Neha Verma</h3>
              <p className="member-title">Commercial Division Lead</p>
              <p className="member-bio">
                Neha specializes in commercial properties, providing strategic
                insights for businesses seeking ideal locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CSR Initiatives */}
      <section className="csr-section">
        <div className="section-container">
          <div className="csr-content">
            <h2 className="section-title">Our Community Commitment</h2>
            <div className="gold-line"></div>
            <p className="csr-text">
              At Karmic Realty, we believe in giving back to the communities we
              serve. Our community initiatives focus on sustainable development,
              housing accessibility, and environmental conservation.
            </p>
            <p className="csr-text">
              Through our Karmic Foundation, we support affordable housing
              projects, environmental sustainability programs, and community
              development initiatives. We're committed to creating not just
              transactions, but positive impacts that resonate throughout the
              communities we work in.
            </p>
          </div>
          <div className="csr-image">
            <img src="/api/placeholder/500/400" alt="Community activities" />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      {/* <section className="contact-cta" id="contact">
        <div className="contact-cta-container">
          <h2>Ready to Begin Your Real Estate Journey?</h2>
          <p>Let's connect to discuss how we can help you achieve your real estate goals</p>
          <div className="cta-buttons">
            <a href="/contact" className="contact-button">Contact Us</a>
            <a href="/properties" className="projects-button">Explore Properties</a>
          </div>
        </div>
      </section> */}

      {/* Contact Float Buttons */}
      {/* <div className="contact-float-buttons">
        <a href="https://wa.me/1234567890" className="whatsapp-btn">
          <span className="whatsapp-icon"><FaWhatsapp /></span>
        </a>
        <a href="tel:+1234567890" className="call-btn">
          <span className="call-icon"><FaPhoneAlt /></span>
        </a>
      </div> */}
    </div>
  );
};

export default AboutUs;
