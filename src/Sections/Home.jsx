import React from "react";
import Nav from "../Components/Nav";
import classNames from "classnames";

const Home = () => {
  return (
    <section id='home'
      className={classNames(
        " bg-[url('./Images/lawhammer.jpg')] h-[100vh] w-[100vw] bg-cover bg-no-repeat "
      )}
    >
      <div
        className={classNames(
          "backdrop-blur-xl w-full h-full md:backdrop-blur-0"
        )}
      >
        <Nav />
        <div
          className={classNames(
            "flex flex-col justify-center items-start md:fixed md:right-0 flex-wrap px-8 md:w-[50%] h-[70%] font-serif "
          )}
        >
          <h1 className={classNames("text-7xl font-extrabold py-2 text-zinc-800 ")}>
            <span className="text-amber-600">We Fight</span> For Your Right
          </h1>
          <p className={classNames("text-xl tracking-widest font-[600] font-sans px-2 py-4 text-zinc-900")}>
            We Help You Protect What's Yours.
          </p>
          <button
            className={classNames(
              "font-sans mx-4 bg-amber-600 rounded-full px-6 py-4 font-medium text-white text-sm"
            )}
          >
            FREE CONSULTATION
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
