import classNames from "classnames";
import React from "react";
import {
  NavLinks,
  connect,
  practice_exp,
  services_exp,
} from "../Components/Contants";

const Footer = () => {
  return (
    <>
      <section id="footer" className={classNames(sectionClass)}>
        <div className={classNames(divClass)}>
          <p className={classNames(pTag)}>Main</p>
          {NavLinks.map((item) => (
            <a
              href={item.href}
              className={classNames(linkTag, transitionDelay)}
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className={classNames(divClass)}>
          <p className={classNames(pTag)}>Practice Areas</p>
          {practice_exp.map((item) => (
            <p className={classNames(linkTag, transitionDelay)}>{item.exp}</p>
          ))}
        </div>
        <div className={classNames(divClass)}>
          <p className={classNames(pTag)}>Services</p>
          {services_exp.map((item) => (
            <p className={classNames(linkTag, transitionDelay)}>{item.exp}</p>
          ))}
        </div>
        <div className={classNames(divClass)}>
          <div>
            <p className={classNames(pTag)}>Contact</p>
            <p className="text-neutral-400">
              43 Raymouth Rd. Baltemoer, London 3910
            </p>
            <p className={classNames(linkTag, transitionDelay, "underline")}>
              +1(123)-456-7890
            </p>
            <p className={classNames(linkTag, transitionDelay, "underline")}>
              +1(123)-456-7890
            </p>
            <p className={classNames(linkTag)}>info@mydomain.com</p>
          </div>
          <p className={classNames(pTag)}>Connect</p>
          <div className="flex justify-center items-center">
            {connect.map((item) => (
              <i className={classNames(icons)}>{item.icon}</i>
            ))}
          </div>
        </div>
      </section>
      <div className="bg-neutral-800 text-neutral-400 text-center p-6">
        Copyright &copy; 2024 All rights reserved
      </div>
    </>
  );
};

export default Footer;

const sectionClass =
  "bg-neutral-800 text-neutral-500 flex flex-col md:flex-row justify-center items-start w-full font-sans p-8 lg:px-40 ";
const divClass =
  "flex flex-col justify-center items-start px-2 py-4 my-2 md:m-2 w-full md:w-[45%] lg:w-[22%] ";
const pTag = "text-neutral-300 font-sans font-medium py-2";
const linkTag = "text-amber-600 py-[4px] cursor-pointer hover:translate-x-2 ";
const icons =
  "bg-amber-600 text-white text-sm p-2 rounded-lg m-[2px] cursor-pointer hover:bg-amber-700";
const transitionDelay = "transition-all delay-150";
