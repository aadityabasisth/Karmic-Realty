
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import "../styles/home.css";
import { FaCar, FaComments, FaMapMarkerAlt, FaArrowRight, FaArrowLeft, FaQuoteLeft, FaUser, FaSwimmingPool, FaChild, FaDumbbell, FaUtensils, FaBuilding, FaRunning, FaSpa, FaGlassCheers, FaParking, FaGamepad, FaCheckCircle } from "react-icons/fa";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      location: "Wakad, Pune",
      title: "AR Atlas",
      subtitle: "3 BHK Apartments",
      image: "src/assets/AR-Atlas.jpg",
    },
    {
      location: "Pimple Saudagar, Pune",
      title: "Austin One",
      subtitle: "3 & 4 BHK Apartments",
      image: "src/assets/Austin-One-Elevation.jpg",
    },
    {
      location: "Rahatani, Pune",
      title: "121 Paradise",
      subtitle: "3 BHK Apartments",
      image: "src/assets/121paradise_image-400x250-1.jpg",
    },
  ];

  // Define the validation schema using Yup
  const schema = yup
    .object({
      project: yup.string().required("Please select a project"),
      name: yup.string().required("Name is required"),
      mobile: yup
        .string()
        .required("Mobile number is required")
        .matches(/^\d{10,15}$/, "Please enter a valid mobile number"),
      email: yup
        .string()
        .required("Email is required")
        .email("Please enter a valid email address"),
      message: yup.string().required("Message is required"),
    })
    .required();

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  // Form submission handler
  const onSubmit = (data) => {
    console.log(data);
    // Redirect to home
    window.location.href = "/";
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + carouselData.length) % carouselData.length
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
  };
  const amenitiesList = [
    "Swimming Pool",
    "Kids Play Area",
    "Indoor Gym",
    "Pool Side Cafeteria",
    "Multipurpose Hall",
    "Party Lawns",
    "Jogging Track",
    "Yoga Deck",
    "Club House",
    "Car Parking",
    "Gaming Zone",
  ];

  const getAmenityIcon = (amenity) => {
    if (amenity.includes("Pool")) return <FaSwimmingPool />;
    if (amenity.includes("Play") || amenity.includes("Kid")) return <FaChild />;
    if (amenity.includes("Gym")) return <FaDumbbell />;
    if (amenity.includes("Cafeteria")) return <FaUtensils />;
    if (amenity.includes("Club")) return <FaBuilding />;
    if (amenity.includes("Track") || amenity.includes("Jogging")) return <FaRunning />;
    if (amenity.includes("Yoga")) return <FaSpa />;
    if (amenity.includes("Party") || amenity.includes("Hall")) return <FaGlassCheers />;
    if (amenity.includes("Parking")) return <FaParking />;
    if (amenity.includes("Game")) return <FaGamepad />;
    return <FaCheckCircle />;
  };

 
  return (
    <div className="home-container">
      {/* Top Bar with CTA Buttons */}
      <div className="top-cta-bar">
        <div className="cta-container">
          <a href="/book-site-visit" className="cta-button site-visit">
            <span className="cta-icon"><FaCar /></span> Book Site Visit
          </a>
          <a href="/get-details" className="cta-button get-details">
            <span className="cta-icon"><FaComments /></span> Get Details
          </a>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="carousel-container">
        {carouselData.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${
              index === currentSlide ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundColor: "#1e3a8a",
            }}
          >
            <div className="carousel-content">
              <span className="location-tag">
                <span className="location-icon"><FaMapMarkerAlt /></span> {slide.location}
              </span>
              <h1 className="main-title">{slide.title}</h1>
              <h2 className="subtitle">{slide.subtitle}</h2>
              <Link to="/projects" className="download-btn">
                Explore Projects <span className="arrow-icon"><FaArrowRight /></span>
              </Link>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button className="carousel-arrow prev" onClick={goToPrevSlide}>
          <span className="arrow-left"><FaArrowLeft /></span>
        </button>
        <button className="carousel-arrow next" onClick={goToNextSlide}>
          <span className="arrow-right"><FaArrowRight /></span>
        </button>

        <div className="carousel-indicators">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`indicator-line ${
                index === currentSlide ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Info Highlights Bar */}
      <div className="info-highlights-bar">
        <div className="info-container">
          <div className="info-column">
            <h3>Typology</h3>
            <p>2, 3, 4, 5 BHK Apartments, Duplex's & Villas @ 67.74 Lacs*</p>
          </div>
          <div className="info-column">
            <h3>Book New Launch Projects</h3>
            <p>At Pre-launch Price</p>
          </div>
          <div className="info-column">
            <h3>19,000+ Happy Customers</h3>
            <p>& Adding More Every Month</p>
          </div>
          <div className="info-column">
            <h3>38+ Years of Experience</h3>
            <p>23+ Completed Projects</p>
          </div>
        </div>
      </div>

      {/* Projects Showcase Section */}
      <div className="projects-showcase">
        <h2 className="section-heading">EXPLORE OUR PROJECTS</h2>
        <p className="section-subheading">
          19,000+ HAPPY CUSTOMERS & ADDING MORE EVERY MONTH
        </p>

        <div className="projects-grid">
          <div className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: "url(/src/assets/Anshul-Ela.jpg)" }}
            >
              {/* <div className="token-badge">TOKEN AMOUNT: ₹ 1,08,000</div> */}
            </div>
            <div className="project-info">
              <h3>Anshul Ela</h3>
              <p>Moshi, Pune</p>
            </div>
          </div>

          <div className="project-card">
            <div
              className="project-image"
              style={{
                backgroundImage: "url(src/assets/Landmarkk-Luxuria.jpg)",
              }}
            >
              {/* <div className="token-badge">TOKEN AMOUNT: ₹ 1,08,000</div> */}
            </div>
            <div className="project-info">
              <h3>Landmark Luxuria</h3>
              <p>Dudulgaon, Pune</p>
            </div>
          </div>

          <div className="project-card">
            <div
              className="project-image"
              style={{
                backgroundImage: "url(src/assets/Millennium-Amara-1.jpg)",
              }}
            >
              {/* <div className="new-launch-badge">New Launch</div> */}
            </div>
            <div className="project-info">
              <h3>Millennium Amara</h3>
              <p>Mamurdi, Pune</p>
            </div>
          </div>

          <div className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: "url(src/assets/Magnus-Parkway.jpg)" }}
            >
              {/* <div className="new-launch-badge">New Launch</div> */}
            </div>
            <div className="project-info">
              <h3>Magnus Parkway</h3>
              <p>Kiwale, Pune</p>
            </div>
          </div>
          <div className="project-card">
            <div
              className="project-image"
              style={{
                backgroundImage: "url(src/assets/Matoshree-Serenity.jpg)",
              }}
            >
              {/* <div className="new-launch-badge">New Launch</div> */}
            </div>
            <div className="project-info">
              <h3>Matoshree Serenity</h3>
              <p>Moshi, Pune</p>
            </div>
          </div>
          <div className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: "url(src/assets/Plaash-Oak.jpg)" }}
            >
              {/* <div className="new-launch-badge">New Launch</div> */}
            </div>
            <div className="project-info">
              <h3>Palaash Oak Prime</h3>
              <p>Baner, Pune</p>
            </div>
          </div>
          <div className="project-card">
            <div
              className="project-image"
              style={{
                backgroundImage: "url(src/assets/Parth-Kiona_image.jpg)",
              }}
            >
              {/* <div className="new-launch-badge">New Launch</div> */}
            </div>
            <div className="project-info">
              <h3>Parth Kiona</h3>
              <p>Hinjewadi, Pune</p>
            </div>
          </div>
          <div className="project-card">
            <div
              className="project-image"
              style={{
                backgroundImage:
                  "url(src/assets/Sai-Signature-Elevation-4.jpg)",
              }}
            >
              {/* <div className="new-launch-badge">New Launch</div> */}
            </div>
            <div className="project-info">
              <h3>Sai Signature</h3>
              <p>Mamurdi, Pune</p>
            </div>
          </div>
          <div className="project-card">
            <div
              className="project-image"
              style={{
                backgroundImage: "url(src/assets/Sparkle-Youthika.jpg)",
              }}
            >
              {/* <div className="new-launch-badge">New Launch</div> */}
            </div>
            <div className="project-info">
              <h3>Sparkle Youthika</h3>
              <p>Lohegaon, Pune</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-tag">New Residential Launch</div>
          <h1 className="hero-title">Karmic Realty</h1>
          <h2 className="hero-subtitle">
            Indulge in Nature's Serenity at Pune's Prime Spot
          </h2>
          <p className="hero-description">
            Welcome to the most trusted and dependable real estate developer in
            Pune.
          </p>
          <p className="hero-about">
            Karmic Realty is a Pune-based conglomerate that has delivered its
            services for over 30 years keeping with its core values of quality,
            trust and commitment. Urban Lifestyle and Urban Homes are the Real
            Estate arms of the Karmic Realty. This diversification has greatly
            benefited Pune with unique offerings in quality living. Karmic
            raises the benchmarks of fine living by bringing some of the most
            luxurious projects in Pune. Urban Homes, the other Karmic Realty
            creation is growing to be known for creating comfortable and quality
            budget homes. Through these, the Karmic Realty is set to conquer the
            Real Estate market in Pune.
          </p>
        </div>
      </div>

      {/* Feature Highlights */}
      {/* <div className="feature-highlights">
        <div className="feature-image">
          <img src="src/assets/image4.jpeg" alt="Modern Apartment Interior" />
        </div>
        <div className="highlights-content">
          <h2 className="highlights-title">Highlights</h2>
          <ul className="highlights-list">
            <li>→ 23+ Projects Delivered</li>
            <li>→ 10 +M Sq.Ft. Delivered</li>
            <li>→ Multi-Tier Security For Safety</li>
            <li>→ Smart Home Automation Features</li>
            <li>→ 38+ Years Of Experience In Construction</li>
            <li>→ 2.5 Crore Sq.Ft. Of Simultaneous Construction</li>
            <li>→ 19,000+ Happy Customers & Adding More Every Month</li>
          </ul>
          <a href="/brochure" className="download-brochure-btn">
            Download Brochure
          </a>
        </div>
      </div> */}

      {/* Investment Section */}
      <div className="investment-section">
        <div className="investment-content">
          <h2>Do You Want A Deal Of Investment?</h2>
        </div>
        <div className="investment-form">
          <h3>Interested? Enquire Now</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <div className="select-wrapper">
                <select
                  className={`form-input ${errors.project ? "error" : ""}`}
                  {...register("project")}
                >
                  <option value="">Choose project</option>
                  <option value="project1">VTP ALTAIR 3</option>
                  <option value="project2">VTP FLAMANTE</option>
                  <option value="project3">VTP VOLARE</option>
                </select>
              </div>

              {errors.project && (
                <span className="error-message">Please select a project</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                className={`form-input ${errors.name ? "error" : ""}`}
                {...register("name")}
              />
              {errors.name && (
                <span className="error-message">Name is required</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="tel"
                placeholder="Your Mobile Number"
                className={`form-input ${errors.mobile ? "error" : ""}`}
                {...register("mobile")}
              />
              {errors.mobile && (
                <span className="error-message">Mobile number is required</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email Address"
                className={`form-input ${errors.email ? "error" : ""}`}
                {...register("email")}
              />
              {errors.email && (
                <span className="error-message">Email is required</span>
              )}
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className={`form-input ${errors.message ? "error" : ""}`}
                {...register("message")}
              ></textarea>
              {errors.message && (
                <span className="error-message">Message is required</span>
              )}
            </div>

            <button type="submit" className="send-message-btn">
              Send Your Message
            </button>
          </form>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <h2 className="testimonial-heading">WHAT OUR CLIENTS SAY</h2>
        <div className="testimonial-slider">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <div className="quote-icon"><FaQuoteLeft /></div>
              <p>
                We had a wonderful experience with Karmic Realty. Their team
                guided us through the entire process and helped us find our
                dream home. The quality of construction is excellent.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar"><FaUser /></div>
                <div className="author-info">
                  <h4>Rohit Sharma</h4>
                  <h6>Homeowner at AR Atlas</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
      <div className="amenities-section">
        <h2 className="amenities-heading">INTERNATIONAL STANDARD</h2>
        <h3 className="amenities-subheading">Amenities</h3>

        <div className="amenities-grid">
          {amenitiesList.map((amenity, index) => (
            <div className="amenity-item" key={index}>
              <span className="amenity-icon">{getAmenityIcon(amenity)}</span>
              <p>{amenity}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
