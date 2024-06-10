import classNames from "classnames";
import React from "react";

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
        <div className={classNames(subDivs)}>
          <p className={classNames(pHeadTag)}>
            <span className={classNames(spanTag)}>90</span>+
          </p>
          <p className={classNames(pSubHead)}>Awards</p>
          <p className={classNames(pTag)}>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics.
          </p>
        </div>
        <div className={classNames(subDivs)}>
          <p className={classNames(pHeadTag)}>
            <span className={classNames(spanTag)}>3K</span>+
          </p>
          <p className={classNames(pSubHead)}>Cases Wins</p>
          <p className={classNames(pTag)}>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics.
          </p>
        </div>
        <div className={classNames(subDivs)}>
          <p className={classNames(pHeadTag)}>
            <span className={classNames(spanTag)}>2K</span>+
          </p>
          <p className={classNames(pSubHead)}>Clients</p>
          <p className={classNames(pTag)}>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics.
          </p>
        </div>
        <div className={classNames(subDivs)}>
          <p className={classNames(pHeadTag)}>
            <span className={classNames(spanTag)}>200</span>+
          </p>
          <p className={classNames(pSubHead)}>Attorneys</p>
          <p className={classNames(pTag)}>
            Separated they live in Bookmarksgrove right at the coast of the
            Semantics.
          </p>
        </div>
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

