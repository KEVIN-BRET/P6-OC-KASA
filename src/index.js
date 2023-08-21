import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Logements from './pages/Logements';
import About from './pages/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      {/* <GlobalStyle /> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement/:logementNumber" element={<Logements />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
