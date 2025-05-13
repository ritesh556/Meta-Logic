import { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Career from './Pages/Career';
import Services from './Pages/Services';
import Footer from './components/layout/footer';
import ContactForm from './Pages/contact';
import Navbar from './components/layout/Navbar';
import LoadingBar, { type LoadingBarRef } from 'react-top-loading-bar';
import React from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const loadingBarRef = useRef<LoadingBarRef>(null);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Career', path: '/career' },
    { name: 'About Us', path: '/about' },
  ];

  const AppContent = () => {
    const location = useLocation();

    // Start and finish the loading bar when the route changes
    React.useEffect(() => {
      loadingBarRef.current?.continuousStart(); // Start loading
      const timer = setTimeout(() => {
        loadingBarRef.current?.complete(); // Finish loading
      }, 500); // Simulate delay for smooth animation

      return () => clearTimeout(timer);
    }, [location]);

    return (
      <>
        <LoadingBar color="red" height={3} ref={loadingBarRef} />
        <Navbar navLinks={navLinks} isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/career" element={<Career />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
        {location.pathname !== '/services' && <Footer />}
      </>
    );
  };

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;