import React, { useState } from 'react';
import '../styles/faq.css';

const Faq = () => {
  // State to track which FAQ item is currently expanded
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function for FAQ accordion
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ data
  const faqItems = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What areas does Karmic Realty cover?",
          answer: "Karmic Realty provides real estate services across major metropolitan areas and surrounding suburbs. Our expertise primarily focuses on the regions of Mumbai, Pune, Bangalore, Delhi NCR, and Hyderabad. However, we have partners and affiliates in many other locations to assist with your real estate needs nationwide."
        },
        {
          question: "How long has Karmic Realty been in business?",
          answer: "Karmic Realty was established in 2008 and has over 15 years of experience in the real estate industry. Throughout this time, we've built a strong reputation for trustworthiness, expertise, and client satisfaction."
        },
        {
          question: "What sets Karmic Realty apart from other real estate agencies?",
          answer: "What distinguishes us is our personalized approach to each client, deep market knowledge, ethical business practices, and commitment to long-term relationships rather than just transactions. We offer end-to-end support, from initial consultation to after-sale services, and maintain complete transparency throughout the process."
        }
      ]
    },
    {
      category: "Buying Properties",
      questions: [
        {
          question: "What is the process for buying a property through Karmic Realty?",
          answer: "Our buying process begins with understanding your requirements and budget, followed by property suggestions that match your criteria. We arrange site visits, help with negotiations, assist with paperwork and documentation, facilitate loan processes if needed, and provide support during registration and possession."
        },
        {
          question: "Do you help with home loans and mortgage services?",
          answer: "Yes, we have partnerships with leading banks and financial institutions to help you get the best possible loan terms. Our team assists with document preparation, application processing, and follows up until loan disbursement."
        },
        {
          question: "What types of properties do you deal with?",
          answer: "We deal with all kinds of properties including residential (apartments, villas, plots), commercial spaces, agricultural land, NA (Non-Agricultural) plots, industrial properties, and luxury premium properties. Whatever your real estate needs, we have the expertise to assist you."
        }
      ]
    },
    {
      category: "Selling Properties",
      questions: [
        {
          question: "How do you determine the value of my property?",
          answer: "We conduct a thorough market analysis taking into account factors like location, property size, amenities, condition, recent comparable sales in the area, current market trends, and growth potential. We provide a comprehensive valuation report explaining how we arrived at the suggested price."
        },
        {
          question: "What marketing strategies do you use to sell properties?",
          answer: "Our marketing approach includes professional photography, virtual tours, listing on major real estate portals, social media promotion, our extensive network of potential buyers, targeted email campaigns, and when appropriate, exclusive property events and open houses."
        },
        {
          question: "How long will it take to sell my property?",
          answer: "The selling timeline varies based on market conditions, property type, location, and pricing. While some properties sell within weeks, others may take a few months. We provide regular updates and adapt our strategy as needed to ensure the best possible outcome within your desired timeframe."
        }
      ]
    },
    {
      category: "Legal & Documentation",
      questions: [
        {
          question: "What documents are required for property transactions?",
          answer: "Required documents typically include property title deed, previous sale agreements, approved building plans, property tax receipts, encumbrance certificate, and identity proof. For agricultural land, conversion certificates and land use permissions may be needed. We provide a customized checklist based on your specific transaction."
        },
        {
          question: "Do you handle legal verification of properties?",
          answer: "Yes, we have a network of legal experts who perform thorough title verification, check for encumbrances, verify construction approvals, and ensure all legal aspects are clear before proceeding with transactions. This minimizes risks and ensures a smooth transfer of ownership."
        },
        {
          question: "What about government permissions for NA land and agricultural properties?",
          answer: "We guide you through the complete process of obtaining necessary government permissions for land conversions, development approvals, and compliance with local regulations. Our team has extensive experience navigating the bureaucratic procedures involved in NA permissions and agricultural land transactions."
        }
      ]
    },
    {
      category: "Fees & Commissions",
      questions: [
        {
          question: "What are your commission rates?",
          answer: "Our standard commission structure is 2% of the transaction value for residential properties and 3% for commercial properties. For agricultural land and special cases, the commission may vary. We're transparent about our fees from the beginning, with no hidden charges."
        },
        {
          question: "Are there any upfront fees to list my property?",
          answer: "No, we typically work on a success fee model, meaning we only earn our commission when your property sells successfully. This aligns our interests with yours and demonstrates our confidence in our ability to deliver results."
        },
        {
          question: "What other costs should I be aware of in real estate transactions?",
          answer: "Beyond our commission, typical costs include stamp duty (4-7% depending on the state), registration fees (approximately 1%), GST on new properties, legal fees, loan processing fees if applicable, and sometimes society transfer charges. We provide a detailed breakdown of all expected costs at the beginning of our engagement."
        }
      ]
    },
    {
      category: "After-Sales Support",
      questions: [
        {
          question: "What kind of after-sales support do you provide?",
          answer: "Our relationship doesn't end with the transaction. We assist with utility transfers, property registration formalities, coordination with housing societies, introducing you to reliable contractors for renovations if needed, and remain available to address any queries that may arise after the sale."
        },
        {
          question: "Do you have any guarantees for the properties sold through you?",
          answer: "While we don't provide direct guarantees on properties, we conduct thorough due diligence to ensure clear titles and proper documentation. We work only with reputable developers and sellers, and our agreements protect your interests with appropriate clauses for remedies in case of discrepancies."
        },
        {
          question: "Can you help with property management after purchase?",
          answer: "Yes, for clients who need property management services, we offer additional packages that include tenant finding, rent collection, property maintenance, periodic inspections, and handling day-to-day management tasks. This is particularly useful for NRI clients or those with multiple property investments."
        }
      ]
    }
  ];

  return (
    <div className="faq-container">
      {/* Top CTA Bar - Consistent with About Us page */}
      <div className="top-cta-bar">
        <div className="cta-container">
          <a href="#book-visit" className="cta-button site-visit">
            <span className="cta-icon">🏠</span>
            Book Site Visit
          </a>
          <a href="#contact" className="cta-button get-details">
            <span className="cta-icon">📞</span>
            Get Details
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="faq-hero">
        <div className="hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our services</p>
        </div>
      </div>

      {/* FAQ Search Bar */}
      <div className="faq-search-section">
        <div className="search-container">
          <div className="search-bar">
            <input type="text" placeholder="Search for questions..." className="search-input" />
            <button className="search-button">
              <span className="search-icon">🔍</span>
            </button>
          </div>
          <p className="search-tip">Can't find what you're looking for? <a href="#contact">Contact us directly</a></p>
        </div>
      </div>

      {/* FAQ Categories and Questions */}
      <div className="faq-content-section">
        <div className="faq-grid">
          {faqItems.map((category, categoryIndex) => (
            <div className="faq-category" key={categoryIndex}>
              <h2 className="category-title">{category.category}</h2>
              <div className="gold-line"></div>
              <div className="faq-questions">
                {category.questions.map((item, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  return (
                    <div 
                      className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
                      key={index}
                      onClick={() => toggleAccordion(index)}
                    >
                      <div className="faq-question">
                        <h3>{item.question}</h3>
                        <span className="toggle-icon">{activeIndex === index ? '−' : '+'}</span>
                      </div>
                      <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Still Have Questions Section */}
      <div className="still-questions-section">
        <div className="section-container">
          <h2>Still Have Questions?</h2>
          <p>Our team is ready to assist you with any specific inquiries about our services</p>
          <div className="contact-options">
            <div className="contact-option">
              <div className="contact-icon">✉️</div>
              <h3>Email Us</h3>
              <p>Send us your questions and we'll reply within 24 hours</p>
              <a href="mailto:info@karmicrealty.com" className="contact-link">info@karmicrealty.com</a>
            </div>
            <div className="contact-option">
              <div className="contact-icon">📞</div>
              <h3>Call Us</h3>
              <p>Speak directly with our expert team</p>
              <a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a>
            </div>
            <div className="contact-option">
              <div className="contact-icon">🗓️</div>
              <h3>Schedule a Meeting</h3>
              <p>Book a consultation with our real estate experts</p>
              <a href="/contact" className="contact-link">Schedule Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="resources-section">
        <div className="section-container">
          <h2 className="section-title">Helpful Resources</h2>
          <div className="gold-line"></div>
          <div className="resources-grid">
            <a href="/resources/buyers-guide" className="resource-card">
              <div className="resource-icon">📋</div>
              <h3>Buyer's Guide</h3>
              <p>Complete guide to purchasing property</p>
            </a>
            <a href="/resources/sellers-guide" className="resource-card">
              <div className="resource-icon">📈</div>
              <h3>Seller's Guide</h3>
              <p>Tips to maximize your property value</p>
            </a>
            <a href="/resources/legal-checklist" className="resource-card">
              <div className="resource-icon">⚖️</div>
              <h3>Legal Checklist</h3>
              <p>Essential documents for property transactions</p>
            </a>
            <a href="/resources/investment-guide" className="resource-card">
              <div className="resource-icon">💰</div>
              <h3>Investment Guide</h3>
              <p>Strategic property investment advice</p>
            </a>
          </div>
        </div>
      </div>

      {/* Contact CTA - Consistent with About Us page */}
      <section className="contact-cta" id="contact">
        <div className="contact-cta-container">
          <h2>Ready to Begin Your Real Estate Journey?</h2>
          <p>Let's connect to discuss how we can help you achieve your real estate goals</p>
          <div className="cta-buttons">
            <a href="/contact" className="contact-button">Contact Us</a>
            {/* <a href="/properties" className="projects-button">Explore Properties</a> */}
          </div>
        </div>
      </section>

      {/* Contact Float Buttons - Consistent with About Us page */}
      {/* <div className="contact-float-buttons">
        <a href="https://wa.me/1234567890" className="whatsapp-btn">
          <span className="whatsapp-icon">📱</span>
        </a>
        <a href="tel:+1234567890" className="call-btn">
          <span className="call-icon">📞</span>
        </a>
      </div> */}
    </div>
  );
};

export default Faq;