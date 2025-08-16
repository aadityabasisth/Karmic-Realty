// // src/components/Navbar.jsx
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "../styles/navbar.css";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="navbar-container">
//         {/* Left side - Logo only */}
//         <div className="navbar-logo">
//           <Link to="/">
//             <img
//               src="/src/assets/Karmic.jpg"
//               alt="Skyroot Logo"
//               className="logo-image"
//             />
//           </Link>
//         </div>

//         {/* Right side - All navigation elements */}
//         <div className="navbar-right">
//           <div className="navbar-links">
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/projects">Projects</Link>
//               </li>
//               {/* <li>
//                 <Link to="/offerings">Our Offerings</Link>
//               </li>
//               <li>
//                 <Link to="/career">Career</Link>
//               </li> */}
//               <li>
//                 <Link to="/contact">Contact Us</Link>
//               </li>
//             </ul>
//           </div>

//           <div className="navbar-cta">
//             <Link to="/contact" className="cta-button">
//               Get In Touch <span>→</span>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; 
import "../styles/navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Left side - Logo */}
        <div className="navbar-logo">
          <NavLink to="/">
            <img
              src="/src/assets/Karmic.jpg"
              alt="Skyroot Logo"
              className="logo-image"
            />
          </NavLink>
        </div>

        {/* Right side - Navigation */}
        <div className="navbar-right">
          <div className="navbar-links">
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active-link" : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "active-link" : ""
                  }
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? "active-link" : ""
                  }
                >
                  Projects
                </NavLink>
              </li>
              {/* <li>
                <NavLink
                  to="/offerings"
                  className={({ isActive }) =>
                    isActive ? "active-link" : ""
                  }
                >
                  Our Offerings
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    isActive ? "active-link" : ""
                  }
                >
                  Career
                </NavLink>
              </li> */}
              {/* <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "active-link" : ""
                  }
                >
                  Contact Us
                </NavLink>
              </li> */}
            </ul>
          </div>

          <div className="navbar-cta">
            <NavLink to="/contact" className="cta-button">
              Get In Touch <span>→</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
