import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './assets/styles/index.css';

// Components
import WhatsAppFAB from './components/WhatsAppFAB';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Properties from './pages/Properties';
import PropertyDetail from './pages/PropertyDetail';
import AdminDashboard from './pages/AdminDashboard';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {/* WhatsApp Floating Action Button */}
      <WhatsAppFAB 
        phoneNumber="+923199911931"
        message="Hi! I'm interested in your real estate services."
        position="bottom-right"
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
