import React, { useState, useEffect } from "react";
import "./imagecarosel.css";

const Imagecarosel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Set an interval to change the image every 3 seconds (3000 ms)
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 15000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images.length]); // Depend on images.length to ensure the interval resets if the image array changes

  return (
    <div className="imageCaroselContainer">
      <img className="image2" src={images[currentIndex]} alt={"slide"} />
    </div>
  );
};

export default Imagecarosel;
