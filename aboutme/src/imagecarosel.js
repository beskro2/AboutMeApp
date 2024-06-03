import React, { useState } from "react";
import "./imagecarosel.css";
const Imagecarosel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <button onClick={goToPrevSlide}>Previous</button>
      <img className="image" src={images[currentIndex - 1]} alt={"slide"} />
      <img className="image" src={images[currentIndex]} alt={"slide"} />
      <img className="image" src={images[currentIndex + 1]} alt={"slide"} />
      <button onClick={goToNextSlide}>Previous</button>
    </div>
  );
};

export default Imagecarosel;
