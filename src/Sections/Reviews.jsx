import classNames from "classnames";
import React from "react";
import { reviews } from "../Components/Contants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Reviews = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <section id="reviews" className={classNames(sectionClass)}>
      <div className={classNames(divClass)}>
        <h2 className={classNames(h2Tag)}>
          <span className="text-amber-600 font-bold">Happy</span> Clients
        </h2>
      </div>
      <div className={classNames(divClass, "slider-container")}>
        <Slider {...settings}>
          {reviews.map((item) => (
            <div className={classNames(subDivs)}>
              <div className={classNames(reviewDiv)}>{item.review}</div>
              <div className={classNames(profileDiv)}>
                <img
                  src={item.profileImg}
                  alt="/"
                  className={classNames("rounded-full w-12 h-12 mr-4")}
                />
                <div>
                  <p className={classNames("text-neutral-200 font-semibold ")}>
                    {item.name}
                  </p>
                  <p>{item.prof}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;

const sectionClass =
  "bg-neutral-900 text-neutral-500 flex flex-col justify-center items-center w-full font-sans p-8 ";
const h2Tag = "text-white text-4xl md:text-6xl ";
const divClass = " m-4 w-[90%] md:w-[80%] p-4";
const subDivs = "flex flex-col justify-center items-start ";
const reviewDiv =
  "bg-white p-6 pb-14 md:pb-16 w-full clip-chat rounded rounded-t-lg";
const profileDiv = "flex flex-row justify-start items-center p-4 -mt-6";
