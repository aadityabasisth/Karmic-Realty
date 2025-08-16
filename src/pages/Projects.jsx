import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/projects.css";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const [displayCount, setDisplayCount] = useState(9);
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000000 }); // In rupees (5 crore max)

  const projects = [
    {
      id: 1,
      name: "Unicorn Nisarg Belrose",
      location: "Wakad, Pune",
      category: "apartment",
      type: "2 & 3 BHK",
      price: "₹75 L - ₹1.1 Cr",
      priceValue: 7500000,
      status: "ready-to-move",
      image: "/assets/projects/project1.jpg",
      newLaunch: false,
      amenities: [
        "Clubhouse",
        "Gymnasium",
        "Children's Play Area",
        "Landscaped Gardens",
        "Power Backup",
      ],
    },
    {
      id: 2,
      name: "VJ Yashwin Supernova",
      location: "Wakad, Pune",
      category: "apartment",
      type: "2 & 3 BHK",
      price: "₹85 L - ₹1.5 Cr",
      priceValue: 8500000,
      status: "under-construction",
      image: "/assets/projects/project2.jpg",
      newLaunch: false,
      amenities: [
        "Swimming Pool",
        "Clubhouse",
        "Gymnasium",
        "Indoor Games",
        "Jogging Track",
      ],
    },
    {
      id: 3,
      name: "Kolte Patil 24K Opula",
      location: "Pimple Nilakh, Pune",
      category: "apartment",
      type: "3 & 4 BHK",
      price: "₹1.6 Cr - ₹2.8 Cr",
      priceValue: 16000000,
      status: "ready-to-move",
      image: "/assets/projects/project3.jpg",
      newLaunch: false,
      amenities: [
        "Infinity Pool",
        "Spa & Sauna",
        "Sports Court",
        "Amphitheatre",
        "CCTV Security",
      ],
    },
    {
      id: 4,
      name: "Paranjape Broadway",
      location: "Wakad, Pune",
      category: "apartment",
      type: "2 & 3 BHK",
      price: "₹70 L - ₹1.2 Cr",
      priceValue: 7000000,
      status: "under-construction",
      image: "/assets/projects/project4.jpg",
      newLaunch: false,
      amenities: [
        "Multipurpose Hall",
        "Indoor Games",
        "Senior Citizen Area",
        "Gym",
        "Landscaped Garden",
      ],
    },
    {
      id: 5,
      name: "Kohinoor Coral",
      location: "Hinjewadi Phase 3, Pune",
      category: "apartment",
      type: "2 BHK",
      price: "₹65 L - ₹95 L",
      priceValue: 6500000,
      status: "ready-to-move",
      image: "/assets/projects/project5.jpg",
      newLaunch: false,
      amenities: [
        "Swimming Pool",
        "Children's Play Area",
        "Clubhouse",
        "Yoga Deck",
        "Party Lawn",
      ],
    },
    {
      id: 6,
      name: "Rohan Ekam",
      location: "Balewadi, Pune",
      category: "apartment",
      type: "2, 3 & 4 BHK",
      price: "₹1 Cr - ₹2.2 Cr",
      priceValue: 10000000,
      status: "under-construction",
      image: "/assets/projects/project6.jpg",
      newLaunch: false,
      amenities: [
        "Swimming Pool",
        "Clubhouse",
        "Amphitheatre",
        "Jogging Track",
        "Kids' Play Zone",
      ],
    },
    {
      id: 7,
      name: "Godrej Hillside",
      location: "Mahalunge, Pune",
      category: "apartment",
      type: "2 & 3 BHK",
      price: "₹70 L - ₹1.3 Cr",
      priceValue: 7000000,
      status: "under-construction",
      image: "/assets/projects/project7.jpg",
      newLaunch: false,
      amenities: [
        "Infinity Pool",
        "Sky Deck",
        "Jogging Track",
        "Meditation Zone",
        "Clubhouse",
      ],
    },
    {
      id: 8,
      name: "Kumar Parth",
      location: "Baner, Pune",
      category: "apartment",
      type: "2 & 3 BHK",
      price: "₹90 L - ₹1.8 Cr",
      priceValue: 9000000,
      status: "ready-to-move",
      image: "/assets/projects/project8.jpg",
      newLaunch: false,
      amenities: [
        "Swimming Pool",
        "Indoor Games",
        "Senior Citizen Area",
        "Landscaped Garden",
        "Power Backup",
      ],
    },
    {
      id: 9,
      name: "Mahindra Happinest",
      location: "Tathawade, Pune",
      category: "apartment",
      type: "1 & 2 BHK",
      price: "₹55 L - ₹85 L",
      priceValue: 5500000,
      status: "under-construction",
      image: "/assets/projects/project9.jpg",
      newLaunch: false,
      amenities: [
        "Kids' Play Area",
        "Community Hall",
        "Gym",
        "Jogging Track",
        "Green Open Spaces",
      ],
    },
    {
      id: 10,
      name: "VTP Pegasus",
      location: "Kharadi Annexe, Pune",
      category: "apartment",
      type: "1, 2 & 3 BHK",
      price: "₹65 L - ₹1.2 Cr",
      priceValue: 6500000,
      status: "under-construction",
      image: "/assets/projects/project10.jpg",
      newLaunch: false,
      amenities: [
        "Swimming Pool",
        "Multipurpose Hall",
        "Sports Courts",
        "Library",
        "Children's Zone",
      ],
    },
    {
      id: 11,
      name: "Gera Planet of Joy",
      location: "Kharadi, Pune",
      category: "apartment",
      type: "2, 3 & 4 BHK",
      price: "₹90 L - ₹2.5 Cr",
      priceValue: 9000000,
      status: "under-construction",
      image: "/assets/projects/project11.jpg",
      newLaunch: false,
      amenities: [
        "Swimming Pool",
        "Clubhouse",
        "Gym",
        "Cricket Pitch",
        "Open Theatre",
      ],
    },
    {
      id: 12,
      name: "Puraniks Aldea Espanola",
      location: "Baner, Pune",
      category: "apartment",
      type: "1, 2 & 3 BHK",
      price: "₹80 L - ₹1.5 Cr",
      priceValue: 8000000,
      status: "ready-to-move",
      image: "/assets/projects/project12.jpg",
      newLaunch: false,
      amenities: [
        "Swimming Pool",
        "Clubhouse",
        "Amphitheatre",
        "Landscaped Gardens",
        "Jogging Track",
      ],
    },
    {
      id: 13,
      name: "Oxford Florida Water Color",
      location: "Wakad, Pune",
      category: "apartment",
      type: "2 & 3 BHK",
      price: "₹75 L - ₹1.3 Cr",
      priceValue: 7500000,
      status: "under-construction",
      image: "/assets/projects/project13.jpg",
      newLaunch: false,
      amenities: [
        "Swimming Pool",
        "Kids' Play Area",
        "Yoga Deck",
        "Gym",
        "Community Hall",
      ],
    },
    {
      id: 14,
      name: "Shapoorji Pallonji Joyville",
      location: "Hinjewadi, Pune",
      category: "apartment",
      type: "2 & 3 BHK",
      price: "₹68 L - ₹1.4 Cr",
      priceValue: 6800000,
      status: "ready-to-move",
      image: "/assets/projects/project14.jpg",
      newLaunch: false,
      amenities: [
        "Clubhouse",
        "Swimming Pool",
        "Gym",
        "Amphitheatre",
        "Indoor Games",
      ],
    },
    {
      id: 15,
      name: "Pride World City",
      location: "Charholi, Pune",
      category: "apartment",
      type: "1, 2 & 3 BHK",
      price: "₹50 L - ₹1.1 Cr",
      priceValue: 5000000,
      status: "under-construction",
      image: "/assets/projects/project15.jpg",
      newLaunch: false,
      amenities: [
        "Shopping Arcade",
        "Swimming Pool",
        "Gym",
        "Jogging Track",
        "Garden",
      ],
    },
    {
      id: 16,
      name: "Kalpataru Jade Residences",
      location: "Baner, Pune",
      category: "apartment",
      type: "3 & 4 BHK",
      price: "₹1.5 Cr - ₹3 Cr",
      priceValue: 15000000,
      status: "ready-to-move",
      image: "/assets/projects/project16.jpg",
      newLaunch: false,
      amenities: [
        "Infinity Pool",
        "Sky Lounge",
        "Spa",
        "Multipurpose Court",
        "Clubhouse",
      ],
    },
    {
      id: 17,
      name: "Lodha Panache",
      location: "Hinjewadi Phase 1, Pune",
      category: "apartment",
      type: "2, 3 & 4 BHK",
      price: "₹1.1 Cr - ₹2.2 Cr",
      priceValue: 11000000,
      status: "under-construction",
      image: "/assets/projects/project17.jpg",
      newLaunch: false,
      amenities: [
        "Swimming Pool",
        "Cricket Ground",
        "Gym",
        "Sky Deck",
        "Kids' Zone",
      ],
    },
    {
      id: 18,
      name: "Kumar Prospera",
      location: "Magarpatta, Pune",
      category: "apartment",
      type: "2 & 3 BHK",
      price: "₹75 L - ₹1.4 Cr",
      priceValue: 7500000,
      status: "ready-to-move",
      image: "/assets/projects/project18.jpg",
      newLaunch: false,
      amenities: [
        "Swimming Pool",
        "Clubhouse",
        "Indoor Games",
        "Jogging Track",
        "Amphitheatre",
      ],
    },
    {
      id: 19,
      name: "Nyati Emerald",
      location: "Baner, Pune",
      category: "apartment",
      type: "2 & 3 BHK",
      price: "₹90 L - ₹1.6 Cr",
      priceValue: 9000000,
      status: "under-construction",
      image: "/assets/projects/project19.jpg",
      newLaunch: false,
      amenities: [
        "Swimming Pool",
        "Clubhouse",
        "Children's Play Area",
        "Gym",
        "Garden",
      ],
    },
    {
      id: 20,
      name: "Ganga Acropolis",
      location: "Baner, Pune",
      category: "apartment",
      type: "2 & 3 BHK",
      price: "₹85 L - ₹1.5 Cr",
      priceValue: 8500000,
      status: "ready-to-move",
      image: "/assets/projects/project20.jpg",
      newLaunch: false,
      amenities: [
        "Clubhouse",
        "Swimming Pool",
        "Library",
        "Gym",
        "Open Amphitheatre",
      ],
    },
  ];

  // Extract unique locations for the filter dropdown
  const locations = [
    "all",
    ...new Set(
      projects.map((project) => project.location.split(",")[0].trim())
    ),
  ];

  // Extract unique BHK types for filter
  const bhkTypes = [
    "all",
    ...new Set(
      projects.flatMap((project) =>
        project.type
          .split(/[\s&,]+/)
          .filter((part) => part.includes("BHK"))
          .map((part) => part.trim())
      )
    ),
  ].sort();

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setDisplayCount(9); // Reset display count when filter changes
  };

  const handleLocationChange = (e) => {
    setLocationFilter(e.target.value);
    setDisplayCount(9); // Reset display count when location changes
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setDisplayCount(9); // Reset display count when search changes
  };

  const loadMore = () => {
    setDisplayCount((prevCount) => prevCount + 6);
  };

  // Apply all filters
  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      filter === "all" ||
      project.category === filter ||
      project.status === filter;
    const matchesLocation =
      locationFilter === "all" || project.location.includes(locationFilter);
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriceRange =
      project.priceValue >= priceRange.min &&
      project.priceValue <= priceRange.max;

    return (
      matchesCategory && matchesLocation && matchesSearch && matchesPriceRange
    );
  });

  // Get projects to display based on current display count
  const displayedProjects = filteredProjects.slice(0, displayCount);

  // Function to determine which status badge to show and its style
  const getStatusBadge = (project) => {
    if (project.newLaunch) {
      return <div className="badge new-launch-badge">New Launch</div>;
    } else if (project.status === "ready-to-move") {
      return <div className="badge ready-to-move-badge">Ready To Move</div>;
    } else if (project.status === "under-construction") {
      return (
        <div className="badge under-construction-badge">Under Construction</div>
      );
    }
    return null;
  };

  return (
    <div className="projects-page">
      {/* Hero Section with Parallax Effect */}
      <div className="projects-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Discover Your Dream Home</h1>
          <p>
            Explore our carefully curated collection of premium properties in
            Pune
          </p>
        </div>
      </div>

      {/* Advanced Search and Filter Section - Exact match with image */}
      <div className="search-filter-wrapper">
        <div className="search-filter-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search by name, location or type..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="advanced-filters">
            <div className="filter-item">
              <select
                value={locationFilter}
                onChange={handleLocationChange}
                className="location-dropdown"
              >
                <option value="all">All Locations</option>
                {locations
                  .filter((loc) => loc !== "all")
                  .map((location, index) => (
                    <option key={index} value={location}>
                      {location}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="category-filters">
        <div className="filter-container">
          <button
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All Properties
          </button>
          <button
            className={`filter-btn ${filter === "apartment" ? "active" : ""}`}
            onClick={() => handleFilterChange("apartment")}
          >
            Apartments
          </button>
          <button
            className={`filter-btn ${filter === "new-launch" ? "active" : ""}`}
            onClick={() => handleFilterChange("new-launch")}
          >
            New Launch
          </button>
          <button
            className={`filter-btn ${
              filter === "ready-to-move" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("ready-to-move")}
          >
            Ready To Move
          </button>
          <button
            className={`filter-btn ${
              filter === "under-construction" ? "active" : ""
            }`}
            onClick={() => handleFilterChange("under-construction")}
          >
            Under Construction
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="results-container">
        <div className="projects-count">
          <span>{filteredProjects.length} properties found</span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-container">
        <div className="projects-grid">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="card-header">
                  <div
                    className="project-image"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    {getStatusBadge(project)}
                    <div className="category-badge">
                      {project.category === "apartment" ? "Apartment" : "Villa"}
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-location">
                    <span className="location-icon">📍</span> {project.location}
                  </p>
                  <div className="project-specs">
                    <div className="spec-item">
                      <span className="spec-label">Type</span>
                      <span className="spec-value">{project.type}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Price</span>
                      <span className="spec-value highlight">
                        {project.price}
                      </span>
                    </div>
                  </div>
                  <div className="project-amenities">
                    {project.amenities.slice(0, 4).map((amenity, index) => (
                      <span key={index} className="amenity-tag">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card-footer">
                  <Link
                    to={`/project/${project.id}`}
                    className="view-details-btn"
                  >
                    View Details
                  </Link>
                  <Link
                    to="/contact"
                    className="inquiry-btn"
                    state={{ project: project.name }}
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <div className="no-results-content">
                <div className="no-results-icon">🔍</div>
                <h3>No properties found</h3>
                <p>We couldn't find any properties matching your criteria.</p>
                <button
                  className="reset-filters-btn"
                  onClick={() => {
                    setFilter("all");
                    setLocationFilter("all");
                    setSearchTerm("");
                    setPriceRange({ min: 0, max: 50000000 });
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {displayedProjects.length < filteredProjects.length && (
          <div className="load-more-container">
            <button className="load-more-btn" onClick={loadMore}>
              Load More Properties
            </button>
          </div>
        )}
      </div>

      {/* Call To Action Section */}
      <div className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2>Find Your Perfect Home Today</h2>
          <p>
            Schedule a property tour or get personalized recommendations from
            our experts
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="cta-primary-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;