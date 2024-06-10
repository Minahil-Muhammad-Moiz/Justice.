import classNames from "classnames";
import React from "react";
import { services } from "../Components/Contants";

const Services = () => {
  return (
    <section id="services" className={classNames(sectionClass)}>
      <div className={classNames(divClass,'w-[500px]')}>
        <h2 className={classNames(h2Tag)}>
          <span className="text-amber-600 font-bold">50 Years</span> of
          Experience in Various Cases
        </h2>
      </div>
      <div className={classNames(divClass,'w-[700px]')}>
        {services.map((item)=>(<div className={classNames(subDivs)}>
          <p className={classNames(pHeadTag)}>
            <span className={classNames(spanTag)}>{item.number}</span>+
          </p>
          <p className={classNames(pSubHead)}>{item.title}</p>
          <p className={classNames(pTag)}>
            {item.desp}
          </p>
        </div>))}
      </div>
    </section>
  );
};

export default Services;

const sectionClass =
  "bg-neutral-800 text-neutral-400 flex flex-row justify-center items-center flex-wrap w-full font-sans p-8  ";
const divClass =
  " m-4 md:my-6 flex flex-col md:flex-row md:flex-wrap justify-center items-center";
const subDivs = "flex flex-col justify-center items-start p-2 w-full md:w-[46%]";
const h2Tag = "text-white tracking-tighter text-4xl md:text-6xl";
const pHeadTag = 'md:text-8xl text-7xl text-white pb-4';
const spanTag = 'text-amber-600';
const pSubHead = "text-white font-bold text-lg ";
const pTag = "tracking-wide";

