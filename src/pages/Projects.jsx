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
      name: "Pyramid Atlante",
      location: "Tathawade, Pune",
      category: "apartment",
      type: "3 BHK",
      price: "1.22 Cr*",
      priceValue: 12200000, // Numerical value for filtering
      status: "ready-to-move",
      image: "src/assets/Pyramid-Atlante.jpg",
      newLaunch: false,
      amenities: ["Swimming Pool", "Gym", "Indoor Games", "Security"],
    },
    {
      id: 2,
      name: "Lush Residences",
      location: "Tathawade, Pune",
      category: "apartment",
      type: "2 & 3 BHK",
      price: "1.18 to 1.25 Cr*",
      priceValue: 11800000, // Using lower value for filtering
      status: "under-construction",
      image: "src/assets/Lush-Elevation.jpg",
      newLaunch: false,
      amenities: [
        "Landscape Garden",
        "Book Library",
        "Yoga & Meditation Zone",
        "Gazebo",
      ],
    },
    {
      id: 3,
      name: "Harivishwa Infinia Phase 2",
      location: "Tathawade, Pune",
      category: "apartment",
      type: "2, 3 & 4.5 BHK ",
      price: "95 lakhs to 1.90 Cr*",
      priceValue: 9500000, // Using lower value for filtering
      status: "new-launch",
      image: "src/assets/Harivishva-Infinia.jpg",
      newLaunch: true,
      amenities: ["Gymnasium", "Temple", "Music Room", "Party Lawn"],
    },
    {
      id: 4,
      name: "AR Atlas",
      location: "Wakad, Pune",
      category: "apartment",
      type: "3 BHK",
      price: "1.28 Cr*",
      priceValue: 12800000,
      status: "under-construction",
      image: "src/assets/AR-Atlas.jpg",
      newLaunch: false,
      amenities: ["Pool", "Garden", "Gymnasium", "Party Hall"],
    },
    {
      id: 5,
      name: "Trinity Grace",
      location: "Wakad, Pune",
      category: "apartment",
      type: "2 BHK",
      price: "84 lakhs*",
      priceValue: 8400000,
      status: "ready-to-move",
      image: "src/assets/Trinity-Grace.jpg",
      newLaunch: false,
      amenities: [
        "Swimming Pool",
        "Clubhouse",
        "Sports Courts",
        "Landscaped Gardens",
      ],
    },
    {
      id: 6,
      name: "Anshul Casa",
      location: "Wakad, Pune",
      category: "apartment",
      type: "3 BHK",
      price: "1.30 to 1.35 Cr*",
      priceValue: 13000000,
      status: "ready-to-move",
      image: "src/assets/Anshul-Casa.jpg",
      newLaunch: false,
      amenities: [
        "Cricket Turf Court",
        "Children's Play Area",
        "Skating Track",
        "Reading Corner",
      ],
    },
    {
      id: 7,
      name: "SSD Sai Pearl",
      location: "Pimple Saudagar, Pune",
      category: "apartment",
      type: "3 BHK",
      price: "1.55 - 1.60 Cr*",
      priceValue: 15500000,
      status: "ready-to-move",
      image: "src/assets/image_1.jpg",
      newLaunch: false,
      amenities: [
        "Rain Water Harvesting",
        "Automatic Lift",
        "Elegant Entrance Gate",
      ],
    },
    {
      id: 8,
      name: "Austin One",
      location: "Pimple Saudagar, Pune",
      category: "apartment",
      type: "3 & 4 BHK",
      price: "1.93 to 2.76 Cr*",
      priceValue: 19300000,
      status: "ready-to-move",
      image: "src/assets/Austin-One-Elevation.jpg",
      newLaunch: false,
      amenities: [
        "Amphitheatre",
        "Open Air Gymnasium",
        "Senior Citizen Sit outs",
        "Multipurpose Hall",
      ],
    },
    {
      id: 9,
      name: "Sai Aura",
      location: "Pimple Saudagar, Pune",
      category: "apartment",
      type: "2, 3 & 3.5 BHK",
      price: "1.26 to 2.47 Cr*",
      priceValue: 12600000,
      status: "ready-to-move",
      image: "src/assets/Sai-Aura.jpg",
      newLaunch: false,
      amenities: [
        "Clubhouse",
        "Indoor games",
        "Swimming Pool",
        "Multipurpose Court",
      ],
    },
    {
      id: 10,
      name: "VTP Urban Space",
      location: "Wakad, Pune",
      category: "apartment",
      type: "1, 2 BHK",
      price: "45.5 Lacs*",
      priceValue: 4550000,
      status: "ready-to-move",
      image: "src/assets/image4.jpeg",
      newLaunch: false,
      amenities: [
        "Fitness Center",
        "Children's Play Area",
        "Landscaped Gardens",
      ],
    },
    {
      id: 11,
      name: "Golden Meadows",
      location: "Baner, Pune",
      category: "apartment",
      type: "4 BHK",
      price: "3.75 Cr*",
      priceValue: 37500000,
      status: "under-construction",
      image: "src/assets/villa-golden-meadows.jpg",
      newLaunch: false,
      amenities: [
        "Private Pool",
        "Garden Space",
        "Smart Home System",
        "Terrace Lounge",
      ],
    },
    {
      id: 12,
      name: "Royal Orchids",
      location: "Koregaon Park, Pune",
      category: "apartment",
      type: "5 BHK",
      price: "4.2 Cr*",
      priceValue: 42000000,
      status: "ready-to-move",
      image: "src/assets/villa-royal-orchids.jpg",
      newLaunch: false,
      amenities: [
        "Home Theatre",
        "Wine Cellar",
        "Outdoor Kitchen",
        "Guest House",
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
