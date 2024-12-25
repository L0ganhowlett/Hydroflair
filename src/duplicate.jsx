// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Carousel from "./components/Carousel";
import ProductDetails from "./components/ProductDetails"; // Import ProductDetails component
import HexagonGrid from "./components/HexagonGrid";
import Brand from "./components/Brand_Partners";
import Clients from "./components/Clients";
import ServicesPage from "./components/ServicesPage"; // Import ServicesPage component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Brand />
            <FeatureSection />
            <Workflow />
            <Clients />
            <Carousel />
            <HexagonGrid />
            <Footer />
          </>
        } />
        <Route path="/services" element={<ServicesPage />} /> {/* Add route for ServicesPage */}
        <Route path="/ProductDetails:productId" element={<ProductDetails />} /> {/* Add route for ProductDetails */}
      </Routes>
    </Router>
  );
};

export default App;
