import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export const Topbtn = () => {
  const [isVisible, setisVisible] = useState(false);
  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleButton = () => {
    const scrolledPixels =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (scrolledPixels > 50) {
      setisVisible(true);
    } else {
      setisVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleButton);
    return () => window.removeEventListener("scroll", toggleButton); //The return function inside useEffect is a cleanup function that runs when the component unmounts or before the effect runs again if the dependencies have changed. This is crucial for preventing memory leaks and cleaning up subscriptions or event listeners.
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-0 right-0 m-4 p-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full top-0:hidden">
          <FaArrowUp onClick={moveToTop} />
        </div>
      )}
    </>
  );
};
