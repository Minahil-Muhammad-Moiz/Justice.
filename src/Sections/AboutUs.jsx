import classNames from "classnames";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { practiceAreas } from "../Components/Contants";

const AboutUs = () => {
  return (
    <section id="aboutus" className={classNames(sectionClass)}>
      <div className={classNames(divClass)}>
        <h2 className={classNames(h2Tag)}>
          More <span className="text-amber-600 font-bold">Expertise</span>
        </h2>
      </div>
      <div className={classNames(divClass)}>
        {practiceAreas.map((item) => (
          <div className={classNames(subDivs)}>
            <div className={classNames(icons)}>{item.icon}</div>
            <div className={classNames(pTag)}>
              <p className={classNames(iconPTag)}>{item.title}</p>
              <p>{item.desp}</p>
              <div className={classNames(btnClass)}>
                <p
                  className={classNames(
                    transitionDelay,
                    "group-hover:text-amber-600"
                  )}
                >
                  Learn More
                </p>
                <i
                  className={classNames(
                    transitionDelay,
                    "group-hover:bg-amber-600 group-hover:text-white p-2"
                  )}
                >
                  <FaArrowRight />
                </i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;

const sectionClass =
  "bg-neutral-800 text-neutral-500 flex flex-col justify-center items-center w-full font-sans p-8 ";
const h2Tag = "text-white text-4xl md:text-6xl ";
const divClass =
  " m-4 flex flex-col md:flex-row justify-between items-stretch md:flex-wrap w-[90%] md:w-[80%] p-4 ";
const subDivs =
  "flex flex-col justify-center items-start px-2 py-4 my-2 md:m-2 w-full md:w-[45%] lg:w-[22%] bg-white rounded-xl";
const pTag = "tracking-wide px-2 py-6";
const icons = "p-4 mx-2 rounded-full bg-amber-600 text-white text-2xl";
const iconPTag = "text-amber-600 font-medium";
const transitionDelay = "transition-all delay-150";
const btnClass =
  "flex justify-between items-center w-28 text-black text-sm my-2 cursor-pointer group";
