import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  FaMapMarkerAlt, FaHome, FaMoneyBillWave, FaRuler, FaCalendarAlt,
  FaSwimmingPool, FaDumbbell, FaTree, FaLock, FaChild, FaBuilding,
  FaRunning, FaBook, FaPlaceOfWorship, FaMusic, FaCar, FaGamepad,
  FaCheck, FaDownload, FaPhone, FaEnvelope, FaArrowLeft
} from "react-icons/fa";
import "../styles/projectdetail.css";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  // Complete projects data with all 20 projects
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
      amenities: ["Clubhouse", "Gymnasium", "Children's Play Area", "Landscaped Gardens", "Power Backup"],
      description: "Premium 2 & 3 BHK apartments in Wakad with modern amenities and excellent connectivity to IT hubs and educational institutions.",
      area: "750 - 1050 sq.ft.",
      configurations: [
        { type: "2 BHK", size: "750 sq.ft.", price: "₹75 L" },
        { type: "3 BHK", size: "1050 sq.ft.", price: "₹1.1 Cr" }
      ],
      features: ["Premium finishes", "Energy efficient design", "Ample natural light", "Spacious balconies"],
      gallery: ["/assets/projects/project1.jpg", "/assets/projects/project1-2.jpg", "/assets/projects/project1-3.jpg"],
      mahaRera: "P521000001",
      completionDate: "Ready to Move"
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
      amenities: ["Swimming Pool", "Clubhouse", "Gymnasium", "Indoor Games", "Jogging Track"],
      description: "Modern 2 & 3 BHK apartments with luxurious amenities and thoughtful design for contemporary living.",
      area: "750 - 1150 sq.ft.",
      configurations: [
        { type: "2 BHK", size: "750 sq.ft.", price: "₹85 L" },
        { type: "3 BHK", size: "1150 sq.ft.", price: "₹1.5 Cr" }
      ],
      features: ["Smart home features", "Premium flooring", "Modular kitchen", "Landscaped terrace"],
      gallery: ["/assets/projects/project2.jpg", "/assets/projects/project2-2.jpg", "/assets/projects/project2-3.jpg"],
      mahaRera: "P521000002",
      completionDate: "Mar 2026"
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
      amenities: ["Infinity Pool", "Spa & Sauna", "Sports Court", "Amphitheatre", "CCTV Security"],
      description: "Luxurious 3 & 4 BHK apartments with premium amenities and sophisticated design in Pimple Nilakh.",
      area: "1350 - 2200 sq.ft.",
      configurations: [
        { type: "3 BHK", size: "1350 sq.ft.", price: "₹1.6 Cr" },
        { type: "4 BHK", size: "2200 sq.ft.", price: "₹2.8 Cr" }
      ],
      features: ["Luxury interiors", "Smart home technology", "Premium appliances", "Panoramic views"],
      gallery: ["/assets/projects/project3.jpg", "/assets/projects/project3-2.jpg", "/assets/projects/project3-3.jpg"],
      mahaRera: "P521000003",
      completionDate: "Ready to Move"
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
      amenities: ["Multipurpose Hall", "Indoor Games", "Senior Citizen Area", "Gym", "Landscaped Garden"],
      description: "Well-designed 2 & 3 BHK apartments in Wakad with focus on community living and modern amenities.",
      area: "720 - 1100 sq.ft.",
      configurations: [
        { type: "2 BHK", size: "720 sq.ft.", price: "₹70 L" },
        { type: "3 BHK", size: "1100 sq.ft.", price: "₹1.2 Cr" }
      ],
      features: ["Community spaces", "Sustainable design", "Quality construction", "Modern layouts"],
      gallery: ["/assets/projects/project4.jpg", "/assets/projects/project4-2.jpg", "/assets/projects/project4-3.jpg"],
      mahaRera: "P521000004",
      completionDate: "Dec 2026"
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
      amenities: ["Swimming Pool", "Children's Play Area", "Clubhouse", "Yoga Deck", "Party Lawn"],
      description: "Affordable 2 BHK apartments in Hinjewadi Phase 3 with quality amenities and convenient location.",
      area: "650 - 850 sq.ft.",
      configurations: [
        { type: "2 BHK", size: "650 sq.ft.", price: "₹65 L" },
        { type: "2 BHK Premium", size: "850 sq.ft.", price: "₹95 L" }
      ],
      features: ["Quality construction", "Functional layouts", "Community spaces", "Green areas"],
      gallery: ["/assets/projects/project5.jpg", "/assets/projects/project5-2.jpg", "/assets/projects/project5-3.jpg"],
      mahaRera: "P521000005",
      completionDate: "Ready to Move"
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
      amenities: ["Swimming Pool", "Clubhouse", "Amphitheatre", "Jogging Track", "Kids' Play Zone"],
      description: "Premium 2, 3 & 4 BHK apartments in Balewadi with expansive amenities and modern design.",
      area: "800 - 2000 sq.ft.",
      configurations: [
        { type: "2 BHK", size: "800 sq.ft.", price: "₹1 Cr" },
        { type: "3 BHK", size: "1500 sq.ft.", price: "₹1.8 Cr" },
        { type: "4 BHK", size: "2000 sq.ft.", price: "₹2.2 Cr" }
      ],
      features: ["Premium finishes", "Spacious layouts", "Luxury amenities", "Quality construction"],
      gallery: ["/assets/projects/project6.jpg", "/assets/projects/project6-2.jpg", "/assets/projects/project6-3.jpg"],
      mahaRera: "P521000006",
      completionDate: "Dec 2027"
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
      amenities: ["Infinity Pool", "Sky Deck", "Jogging Track", "Meditation Zone", "Clubhouse"],
      description: "Premium 2 & 3 BHK apartments in Mahalunge with contemporary design and wellness-focused amenities.",
      area: "700 - 1050 sq.ft.",
      configurations: [
        { type: "2 BHK", size: "700 sq.ft.", price: "₹70 L" },
        { type: "3 BHK", size: "1050 sq.ft.", price: "₹1.3 Cr" }
      ],
      features: ["Wellness-focused design", "Premium finishes", "Smart home features", "Sustainable materials"],
      gallery: ["/assets/projects/project7.jpg", "/assets/projects/project7-2.jpg", "/assets/projects/project7-3.jpg"],
      mahaRera: "P521000007",
      completionDate: "Mar 2026"
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
      amenities: ["Swimming Pool", "Indoor Games", "Senior Citizen Area", "Landscaped Garden", "Power Backup"],
      description: "Premium 2 & 3 BHK apartments in the prime location of Baner with quality construction and amenities.",
      area: "750 - 1250 sq.ft.",
      configurations: [
        { type: "2 BHK", size: "750 sq.ft.", price: "₹90 L" },
        { type: "3 BHK", size: "1250 sq.ft.", price: "₹1.8 Cr" }
      ],
      features: ["Quality construction", "Modern design", "Functional layouts", "Premium finishes"],
      gallery: ["/assets/projects/project8.jpg", "/assets/projects/project8-2.jpg", "/assets/projects/project8-3.jpg"],
      mahaRera: "P521000008",
      completionDate: "Ready to Move"
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
      amenities: ["Kids' Play Area", "Community Hall", "Gym", "Jogging Track", "Green Open Spaces"],
      description: "Affordable 1 & 2 BHK apartments in Tathawade designed for comfortable urban living.",
      area: "500 - 750 sq.ft.",
      configurations: [
        { type: "1 BHK", size: "500 sq.ft.", price: "₹55 L" },
        { type: "2 BHK", size: "750 sq.ft.", price: "₹85 L" }
      ],
      features: ["Compact designs", "Functional spaces", "Community focus", "Green living"],
      gallery: ["/assets/projects/project9.jpg", "/assets/projects/project9-2.jpg", "/assets/projects/project9-3.jpg"],
      mahaRera: "P521000009",
      completionDate: "Dec 2025"
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
      amenities: ["Swimming Pool", "Multipurpose Hall", "Sports Courts", "Library", "Children's Zone"],
      description: "Versatile 1, 2 & 3 BHK apartments in Kharadi Annexe with family-friendly amenities.",
      area: "480 - 1050 sq.ft.",
      configurations: [
        { type: "1 BHK", size: "480 sq.ft.", price: "₹65 L" },
        { type: "2 BHK", size: "750 sq.ft.", price: "₹85 L" },
        { type: "3 BHK", size: "1050 sq.ft.", price: "₹1.2 Cr" }
      ],
      features: ["Family-friendly design", "Quality construction", "Community spaces", "Modern amenities"],
      gallery: ["/assets/projects/project10.jpg", "/assets/projects/project10-2.jpg", "/assets/projects/project10-3.jpg"],
      mahaRera: "P521000010",
      completionDate: "Dec 2026"
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
      amenities: ["Swimming Pool", "Clubhouse", "Gym", "Cricket Pitch", "Open Theatre"],
      description: "Premium 2, 3 & 4 BHK apartments in Kharadi with unique recreational amenities and joyful living spaces.",
      area: "800 - 2000 sq.ft.",
      configurations: [
        { type: "2 BHK", size: "800 sq.ft.", price: "₹90 L" },
        { type: "3 BHK", size: "1500 sq.ft.", price: "₹1.8 Cr" },
        { type: "4 BHK", size: "2000 sq.ft.", price: "₹2.5 Cr" }
      ],
      features: ["Joyful living concept", "Premium amenities", "Quality construction", "Thoughtful design"],
      gallery: ["/assets/projects/project11.jpg", "/assets/projects/project11-2.jpg", "/assets/projects/project11-3.jpg"],
      mahaRera: "P521000011",
      completionDate: "2027"
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
      amenities: ["Swimming Pool", "Clubhouse", "Amphitheatre", "Landscaped Gardens", "Jogging Track"],
      description: "Spanish-themed 1, 2 & 3 BHK apartments in Baner offering unique architectural design and premium amenities.",
      area: "650 - 1150 sq.ft.",
      configurations: [
        { type: "1 BHK", size: "650 sq.ft.", price: "₹80 L" },
        { type: "2 BHK", size: "900 sq.ft.", price: "₹1.1 Cr" },
        { type: "3 BHK", size: "1150 sq.ft.", price: "₹1.5 Cr" }
      ],
      features: ["Spanish architecture", "Premium finishes", "Unique design elements", "Quality construction"],
      gallery: ["/assets/projects/project12.jpg", "/assets/projects/project12-2.jpg", "/assets/projects/project12-3.jpg"],
      mahaRera: "P521000012",
      completionDate: "Ready to Move"
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
      amenities: ["Swimming Pool", "Kids' Play Area", "Yoga Deck", "Gym", "Community Hall"],
      description: "Artistically designed 2 & 3 BHK apartments in Wakad with vibrant color schemes and creative spaces.",
      area: "700 - 1150 sq.ft.",
      configurations: [
        { type: "2 BHK", size: "700 sq.ft.", price: "₹75 L" },
        { type: "3 BHK", size: "1150 sq.ft.", price: "₹1.3 Cr" }
      ],
      features: ["Artistic design", "Colorful interiors", "Creative spaces", "Modern amenities"],
      gallery: ["/assets/projects/project13.jpg", "/assets/projects/project13-2.jpg", "/assets/projects/project13-3.jpg"],
      mahaRera: "P521000013",
      completionDate: "Dec 2025"
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
      amenities: ["Clubhouse", "Swimming Pool", "Gym", "Amphitheatre", "Indoor Games"],
      description: "Premium 2 & 3 BHK apartments in Hinjewadi designed for joyful community living with quality amenities.",
      area: "650 - 1150 sq.ft.",
      configurations: [
        { type: "2 BHK", size: "650 sq.ft.", price: "₹68 L" },
        { type: "3 BHK", size: "1150 sq.ft.", price: "₹1.4 Cr" }
      ],
      features: ["Community-focused design", "Quality construction", "Premium amenities", "Joyful living concept"],
      gallery: ["/assets/projects/project14.jpg", "/assets/projects/project14-2.jpg", "/assets/projects/project14-3.jpg"],
      mahaRera: "P521000014",
      completionDate: "Ready to Move"
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
      amenities: ["Shopping Arcade", "Swimming Pool", "Gym", "Jogging Track", "Garden"],
      description: "Affordable 1, 2 & 3 BHK apartments in Charholi with self-contained township amenities.",
      area: "500 - 1200 sq.ft.",
      configurations: [
        { type: "1 BHK", size: "500 sq.ft.", price: "₹50 L" },
        { type: "2 BHK", size: "800 sq.ft.", price: "₹75 L" },
        { type: "3 BHK", size: "1200 sq.ft.", price: "₹1.1 Cr" }
      ],
      features: ["Township living", "Affordable pricing", "Self-contained amenities", "Quality construction"],
      gallery: ["/assets/projects/project15.jpg", "/assets/projects/project15-2.jpg", "/assets/projects/project15-3.jpg"],
      mahaRera: "P521000015",
      completionDate: "Dec 2026"
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
      amenities: ["Infinity Pool", "Sky Lounge", "Spa", "Multipurpose Court", "Clubhouse"],
      description: "Luxury 3 & 4 BHK residences in Baner with premium amenities and sophisticated design.",
      area: "1400 - 2200 sq.ft.",
      configurations: [
        { type: "3 BHK", size: "1400 sq.ft.", price: "₹1.5 Cr" },
        { type: "4 BHK", size: "2200 sq.ft.", price: "₹3 Cr" }
      ],
      features: ["Luxury finishes", "Premium amenities", "Sophisticated design", "High-end specifications"],
      gallery: ["/assets/projects/project16.jpg", "/assets/projects/project16-2.jpg", "/assets/projects/project16-3.jpg"],
      mahaRera: "P521000016",
      completionDate: "Ready to Move"
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
      amenities: ["Swimming Pool", "Cricket Ground", "Gym", "Sky Deck", "Kids' Zone"],
      description: "Premium 2, 3 & 4 BHK apartments in Hinjewadi Phase 1 with expansive amenities and quality construction.",
      area: "900 - 2000 sq.ft.",
      configurations: [
        { type: "2 BHK", size: "900 sq.ft.", price: "₹1.1 Cr" },
        { type: "3 BHK", size: "1500 sq.ft.", price: "₹1.8 Cr" },
        { type: "4 BHK", size: "2000 sq.ft.", price: "₹2.2 Cr" }
      ],
      features: ["Premium specifications", "Quality construction", "Expansive amenities", "Thoughtful design"],
      gallery: ["/assets/projects/project17.jpg", "/assets/projects/project17-2.jpg", "/assets/projects/project17-3.jpg"],
      mahaRera: "P521000017",
      completionDate: "2027"
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
      amenities: ["Swimming Pool", "Clubhouse", "Indoor Games", "Jogging Track", "Amphitheatre"],
      description: "Premium 2 & 3 BHK apartments in Magarpatta with quality amenities and convenient location.",
      area: "700 - 1200 sq.ft.",
      configurations: [
        { type: "2 BHK", size: "700 sq.ft.", price: "₹75 L" },
        { type: "3 BHK", size: "1200 sq.ft.", price: "₹1.4 Cr" }
      ],
      features: ["Quality construction", "Premium finishes", "Modern amenities", "Convenient location"],
      gallery: ["/assets/projects/project18.jpg", "/assets/projects/project18-2.jpg", "/assets/projects/project18-3.jpg"],
      mahaRera: "P521000018",
      completionDate: "Ready to Move"
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
      amenities: ["Swimming Pool", "Clubhouse", "Children's Play Area", "Gym", "Garden"],
      description: "Premium 2 & 3 BHK apartments in Baner with quality amenities and thoughtful design.",
      area: "750 - 1250 sq.ft.",
      configurations: [
        { type: "2 BHK", size: "750 sq.ft.", price: "₹90 L" },
        { type: "3 BHK", size: "1250 sq.ft.", price: "₹1.6 Cr" }
      ],
      features: ["Quality construction", "Modern design", "Functional layouts", "Premium finishes"],
      gallery: ["/assets/projects/project19.jpg", "/assets/projects/project19-2.jpg", "/assets/projects/project19-3.jpg"],
      mahaRera: "P521000019",
      completionDate: "Dec 2025"
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
      amenities: ["Clubhouse", "Swimming Pool", "Library", "Gym", "Open Amphitheatre"],
      description: "Premium 2 & 3 BHK apartments in the prime location of Baner, offering luxury living with excellent amenities.",
      area: "750 - 1200 sq.ft.",
      configurations: [
        { type: "2 BHK", size: "750 sq.ft.", price: "₹85 L" },
        { type: "3 BHK", size: "1200 sq.ft.", price: "₹1.5 Cr" }
      ],
      features: ["Premium finishes", "Modern architecture", "Energy efficient", "Spacious layouts"],
      gallery: ["/assets/projects/project20.jpg", "/assets/projects/project20-2.jpg", "/assets/projects/project20-3.jpg"],
      mahaRera: "P521000020",
      completionDate: "Ready to Move"
    }
  ];

  // Verify all project IDs exist (1-20)
  useEffect(() => {
    const missingProjects = [];
    for (let i = 1; i <= 20; i++) {
      if (!projects.some(p => p.id === i)) {
        missingProjects.push(i);
      }
    }
    if (missingProjects.length > 0) {
      console.error("Missing project IDs:", missingProjects);
    } else {
      console.log("All project IDs (1-20) are present");
    }
  }, []);

  useEffect(() => {
    // Convert id to number and find project
    const projectId = Number(id);
    const foundProject = projects.find(p => p.id === projectId);
    
    const timer = setTimeout(() => {
      if (foundProject) {
        setProject(foundProject);
      } else {
        console.error(`Project with ID ${id} not found`);
      }
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const getAmenityIcon = (amenity) => {
    const iconMap = {
      "Pool": <FaSwimmingPool className="amenity-icon" />,
      "Gym": <FaDumbbell className="amenity-icon" />,
      "Garden": <FaTree className="amenity-icon" />,
      "Security": <FaLock className="amenity-icon" />,
      "Play": <FaChild className="amenity-icon" />,
      "Club": <FaBuilding className="amenity-icon" />,
      "Track": <FaRunning className="amenity-icon" />,
      "Library": <FaBook className="amenity-icon" />,
      "Temple": <FaPlaceOfWorship className="amenity-icon" />,
      "Music": <FaMusic className="amenity-icon" />,
      "Parking": <FaCar className="amenity-icon" />,
      "Game": <FaGamepad className="amenity-icon" />
    };
    
    for (const [key, icon] of Object.entries(iconMap)) {
      if (amenity.includes(key)) return icon;
    }
    return <FaCheck className="amenity-icon" />;
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="not-found">
        <h2>Project Not Found</h2>
        <p>We couldn't find the project with ID: {id}</p>
        <Link to="/projects" className="back-btn">
          <FaArrowLeft /> Back to Projects
        </Link>
      </div>
    );
  }

  const getStatusText = (status) => {
    const statusMap = {
      "ready-to-move": "Ready To Move",
      "under-construction": "Under Construction",
      "new-launch": "New Launch"
    };
    return statusMap[status] || status;
  };

  return (
    <div className="project-detail-page">
      {/* Header Section */}
      <div className="project-header" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${project.image})`
      }}>
        <div className="header-overlay">
          <div className="container">
            <Link to="/projects" className="back-link">
              <FaArrowLeft /> Back to Projects
            </Link>
            <h1>{project.name}</h1>
            <div className="project-meta">
              <div className="meta-item">
                <span className="meta-icon"><FaMapMarkerAlt /></span>
                <span>{project.location}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon"><FaHome /></span>
                <span>{project.type}</span>
              </div>
              <div className="meta-item">
                <span className="meta-icon"><FaMoneyBillWave /></span>
                <span>{project.price}</span>
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
            >
              Overview
            </button>
            <button 
              className={`tab-btn ${activeTab === "amenities" ? "active" : ""}`}
              onClick={() => handleTabChange("amenities")}
            >
              Amenities
            </button>
            <button 
              className={`tab-btn ${activeTab === "configurations" ? "active" : ""}`}
              onClick={() => handleTabChange("configurations")}
            >
              Configurations
            </button>
            <button 
              className={`tab-btn ${activeTab === "gallery" ? "active" : ""}`}
              onClick={() => handleTabChange("gallery")}
            >
              Gallery
            </button>
            <button 
              className={`tab-btn ${activeTab === "location" ? "active" : ""}`}
              onClick={() => handleTabChange("location")}
            >
              Location
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="project-content">
        <div className="container">
          {/* Overview Tab */}
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
                        <span className="detail-icon"><FaRuler /></span>
                        <div className="detail-info">
                          <span className="detail-label">Area Range</span>
                          <span className="detail-value">{project.area}</span>
                        </div>
                      </div>
                      <div className="detail-box">
                        <span className="detail-icon"><FaMoneyBillWave /></span>
                        <div className="detail-info">
                          <span className="detail-label">Price Range</span>
                          <span className="detail-value">{project.price}</span>
                        </div>
                      </div>
                      <div className="detail-box">
                        <span className="detail-icon"><FaBuilding /></span>
                        <div className="detail-info">
                          <span className="detail-label">Status</span>
                          <span className="detail-value">
                            {getStatusText(project.status)}
                          </span>
                        </div>
                      </div>
                      <div className="detail-box">
                        <span className="detail-icon"><FaCalendarAlt /></span>
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
                          <span className="feature-icon"><FaCheck /></span>
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
                      <button className="download-link">
                        <FaDownload /> Download Brochure
                      </button>
                      <button className="download-link">
                        <FaDownload /> Download Floor Plan
                      </button>
                    </div>
                    <button className="contact-btn">
                      <FaPhone /> Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Amenities Tab */}
          {activeTab === "amenities" && (
            <div className="amenities-section">
              <h2>Amenities & Facilities</h2>
              <div className="amenities-grid">
                {project.amenities.map((amenity, index) => (
                  <div className="amenity-card" key={index}>
                    {getAmenityIcon(amenity)}
                    <div className="amenity-name">{amenity}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Configurations Tab */}
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
                      <div className="floorplan-placeholder">
                        <span>Floor Plan</span>
                      </div>
                    </div>
                    <div className="config-details">
                      <div className="config-detail">
                        <span className="detail-label">Area</span>
                        <span className="detail-value">{config.size}</span>
                      </div>
                    </div>
                    <div className="config-actions">
                      <button className="view-floor-plan">View Floor Plan</button>
                      <button className="request-quote">Request Quote</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === "gallery" && (
            <div className="gallery-section">
              <h2>Project Gallery</h2>
              <div className="gallery-grid">
                {project.gallery.map((image, index) => (
                  <div className="gallery-item" key={index}>
                    <img src={image} alt={`${project.name} - ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Location Tab */}
          {activeTab === "location" && (
            <div className="location-section">
              <h2>Location Advantages</h2>
              <div className="location-map">
                <div className="map-placeholder">
                  <div className="map-container">
                    <iframe
                      title="Project Location"
                      width="100%"
                      height="400"
                      frameBorder="0"
                      style={{ border: 0 }}
                      src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${project.location}`}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(project.location)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-on-map"
                >
                  View on Google Maps
                </a>
              </div>
              <div className="location-advantages">
                <h3>What's Nearby</h3>
                <div className="advantages-grid">
                  <div className="advantage-column">
                    <h4>Education</h4>
                    <ul>
                      <li>International School (1.5 km)</li>
                      <li>Engineering College (3 km)</li>
                    </ul>
                  </div>
                  <div className="advantage-column">
                    <h4>Healthcare</h4>
                    <ul>
                      <li>Multispecialty Hospital (2 km)</li>
                    </ul>
                  </div>
                  <div className="advantage-column">
                    <h4>Shopping</h4>
                    <ul>
                      <li>Shopping Mall (1.2 km)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Similar Projects */}
      <div className="similar-projects">
        <div className="container">
          <h2>Similar Projects</h2>
          <div className="similar-grid">
            {projects
              .filter(p => p.id !== project.id && p.location.includes(project.location.split(",")[0]))
              .slice(0, 3)
              .map(similarProject => (
                <div className="similar-card" key={similarProject.id}>
                  <div className="similar-image">
                    <img src={similarProject.image} alt={similarProject.name} />
                    <div className={`status-badge ${similarProject.status}`}>
                      {getStatusText(similarProject.status)}
                    </div>
                  </div>
                  <div className="similar-info">
                    <h3>{similarProject.name}</h3>
                    <p>{similarProject.location}</p>
                    <div className="similar-details">
                      <span>{similarProject.type}</span>
                      <span className="similar-price">{similarProject.price}</span>
                    </div>
                    <Link 
                      to={`/project/${similarProject.id}`} 
                      className="view-similar"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="project-footer">
        <div className="container">
          <div className="footer-cta">
            <h2>Want to know more about {project.name}?</h2>
            <p>Our property experts are ready to assist you with all your queries</p>
            <div className="cta-buttons">
              <Link to="/contact" className="enquire-btn">
                <FaEnvelope /> Enquire Now
              </Link>
              <a href="tel:+911234567890" className="call-btn">
                <FaPhone /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;