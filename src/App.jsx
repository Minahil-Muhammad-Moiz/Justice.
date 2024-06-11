import React from "react";
import Home from "./Sections/Home";
import PracticeAreas from "./Sections/PracticeAreas";
import Services from "./Sections/Services";
import Reviews from "./Sections/Reviews";
import AboutUs from "./Sections/AboutUs";
import ContactUs from "./Sections/ContactUs";
import Footer from "./Sections/Footer";
import { Topbtn } from "./Components/Topbtn";

const App = () => {
  return (
    <div className="relative w-full h-full">
      <Home />
      <PracticeAreas />
      <Services />
      <Reviews />
      <AboutUs />
      <ContactUs />
      <Footer />
      <Topbtn />
    </div>
  );
};

export default App;
