// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import AboutUs from './pages/AboutUs';
import Faq from './pages/Faq';
import Privacy from './pages/Privacy';
import ContactUs from './pages/ContactUs'; // Import the ContactUs component
import './App.css';

// Empty placeholder component for routes
const EmptyComponent = () => <div className="empty-page">Page Under Construction</div>;

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/projects" element={<Projects />} /> 
            <Route path="/offerings" element={<EmptyComponent />} />
            <Route path="/career" element={<EmptyComponent />} />
            <Route path="/contact" element={<ContactUs />} /> {/* Use the ContactUs component */}
            <Route path="/brochure" element={<EmptyComponent />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            {/* Additional routes for ContactUs functionality */}
            <Route path="/schedule-visit/:id" element={<EmptyComponent />} />
            <Route path="/enquire/:projectId/:configId" element={<EmptyComponent />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/privacy" element={<Privacy />} />
            
            {/* Add more routes as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;