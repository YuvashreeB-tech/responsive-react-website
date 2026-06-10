import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";

import Offer from "./components/Offer/Offer";
import Testimonial from "./components/Testimonial/Testimonial";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Offer />
      <Testimonial />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;