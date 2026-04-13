import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./layouts/header";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./layouts/footer";

// normal pages
import Home from "./components/home/Index";
import ContactUs from "./components/contact/ContactUs";






import Service1 from "./components/services/Service1";
import AboutMain from "./components/about/AboutMain";
import Gallery from "./components/gallery/Gallery";


function App() {
  const location = useLocation();

  // check admin route
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Header />}
      <ScrollToTop />

      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/our-gallery" element={<Gallery/>} />
        <Route path="/about" element={<AboutMain/>} />
        <Route path="/services" element={<Service1/>} />
        <Route path="/contact" element={<ContactUs />} />

       

        

       

       
        
      </Routes>



      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
