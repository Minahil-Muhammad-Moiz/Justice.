import React from "react";
import Home from './Sections/Home';
import PracticeAreas from './Sections/PracticeAreas';
import Services from './Sections/Services';
import Reviews from './Sections/Reviews';
import AboutUs from './Sections/AboutUs';
import ContactUs from './Sections/ContactUs';
import Footer from './Sections/Footer';

const App = () => {
  return (
    <div>
      <Home/>
      <PracticeAreas />
      <Services/>
      <Reviews/>
      <AboutUs/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default App;
