import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/contactus.css";
import { PhoneCall, Mail, MessageSquare, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, Check } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    project: "",
    preferredContact: "email"
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });

  const [errors, setErrors] = useState({});

  const projects = [
    { id: 1, name: "Pyramid Atlante" },
    { id: 2, name: "Lush Residences" },
    { id: 3, name: "Harivishwa Infinia Phase 2" },
    { id: 4, name: "AR Atlas" },
    { id: 5, name: "Trinity Grace" },
    { id: 6, name: "Anshul Casa" }
  ];

  const officeLocations = [
    {
      name: "Corporate Headquarters",
      address: "VTP House, 503 Amar Business Zone, Baner Road, Pune - 411045",
      phone: "+91 20 6764 1024",
      email: "info@vtprealty.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      mapEmbed: "/api/placeholder/400/200"
    },
    {
      name: "Kharadi Office",
      address: "VTP Square, 4th Floor, Nagar Road, Kharadi, Pune - 411014",
      phone: "+91 20 6764 1025",
      email: "kharadi@vtprealty.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      mapEmbed: "/api/placeholder/400/200"
    },
    {
      name: "Baner Office",
      address: "VTP One, 2nd Floor, Baner-Pashan Link Road, Baner, Pune - 411045",
      phone: "+91 20 6764 1026",
      email: "baner@vtprealty.com",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      mapEmbed: "/api/placeholder/400/200"
    }
  ];

  const validateForm = () => {
    const newErrors = {};

    // Basic validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[- ]/g, ""))) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate API call
      setTimeout(() => {
        setFormStatus({
          submitted: true,
          success: true,
          message: "Thank you for your message! Our team will get back to you shortly."
        });
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          project: "",
          preferredContact: "email"
        });
      }, 1000);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-hero">
        <div className="hero-content">
          <h1>Get in Touch with Us</h1>
          <p>We would love to hear from you. Reach out to us with your inquiries, feedback, or to schedule a site visit.</p>
        </div>
      </div>

      <div className="contact-wrapper">
        <div className="contact-info">
          <div className="info-section">
            <h2>Contact Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-icon">
                  <PhoneCall size={20} color="white" />
                </div>
                <div className="info-text">
                  <h3>Call Us</h3>
                  <p>+91 20 6764 1024</p>
                  <p>Mon - Sat, 9:30 AM - 6:30 PM</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <Mail size={20} color="white" />
                </div>
                <div className="info-text">
                  <h3>Email Us</h3>
                  <p>info@vtprealty.com</p>
                  <p>sales@vtprealty.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">
                  <MessageSquare size={20} color="white" />
                </div>
                <div className="info-text">
                  <h3>WhatsApp</h3>
                  <p>+91 98765 43210</p>
                  <p>Quick responses during business hours</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon social-icon"></div>
                <div className="info-text">
                  <h3>Social Media</h3>
                  <div className="social-links">
                    <a href="#" className="social-link">
                      <Facebook size={16} color="white" />
                    </a>
                    <a href="#" className="social-link">
                      <Instagram size={16} color="white" />
                    </a>
                    <a href="#" className="social-link">
                      <Linkedin size={16} color="white" />
                    </a>
                    <a href="#" className="social-link">
                      <Youtube size={16} color="white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <div className="links-grid">
              <Link to="/projects" className="quick-link">All Projects</Link>
              <Link to="/about" className="quick-link">About Us</Link>
              {/* <Link to="/careers" className="quick-link">Careers</Link>
              <Link to="/blog" className="quick-link">Blog</Link> */}
              <Link to="/faq" className="quick-link">FAQ</Link>
              <Link to="/privacy" className="quick-link">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          {formStatus.submitted && formStatus.success ? (
            <div className="form-success">
              <div className="success-icon">
                <Check size={28} color="white" />
              </div>
              <h3>Message Sent Successfully!</h3>
              <p>{formStatus.message}</p>
              <button 
                className="btn-send-another"
                onClick={() => setFormStatus({ submitted: false, success: false, message: "" })}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="project">Interested in a Project</label>
                <select
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                >
                  <option value="">Select a Project (Optional)</option>
                  {projects.map(project => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Type your message here..."
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <div className="form-group">
                <label>Preferred Contact Method</label>
                <div className="radio-group">
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="contactEmail"
                      name="preferredContact"
                      value="email"
                      checked={formData.preferredContact === "email"}
                      onChange={handleChange}
                    />
                    <label htmlFor="contactEmail">Email</label>
                  </div>
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="contactPhone"
                      name="preferredContact"
                      value="phone"
                      checked={formData.preferredContact === "phone"}
                      onChange={handleChange}
                    />
                    <label htmlFor="contactPhone">Phone</label>
                  </div>
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="contactWhatsapp"
                      name="preferredContact"
                      value="whatsapp"
                      checked={formData.preferredContact === "whatsapp"}
                      onChange={handleChange}
                    />
                    <label htmlFor="contactWhatsapp">WhatsApp</label>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          )}
        </div>
      </div>

      <div className="office-locations">
        <h2>Our Office Locations</h2>
        <div className="locations-grid">
          {officeLocations.map((office, index) => (
            <div key={index} className="location-card">
              <h3>{office.name}</h3>
              <div className="location-map">
                <img src={office.mapEmbed} alt={`Map for ${office.name}`} />
              </div>
              <div className="location-details">
                <div className="detail-item">
                  <span className="detail-icon">
                    <MapPin size={18} color="white" />
                  </span>
                  <span className="detail-text">{office.address}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">
                    <PhoneCall size={18} color="white" />
                  </span>
                  <span className="detail-text">{office.phone}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">
                    <Mail size={18} color="white" />
                  </span>
                  <span className="detail-text">{office.email}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">
                    <Clock size={18} color="white" />
                  </span>
                  <span className="detail-text">{office.hours}</span>
                </div>
              </div>
              <a 
                href={`https://maps.google.com/?q=${encodeURIComponent(office.address)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-get-directions"
              >
                Get Directions
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="contact-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>How can I schedule a site visit?</h4>
            <p>You can schedule a site visit by filling out the contact form above, calling our sales team, or visiting any of our office locations during business hours.</p>
          </div>
          <div className="faq-item">
            <h4>What documents do I need to purchase a property?</h4>
            <p>To purchase a property, you'll typically need ID proof, address proof, PAN card, and income proof documents. Our sales team can provide you with a complete list based on your specific requirements.</p>
          </div>
          <div className="faq-item">
            <h4>Do you offer virtual property tours?</h4>
            <p>Yes, we offer virtual property tours for most of our projects. Please contact our sales team to arrange a virtual tour at your convenience.</p>
          </div>
          <div className="faq-item">
            <h4>What are the payment options available?</h4>
            <p>We offer various payment plans including construction-linked plans, down payment plans, and customized payment options. Our financial advisors can help you choose the best plan based on your needs.</p>
          </div>
        </div>
        <div className="faq-cta">
          <p>Have more questions?</p>
          <Link to="/faq" className="btn-view-all-faq">View All FAQs</Link>
        </div>
      </div>

      <div className="newsletter-section">
        <div className="newsletter-content">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with our latest projects, offers, and real estate insights.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email address" />
            <button type="submit" className="btn-subscribe">Subscribe</button>
          </form>
          <p className="newsletter-note">By subscribing, you agree to our Privacy Policy and consent to receive updates from VTP Realty.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;