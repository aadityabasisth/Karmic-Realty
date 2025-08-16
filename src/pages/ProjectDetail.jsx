import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/projectdetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  // Modified to use placeholder images instead of local path references
  const getPlaceholderImage = (seed) => `/api/placeholder/800/600?text=Property_${seed}`;

  // Updated projects data with web-compatible image paths
  const projects = [
   {
  id: 1,
  name: "Pyramid Atlante",
  location: "Tathawade, Pune",
  category: "apartment",
  type: "3 BHK",
  price: "1.22 Cr*",
  status: "ready-to-move",
  image: "src/assets/Pyramid-Atlante.jpg", // Updated direct image path
  tokenAmount: "₹ 1,08,000",
  newLaunch: false,
  amenities: ["Swimming Pool", "Gym", "Indoor Games", "Security"],
  description: "Experience luxury living in the heart of Tathawade with Pyramid Atlante. These spacious 3 BHK apartments offer modern amenities and premium finishes in a convenient location close to major IT hubs and educational institutions.",
  area: "1150-1250 Sq. Ft.",
  configurations: [
    {
      type: "3 BHK",
      size: "1150 Sq. Ft.",
      price: "1.22 Cr*"
    }
  ],
  features: ["Contemporary Architecture", "Quality Construction", "Premium Fixtures", "Spacious Interiors", "Energy Efficient Systems"],
  gallery: [
    "src/assets/Pyramid-Atlante.jpg" 
    // If you have additional gallery images, add them here
    // For example: "src/assets/Pyramid-Atlante-2.jpg", "src/assets/Pyramid-Atlante-3.jpg"
  ],
  mahaRera: "P52100XXXXX",
  completionDate: "Ready to Move"
},
    {
      id: 2,
      name: "Lush Residences",
      location: "Tathawade, Pune",
      category: "apartment",
      type: "2 & 3 BHK",
      price: "1.18 to 1.25 Cr*",
      status: "under-construction",
      image: getPlaceholderImage("lush"),
      tokenAmount: "₹ 1,08,000",
      newLaunch: false,
      amenities: ["Landscape Garden", "Book Library", "Yoga & Meditation Zone", "Gazebo"],
      description: "Lush Residences offers thoughtfully designed 2 & 3 BHK apartments in the growing neighborhood of Tathawade. Enjoy a balanced lifestyle with amenities focused on wellness and relaxation, creating a peaceful retreat from the urban hustle.",
      area: "950-1200 Sq. Ft.",
      configurations: [
        {
          type: "2 BHK",
          size: "950 Sq. Ft.",
          price: "1.18 Cr*"
        },
        {
          type: "3 BHK",
          size: "1200 Sq. Ft.",
          price: "1.25 Cr*"
        }
      ],
      features: ["Green Spaces", "Sustainable Design", "Quality Fixtures", "Modern Layouts", "Eco-Friendly Features"],
      gallery: [1, 2, 3].map(n => getPlaceholderImage(`lush_${n}`)),
      mahaRera: "P52100XXXXX",
      completionDate: "December 2026"
    },
    {
      id: 3,
      name: "Harivishwa Infinia Phase 2",
      location: "Tathawade, Pune",
      category: "apartment",
      type: "2, 3 & 4.5 BHK",
      price: "95 lakhs to 1.90 Cr*",
      status: "new-launch",
      image: getPlaceholderImage("harivishwa"),
      tokenAmount: "₹ 1,50,000",
      newLaunch: true,
      amenities: ["Gymnasium", "Temple", "Music Room", "Party Lawn"],
      description: "Harivishwa Infinia Phase 2 presents a range of apartment options from compact 2 BHK to luxurious 4.5 BHK units in Tathawade. This new launch offers modern living spaces with thoughtfully designed amenities catering to diverse lifestyle needs.",
      area: "900-2200 Sq. Ft.",
      configurations: [
        {
          type: "2 BHK",
          size: "900 Sq. Ft.",
          price: "95 lakhs*"
        },
        {
          type: "3 BHK",
          size: "1300 Sq. Ft.",
          price: "1.40 Cr*"
        },
        {
          type: "4.5 BHK",
          size: "2200 Sq. Ft.",
          price: "1.90 Cr*"
        }
      ],
      features: ["Contemporary Design", "Quality Construction", "Premium Fixtures", "Spacious Layouts", "Lifestyle Amenities"],
      gallery: [1, 2, 3].map(n => getPlaceholderImage(`harivishwa_${n}`)),
      mahaRera: "P52100XXXXX",
      completionDate: "June 2027"
    },
    {
      id: 4,
      name: "AR Atlas",
      location: "Wakad, Pune",
      category: "apartment",
      type: "3 BHK",
      price: "1.28 Cr*",
      status: "under-construction",
      image: getPlaceholderImage("atlas"),
      tokenAmount: "₹ 1,00,000",
      newLaunch: true,
      amenities: ["Pool", "Garden", "Gym", "Party Hall"],
      description: "AR Atlas offers premium 3 BHK apartments in the thriving neighborhood of Wakad. These well-designed residences combine functionality with elegance, featuring modern amenities and thoughtful layouts perfect for contemporary families.",
      area: "1200 Sq. Ft.",
      configurations: [
        {
          type: "3 BHK",
          size: "1200 Sq. Ft.",
          price: "1.28 Cr*"
        }
      ],
      features: ["Modern Architecture", "Quality Finishes", "Efficient Layouts", "Lifestyle Amenities", "Strategic Location"],
      gallery: [1, 2, 3].map(n => getPlaceholderImage(`atlas_${n}`)),
      mahaRera: "P52100XXXXX",
      completionDate: "December 2026"
    },
    {
      id: 5,
      name: "Trinity Grace",
      location: "Wakad, Pune",
      category: "apartment",
      type: "2 BHK",
      price: "84 lakhs*",
      status: "ready-to-move",
      image: getPlaceholderImage("trinity"),
      tokenAmount: "₹ 2,00,000",
      newLaunch: false,
      amenities: ["Swimming Pool", "Clubhouse", "Sports Courts", "Landscaped Gardens"],
      description: "Trinity Grace offers comfortable 2 BHK apartments in the prime location of Wakad. Ready to move in, these residences provide excellent value with a range of premium amenities and thoughtful design elements.",
      area: "900 Sq. Ft.",
      configurations: [
        {
          type: "2 BHK",
          size: "900 Sq. Ft.",
          price: "84 lakhs*"
        }
      ],
      features: ["Quality Construction", "Modern Design", "Efficient Layouts", "Premium Fixtures", "Thoughtful Amenities"],
      gallery: [1, 2, 3].map(n => getPlaceholderImage(`trinity_${n}`)),
      mahaRera: "P52100XXXXX",
      completionDate: "Ready to Move"
    },
    {
      id: 6,
      name: "Anshul Casa",
      location: "Wakad, Pune",
      category: "apartment",
      type: "3 BHK",
      price: "1.30 to 1.35 Cr*",
      status: "ready-to-move",
      image: getPlaceholderImage("anshul"),
      tokenAmount: "₹ 80,000",
      newLaunch: false,
      amenities: ["Cricket Turf Court", "Children's Play Area", "Skating Track", "Reading Corner"],
      description: "Anshul Casa presents elegant 3 BHK apartments in the sought-after neighborhood of Wakad. These ready-to-move homes offer unique lifestyle amenities with a focus on active and intellectual pursuits, perfect for families looking for a well-rounded living experience.",
      area: "1250-1300 Sq. Ft.",
      configurations: [
        {
          type: "3 BHK",
          size: "1250 Sq. Ft.",
          price: "1.30 Cr*"
        },
        {
          type: "3 BHK Premium",
          size: "1300 Sq. Ft.",
          price: "1.35 Cr*"
        }
      ],
      features: ["Contemporary Design", "Quality Construction", "Lifestyle Amenities", "Efficient Layouts", "Family-focused Spaces"],
      gallery: [1, 2, 3].map(n => getPlaceholderImage(`anshul_${n}`)),
      mahaRera: "P52100XXXXX",
      completionDate: "Ready to Move"
    },
    {
      id: 7,
      name: "SSD Sai Pearl",
      location: "Pimple Saudagar, Pune",
      category: "apartment",
      type: "3 BHK",
      price: "1.55 - 1.60 Cr*",
      status: "ready-to-move",
      image: getPlaceholderImage("saipearl"),
      tokenAmount: "₹ 80,000",
      newLaunch: false,
      amenities: ["Rain Water Harvesting", "Automatic Lift", "Elegant Entrance Gate"],
      description: "SSD Sai Pearl offers premium 3 BHK apartments in the upscale neighborhood of Pimple Saudagar. These ready-to-move residences feature thoughtful design elements and practical amenities focused on sustainability and convenience.",
      area: "1350-1400 Sq. Ft.",
      configurations: [
        {
          type: "3 BHK",
          size: "1350 Sq. Ft.",
          price: "1.55 Cr*"
        },
        {
          type: "3 BHK Premium",
          size: "1400 Sq. Ft.",
          price: "1.60 Cr*"
        }
      ],
      features: ["Sustainable Features", "Modern Design", "Quality Construction", "Efficient Layouts", "Strategic Location"],
      gallery: [1, 2, 3].map(n => getPlaceholderImage(`saipearl_${n}`)),
      mahaRera: "P52100XXXXX",
      completionDate: "Ready to Move"
    },
    {
      id: 8,
      name: "Austin One",
      location: "Pimple Saudagar, Pune",
      category: "apartment",
      type: "3 & 4 BHK",
      price: "1.93 to 2.76 Cr*",
      status: "ready-to-move",
      image: getPlaceholderImage("austin"),
      tokenAmount: "₹ 80,000",
      newLaunch: false,
      amenities: ["Amphitheatre", "Open Air Gymnasium", "Senior Citizen Sit outs", "Multipurpose Hall"],
      description: "Austin One presents luxury 3 & 4 BHK apartments in the premium location of Pimple Saudagar. These ready-to-move residences offer high-end living spaces with thoughtfully designed amenities catering to all age groups and lifestyle needs.",
      area: "1500-2100 Sq. Ft.",
      configurations: [
        {
          type: "3 BHK",
          size: "1500 Sq. Ft.",
          price: "1.93 Cr*"
        },
        {
          type: "4 BHK",
          size: "2100 Sq. Ft.",
          price: "2.76 Cr*"
        }
      ],
      features: ["Premium Finishes", "Spacious Layouts", "Luxury Amenities", "Quality Construction", "Strategic Location"],
      gallery: [1, 2, 3].map(n => getPlaceholderImage(`austin_${n}`)),
      mahaRera: "P52100XXXXX",
      completionDate: "Ready to Move"
    },
    {
      id: 9,
      name: "Sai Aura",
      location: "Pimple Saudagar, Pune",
      category: "apartment",
      type: "2, 3 & 3.5 BHK",
      price: "1.26 to 2.47 Cr*",
      status: "ready-to-move",
      image: getPlaceholderImage("saiaura"),
      tokenAmount: "₹ 80,000",
      newLaunch: false,
      amenities: ["Clubhouse", "Indoor games", "Swimming Pool", "Multipurpose Court"],
      description: "Sai Aura offers a range of premium apartments from compact 2 BHK to spacious 3.5 BHK units in the coveted neighborhood of Pimple Saudagar. These ready-to-move residences combine luxury living with excellent recreational amenities.",
      area: "1100-1800 Sq. Ft.",
      configurations: [
        {
          type: "2 BHK",
          size: "1100 Sq. Ft.",
          price: "1.26 Cr*"
        },
        {
          type: "3 BHK",
          size: "1500 Sq. Ft.",
          price: "1.85 Cr*"
        },
        {
          type: "3.5 BHK",
          size: "1800 Sq. Ft.",
          price: "2.47 Cr*"
        }
      ],
      features: ["Luxury Finishes", "Spacious Layouts", "Premium Amenities", "Quality Construction", "Prime Location"],
      gallery: [1, 2, 3].map(n => getPlaceholderImage(`saiaura_${n}`)),
      mahaRera: "P52100XXXXX",
      completionDate: "Ready to Move"
    }
  ];

  useEffect(() => {
    // Simulate API fetch with timeout
    const timer = setTimeout(() => {
      const foundProject = projects.find(p => p.id === parseInt(id));
      setProject(foundProject);
      setLoading(false);
    }, 500);
    
    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, [id]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Get amenity icon based on name
  const getAmenityIcon = (amenity) => {
    if (amenity.includes("Pool")) return "🏊";
    if (amenity.includes("Gym") || amenity.includes("Fitness")) return "💪";
    if (amenity.includes("Garden") || amenity.includes("Landscaped")) return "🌳";
    if (amenity.includes("Security")) return "🔒";
    if (amenity.includes("Court") || amenity.includes("Sport")) return "🎾";
    if (amenity.includes("Play") || amenity.includes("Kid")) return "👶";
    if (amenity.includes("Club")) return "🏢";
    if (amenity.includes("Track") || amenity.includes("Jogging")) return "🏃";
    if (amenity.includes("Yoga")) return "🧘";
    if (amenity.includes("Party") || amenity.includes("Hall")) return "🎉";
    if (amenity.includes("Parking")) return "🚗";
    if (amenity.includes("Game")) return "🎮";
    if (amenity.includes("Temple")) return "🛕";
    if (amenity.includes("Music")) return "🎵";
    if (amenity.includes("Reading") || amenity.includes("Library")) return "📚";
    return "✨";
  };

  // Loading state with improved spinner
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading project details...</p>
      </div>
    );
  }

  // Project not found state
  if (!project) {
    return (
      <div className="not-found">
        <h2>Project Not Found</h2>
        <p>The project you are looking for does not exist or has been removed.</p>
        <Link to="/projects" className="back-btn">Back to Projects</Link>
      </div>
    );
  }

  // Format status text for display
  const getStatusText = (status) => {
    if (status === "ready-to-move") return "Ready To Move";
    if (status === "under-construction") return "Under Construction";
    return "New Launch";
  };

  return (
    <div className="project-detail-page">
      {/* Header Section with Property Name and Basic Info */}
      <div className="project-header" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.image})`
      }}>
        <div className="header-overlay">
          <div className="container">
            <Link to="/projects" className="back-link">
              <span>←</span> Back to Projects
            </Link>
            <h1>{project.name}</h1>
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-icon">📍</span>
                <span>{project.location}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">🏠</span>
                <span>{project.type}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon">💰</span>
                <span>Starting {project.price}</span>
              </div>
              <div className="meta-item status">
                <span className={`status-badge ${project.status}`}>
                  {getStatusText(project.status)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="project-nav">
        <div className="container">
          <div className="nav-tabs">
            <button 
              className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => handleTabChange("overview")}
              aria-label="Show overview tab"
            >
              Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === "amenities" ? "active" : ""}`}
              onClick={() => handleTabChange("amenities")}
              aria-label="Show amenities tab"
            >
              Amenities
            </button>
            <button 
              className={`tab-btn ${activeTab === "configurations" ? "active" : ""}`}
              onClick={() => handleTabChange("configurations")}
              aria-label="Show configurations tab"
            >
              Configurations
            </button>
            <button 
              className={`tab-btn ${activeTab === "gallery" ? "active" : ""}`}
              onClick={() => handleTabChange("gallery")}
              aria-label="Show gallery tab"
            >
              Gallery
            </button>
            <button 
              className={`tab-btn ${activeTab === "location" ? "active" : ""}`}
              onClick={() => handleTabChange("location")}
              aria-label="Show location tab"
            >
              Location
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="project-content">
        <div className="container">
          {/* Overview Tab Content */}
          {activeTab === "overview" && (
            <div className="overview-section">
              <div className="overview-grid">
                <div className="overview-left">
                  <h2>About {project.name}</h2>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="key-details">
                    <h3>Project Highlights</h3>
                    <div className="details-grid">
                      <div className="detail-box">
                        <span className="detail-icon">📐</span>
                        <div className="detail-info">
                          <span className="detail-label">Area Range</span>
                          <span className="detail-value">{project.area}</span>
                        </div>
                      </div>
                      <div className="detail-box">
                        <span className="detail-icon">💰</span>
                        <div className="detail-info">
                          <span className="detail-label">Price Starting</span>
                          <span className="detail-value">{project.price}</span>
                        </div>
                      </div>
                      <div className="detail-box">
                        <span className="detail-icon">🏗️</span>
                        <div className="detail-info">
                          <span className="detail-label">Project Status</span>
                          <span className="detail-value">
                            {getStatusText(project.status)}
                          </span>
                        </div>
                      </div>
                      <div className="detail-box">
                        <span className="detail-icon">📅</span>
                        <div className="detail-info">
                          <span className="detail-label">Completion</span>
                          <span className="detail-value">{project.completionDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="specifications">
                    <h3>Key Features</h3>
                    <ul className="feature-list">
                      {project.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span className="feature-icon">✓</span>
                          <span className="feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="overview-right">
                  <div className="project-image-main">
                    <img src={project.image} alt={project.name} />
                  </div>
                  <div className="enquiry-box">
                    <h3>Interested in {project.name}?</h3>
                    <div className="maha-rera">
                      <p>MAHA RERA: {project.mahaRera}</p>
                    </div>
                    <div className="download-links">
                      <a href="#" className="download-link">Download Brochure</a>
                      <a href="#" className="download-link">Download Floor Plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Amenities Tab Content */}
          {activeTab === "amenities" && (
            <div className="amenities-section">
              <h2>Amenities & Facilities</h2>
              <div className="amenities-grid">
                {[...project.amenities, "Parking", "Children's Play Area", "24/7 Security", "Landscaped Gardens"].map((amenity, index) => (
                  <div className="amenity-card" key={index}>
                    <div className="amenity-icon">
                      {getAmenityIcon(amenity)}
                    </div>
                    <div className="amenity-name">{amenity}</div>
                  </div>
                ))}
              </div>
              <div className="facility-images">
                {[
                  { name: "Swimming Pool", image: getPlaceholderImage("pool") },
                  { name: "Clubhouse", image: getPlaceholderImage("clubhouse") },
                  { name: "Gymnasium", image: getPlaceholderImage("gym") }
                ].map((facility, index) => (
                  <div className="facility-image" key={index}>
                    <img src={facility.image} alt={facility.name} />
                    <p>{facility.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Configurations Tab Content */}
          {activeTab === "configurations" && (
            <div className="configurations-section">
              <h2>Available Configurations</h2>
              <div className="config-cards">
                {project.configurations.map((config, index) => (
                  <div className="config-card" key={index}>
                    <div className="config-header">
                      <h3>{config.type}</h3>
                      <span className="config-price">{config.price}</span>
                    </div>
                    <div className="config-image">
                      <img src={getPlaceholderImage(`floorplan_${index}`)} alt={`${config.type} Layout`} />
                    </div>
                    <div className="config-details">
                      <div className="config-detail">
                        <span className="detail-label">Carpet Area</span>
                        <span className="detail-value">{config.size}</span>
                      </div>
                      <div className="config-detail">
                        <span className="detail-label">Token Amount</span>
                        <span className="detail-value">{project.tokenAmount}</span>
                      </div>
                    </div>
                    <div className="config-actions">
                      <button className="view-floor-plan">View Floor Plan</button>
                      <button className="request-quote">Request Quote</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pricing-note">
                <p>* All prices are base prices exclusive of statutory charges, taxes and other costs.</p>
                <p>* Final price will be calculated at the time of booking.</p>
              </div>
            </div>
          )}

          {/* Gallery Tab Content */}
          {activeTab === "gallery" && (
            <div className="gallery-section">
              <h2>Project Gallery</h2>
              <div className="gallery-grid">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div className="gallery-item" key={item}>
                    <img 
                      src={getPlaceholderImage(`gallery_${project.id}_${item}`)} 
                      alt={`${project.name} - Image ${item}`} 
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Location Tab Content */}
          {activeTab === "location" && (
            <div className="location-section">
              <h2>Location Advantages</h2>
              <div className="location-map">
                <div className="map-placeholder">
                  <img src={getPlaceholderImage("map")} alt="Map Location" />
                </div>
                <a href="#" className="view-on-map">View on Google Maps</a>
              </div>
              <div className="location-advantages">
                <h3>What's Nearby</h3>
                <div className="advantages-grid">
                  <div className="advantage-column">
                    <h4>Education</h4>
                    <ul>
                      <li>International School (1.5 km)</li>
                      <li>Engineering College (3 km)</li>
                      <li>Primary School (0.8 km)</li>
                    </ul>
                  </div>
                  <div className="advantage-column">
                    <h4>Healthcare</h4>
                    <ul>
                      <li>Multispecialty Hospital (2 km)</li>
                      <li>Medical Center (1 km)</li>
                      <li>Pharmacy (0.5 km)</li>
                    </ul>
                  </div>
                  <div className="advantage-column">
                    <h4>Shopping & Entertainment</h4>
                    <ul>
                      <li>Shopping Mall (1.2 km)</li>
                      <li>Supermarket (0.3 km)</li>
                      <li>Multiplex (2.5 km)</li>
                    </ul>
                  </div>
                  <div className="advantage-column">
                    <h4>Connectivity</h4>
                    <ul>
                      <li>Metro Station (1 km)</li>
                      <li>Bus Stop (0.2 km)</li>
                      <li>Airport (15 km)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Similar Projects Section */}
      <div className="similar-projects">
        <div className="container">
          <h2>Similar Projects</h2>
          <div className="similar-grid">
            {projects
              .filter(p => p.id !== project.id && p.category === project.category)
              .slice(0, 3)
              .map(similarProject => (
                <div className="similar-card" key={similarProject.id}>
                  <div className="similar-image">
                    <img src={similarProject.image} alt={similarProject.name} />
                  </div>
                  <div className="similar-info">
                    <h3>{similarProject.name}</h3>
                    <p>{similarProject.location}</p>
                    <span className="similar-price">{similarProject.price}</span>
                    <Link to={`/project/${similarProject.id}`} className="view-similar">
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Footer CTA Section */}
      <div className="project-footer">
        <div className="container">
          <div className="footer-cta">
            <h2>Interested in {project.name}?</h2>
            <p>Contact our sales team for more information or to schedule a site visit</p>
            <div className="cta-buttons">
              <a href="/contact" className="enquire-btn">Enquire Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

