import React, { useState } from "react";
import "./imagecarosel.css";
const Imagecarosel = ({ images }) => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(1);
  const [currentIndex3, setCurrentIndex3] = useState(2);

  const goToNextSlide = () => {
    if (currentIndex3 === 4) {
      setCurrentIndex3(0);
      setCurrentIndex1(currentIndex1 + 1);
      setCurrentIndex2(currentIndex2 + 1);
    } else if (currentIndex2 === 4) {
      setCurrentIndex2(0);
      setCurrentIndex1(currentIndex1 + 1);
      setCurrentIndex3(currentIndex3 + 1);
    } else if (currentIndex1 === 4) {
      setCurrentIndex1(0);
      setCurrentIndex3(currentIndex3 + 1);
      setCurrentIndex2(currentIndex2 + 1);
    } else {
      setCurrentIndex1(currentIndex1 + 1);
      setCurrentIndex2(currentIndex2 + 1);
      setCurrentIndex3(currentIndex3 + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentIndex3 === 0) {
      setCurrentIndex3(4);
      setCurrentIndex1(currentIndex1 - 1);
      setCurrentIndex2(currentIndex2 - 1);
    } else if (currentIndex2 === 0) {
      setCurrentIndex2(4);
      setCurrentIndex1(currentIndex1 - 1);
      setCurrentIndex3(currentIndex3 - 1);
    } else if (currentIndex1 === 0) {
      setCurrentIndex1(4);
      setCurrentIndex3(currentIndex3 - 1);
      setCurrentIndex2(currentIndex2 - 1);
    } else {
      setCurrentIndex1(currentIndex1 - 1);
      setCurrentIndex2(currentIndex2 - 1);
      setCurrentIndex3(currentIndex3 - 1);
    }
  };

  return (
    <div>
      <button onClick={goToPrevSlide}>Previous</button>
      <img className="image" src={images[currentIndex1]} alt={"slide"} />
      <img className="image" src={images[currentIndex2]} alt={"slide"} />
      <img className="image" src={images[currentIndex3]} alt={"slide"} />
      <button onClick={goToNextSlide}>Previous</button>
    </div>
  );
};

export default Imagecarosel;
