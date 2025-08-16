import React from 'react';
import '../styles/privacy.css'; // Make sure to update the path to your new CSS file
import { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="kr-privacy-container">
      {/* Top Navigation Links */}
      <div className="kr-top-cta-bar">
        <div className="kr-cta-container">
          <a href="#book-visit" className="kr-cta-button kr-site-visit">
            <span className="kr-cta-icon">🏠</span>
            Book Site Visit
          </a>
          <a href="#contact" className="kr-cta-button kr-get-details">
            <span className="kr-cta-icon">📞</span>
            Get Details
          </a>
        </div>
      </div>
      
      <div className="kr-privacy-content">
        <h1 className="kr-privacy-title">Privacy Policy for Karmic Realty</h1>
        <div className="kr-gold-line"></div>
        <p className="kr-last-updated">Last Updated: May 2024</p>

        <div className="kr-section">
          <p>
            Karmic Realty is dedicated to providing a seamless and secure real estate
            experience that simplifies property transactions, enhances
            communication, and fosters trust among buyers, sellers, agents,
            and property managers. This Privacy Policy explains how we
            collect, use, store, and protect the personal information of users who
            access our services.
          </p>
        </div>

        <div className="kr-section">
          <h2 className="kr-section-title">Services Provided by Karmic Realty</h2>
          <p>
            Karmic Realty offers a range of services to improve your real estate
            journey, including:
          </p>
          <ul>
            <li>
              <strong>Property Listings:</strong> Residential properties, commercial spaces, 
              agricultural land, NA plots, and luxury properties.
            </li>
            <li>
              <strong>Transaction Support:</strong> End-to-end assistance with property purchase, 
              sale, and rental agreements.
            </li>
            <li>
              <strong>Market Analysis:</strong> Tools for analyzing property values, market trends, 
              and investment opportunities.
            </li>
            <li>
              <strong>Verification Services:</strong> Due diligence on property documents, legal status,
              and ownership verification.
            </li>
          </ul>
          <p>
            These services are designed to optimize your real estate decisions while
            maintaining high security and data protection standards.
          </p>
        </div>

        <div className="kr-section">
          <h2 className="kr-section-title">Information We Collect</h2>
          <p>
            To provide a fully functional and secure system, Karmic Realty
            collects various types of data, including:
          </p>
          <ul>
            <li><strong>Personal Details:</strong> Names, email addresses, phone numbers, and identification details.</li>
            <li><strong>Property Preferences:</strong> Your interests, budget range, and property requirements.</li>
            <li><strong>Financial Information:</strong> Where necessary for transaction processing (always with enhanced security).</li>
            <li><strong>User Accounts:</strong> Login credentials and account activity.</li>
            <li><strong>Property Data:</strong> Information about properties you list, view, or inquire about.</li>
          </ul>
          <p>We prioritize accuracy and transparency in handling your information.</p>
        </div>

        <div className="kr-section">
          <h2 className="kr-section-title">How We Use Collected Information</h2>
          <p>The data collected is used for the following purposes:</p>
          <ul>
            <li>Matching you with suitable properties or buyers.</li>
            <li>Processing property viewings and transactions.</li>
            <li>Facilitating communication among parties involved in transactions.</li>
            <li>Handling financial transactions related to property deals.</li>
            <li>Providing market insights and property valuations.</li>
            <li>Generating reports and analytics for better service.</li>
            <li>Ensuring compliance with real estate regulations and security standards.</li>
          </ul>
          <p>
            We strictly limit data usage to these purposes and do not process
            personal information beyond what is necessary.
          </p>
        </div>

        <div className="kr-section">
          <h2 className="kr-section-title">How We Store and Protect Data</h2>
          <p>
            Karmic Realty follows stringent security measures to safeguard
            your personal data, including:
          </p>
          <ul>
            <li>Secure data encryption and access controls.</li>
            <li>Regular updates to security protocols.</li>
            <li>Data retention policies that ensure information is stored only for as long as necessary.</li>
          </ul>
          <p>
            Property transaction records are maintained as required by law, while other
            information is securely deleted when no longer needed.
          </p>
        </div>

        <div className="kr-section">
          <h2 className="kr-section-title">Information Sharing and Disclosure</h2>
          <p>
            Karmic Realty does not sell or share personal data for marketing
            purposes. However, data may be shared in the following cases:
          </p>
          <ul>
            <li><strong>With transaction parties</strong> as necessary to facilitate property deals.</li>
            <li><strong>With authorized service providers</strong> under confidentiality agreements.</li>
            <li><strong>To comply with legal requirements,</strong> such as court orders or regulatory authorities.</li>
            <li><strong>In case of business restructuring,</strong> where data may be transferred to a new entity.</li>
          </ul>
          <p>
            We are committed to upholding strict security and confidentiality
            standards in all data-sharing situations.
          </p>
        </div>

        <div className="kr-section">
          <h2 className="kr-section-title">User Rights Over Personal Data</h2>
          <p>Users have the right to:</p>
          <ul>
            <li>Access, update, or delete their personal data.</li>
            <li>Withdraw consent for data processing.</li>
            <li>Request a copy of their stored data.</li>
            <li>Restrict or object to certain types of data processing.</li>
          </ul>
          <p>
            Data-related requests can be submitted to our support team for prompt
            assistance.
          </p>
        </div>

        <div className="kr-section">
          <h2 className="kr-section-title">Location Data Usage</h2>
          <p>
            Karmic Realty may use location data solely to help you find properties in your desired area or to provide 
            navigation assistance for property viewings. We do not track continuous real-time location unless explicitly permitted 
            for specific services like site visit coordination.
          </p>
        </div>

        <div className="kr-section">
          <h2 className="kr-section-title">Data Security Measures</h2>
          <p>
            We implement advanced security practices to prevent unauthorized access,
            data loss, or misuse. While we take extensive precautions, users are
            encouraged to secure their login credentials and follow cybersecurity
            best practices when sharing sensitive property documents.
          </p>
        </div>

        <div className="kr-section">
          <h2 className="kr-section-title">Verification Process</h2>
          <p>
            To ensure privacy and security, user identity is verified before
            processing data-related requests. Verification may require:
          </p>
          <ul>
            <li>Requests to be submitted from the registered account.</li>
            <li>Additional identification, such as a valid ID.</li>
          </ul>
        </div>

        <div className="kr-section">
          <h2 className="kr-section-title">Marketing & Communications</h2>
          <p>
            Karmic Realty does not sell user data and only collects necessary
            information for service functionality. Marketing communications about new 
            properties, market trends, or special offers are strictly subject to user consent, 
            and users can opt out at any time.
          </p>
        </div>

        <div className="kr-section">
          <h2 className="kr-section-title">Data Retention Policy</h2>
          <p>Personal data is retained only as long as necessary to:</p>
          <ul>
            <li>Provide real estate services effectively.</li>
            <li>Comply with legal obligations.</li>
            <li>Resolve disputes.</li>
          </ul>
          <p>
            Once data is no longer needed, it is securely deleted following industry
            best practices.
          </p>
        </div>

        <div className="kr-section">
          <h2 className="kr-section-title">External Links & Third-Party Policies</h2>
          <p>
            Our platform may contain links to external websites or services.
            Karmic Realty does not control these external sites and advises users
            to review their privacy policies before sharing any personal data.
          </p>
        </div>

        <div className="kr-section">
          <h2 className="kr-section-title">Updates to the Privacy Policy</h2>
          <p>
            This policy may be updated periodically to reflect service enhancements,
            regulatory changes, or security improvements. Users will be notified of
            significant updates, and continued use of the platform implies
            acceptance of the revised terms.
          </p>
        </div>

        <div className="kr-section">
          <h2 className="kr-section-title">Contact Information</h2>
          <p>
            For any questions or concerns regarding this Privacy Policy, please
            contact us at:
          </p>
          <div className="kr-contact-info">
            <p><strong>Karmic Realty</strong></p>
            <p>Orbisoul 46 Downtown, Link Road, Pashan - Sus Rd<br />Baner, Pune, Maharashtra 411045</p>
            <p>info@karmicrealty.com</p>
            <p>+91 79744 66393</p>
          </div>

          <p>
            If you have concerns about how your personal data is processed, you can
            also contact our Data Protection Officer or the relevant supervisory authority:
          </p>

          <div className="kr-contact-info">
            <p><strong>Data Protection Officer:</strong></p>
            <p>Karmic Realty Pvt Ltd.</p>
            <p>Orbisoul 46 Downtown, Link Road, Pashan - Sus Rd<br />Baner, Pune, Maharashtra 411045</p>
            <p>privacy@karmicrealty.com</p>
          </div>
        </div>

        <div className="kr-section kr-agreement">
          <p>
            By using Karmic Realty's services, you acknowledge and
            agree to the terms stated in this Privacy Policy.
          </p>
          <p className="kr-thank-you">
            Thank you for trusting Karmic Realty as your real estate
            partner!
          </p>
        </div>
      </div>

      {/* Contact Float Buttons - Uncomment if needed */}
      {/* <div className="kr-contact-float-buttons">
        <a href="https://wa.me/917974466393" className="kr-whatsapp-btn">
          <span className="kr-whatsapp-icon">📱</span>
        </a>
        <a href="tel:+917974466393" className="kr-call-btn">
          <span className="kr-call-icon">📞</span>
        </a>
      </div> */}
    </div>
  );
};

export default Privacy;