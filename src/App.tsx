import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Career from './Pages/Career';
import Services from './Pages/Services';
import Footer from './components/layout/footer';
import ContactForm from './Pages/contact';
import Navbar from './components/layout/Navbar';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Career', path: '/career' },
    { name: 'About Us', path: '/about' },
  ];

  const AppContent = () => {
    const location = useLocation(); //  Get current route

    return (
      <>
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

        {/* 👇 Conditionally render Footer */}
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
