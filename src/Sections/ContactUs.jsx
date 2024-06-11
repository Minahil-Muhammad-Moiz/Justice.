import classNames from "classnames";
import React from "react";

const ContactUs = () => {
  return (
    <section id="contactus" className={classNames(sectionClass)}>
      <div className={classNames(divClass)}>
        <div className={classNames(subDivs)}>
          <h2 className={classNames(h2Tag)}>
            Let's get started. Call us Now for a Free Consultation
          </h2>
          <button className={classNames(btnClass)}>CALL US NOW</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

const sectionClass =
  "bg-neutral-600 flex justify-center items-center w-full p-8  ";
const divClass =
  " bg-[url('./Images/blackBGhammer.jpg')] w-[500px] md:w-[80%] h-[400px] bg-cover bg-no-repeat rounded-3xl ";
const subDivs =
  "backdrop-blur-sm w-full h-full rounded-3xl flex flex-col justify-center items-center p-4";
const h2Tag = "text-4xl font-semibold text-center font-serif text-white mb-10";
const btnClass =
  "text-white rounded-full  px-6 py-4 text-xs font-medium bg-amber-600 hover:bg-amber-700";
