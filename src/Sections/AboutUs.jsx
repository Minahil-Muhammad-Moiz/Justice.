import classNames from "classnames";
import React from "react";
import { BiBriefcase, BiTargetLock } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import { MdCorporateFare } from "react-icons/md";

const AboutUs = () => {
  return (
    <section id="aboutus" className={classNames(sectionClass)}>
      <div className={classNames(divClass)}>
        <h2 className={classNames(h2Tag)}>
          More <span className="text-amber-600 font-bold">Expertise</span>
        </h2>
      </div>
      <div className={classNames(divClass)}>
        <div className={classNames(subDivs)}>
          <div className={classNames(icons)}>
            <BiBriefcase />
          </div>
          <div className={classNames(pTag, "px-4")}>
            <p className={classNames(iconPTag)}>Labor and
            Employment</p>
            <p>Far far away, far from the mountains, far from the countries</p>
          </div>
        </div>
        <div className={classNames(subDivs)}>
          <div className={classNames(icons)}>
            <BsPeople />
          </div>
          <div className={classNames(pTag, "px-4")}>
            <p className={classNames(iconPTag)}>Intellectual
            Proerty Law</p>
            <p>Far far away, far from the mountains, far from the countries</p>
            <div classNames={classNames('flex hover:text-amber-600 cursor-pointer')}><p>Learn More</p><i><FaArrowRight/></i></div>
          </div>
        </div>
        <div className={classNames(subDivs)}>
          <div className={classNames(icons)}>
            <MdCorporateFare />
          </div>
          <div className={classNames(pTag, "px-4")}>
            <p className={classNames(iconPTag)}>Corporate & Civil
            Litigation</p>
            <p>Far far away, far from the mountains, far from the countries</p>
          </div>
        </div>
        <div className={classNames(subDivs)}>
          <div className={classNames(icons)}>
            <BiTargetLock />
          </div>
          <div className={classNames(pTag, "px-4")}>
            <p className={classNames(iconPTag)}>Criminal Prosecution
            and Defense</p>
            <p>Far far away, far from the mountains, far from the countries</p>
          </div>
        </div>
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
  "flex flex-col justify-center items-start p-4 my-2 md:m-2 w-full md:w-[45%] lg:w-[22%] bg-white rounded-3xl";
const pTag = "tracking-wide";
const icons = "p-4 mx-2 rounded-full bg-amber-600 text-white text-2xl";
const iconPTag = 'text-amber-600 font-medium';
