import classNames from "classnames";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLinks } from "./Contants";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className={classNames("w-full bg-white flex justify-between flex-1 p-4 ")} id='home'>
        <h1 className="font-extrabold text-3xl md:w-[20%] text-zinc-900">
          LawConnect<span className="text-amber-600">.</span>
        </h1>
        <div className="hidden xl:flex items-center justify-end w-[80%] ">
          {NavLinks.map((item) => (
            <a href={item.href} className={classNames("px-8 hover:text-amber-600")}>
              {item.title}
            </a>
          ))}
        </div>
        <div className="xl:hidden font-extrabold text-3xl">
          <button onClick={toggleNav}>{isOpen ? <FiX /> : <FiMenu />}</button>
        </div>
      </nav>
      {isOpen && (
            <div
              className={classNames(
                "fixed w-full bg-amber-600 font-sans p-5 flex flex-col items-center text-lg xl:hidden focus:translate-x-14 transition-all"
              )}
            >
              {NavLinks.map((item) => (
                <a
                  href={item.href}
                  className={classNames("p-2 hover:font-semibold ")}
                >
                  {item.title}
                </a>
              ))}
            </div>
          )}
      </>
      );
};

export default Nav;
