import React, { useEffect, useState } from "react";
import './slide.css';
import exImg from './imgTag.png';
import im1 from './pic1.png';
import im2 from './pic2.png';
const colors = ["#0088FE", "#00C49F"];
const delay = 30000;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {/* {colors.map((backgroundColor, index) => (
          <div
             className="slide"
             key={index}
            //  style={{ backgroundColor }}

          >
          <img src={exImg}  className="image slide"></img>
          </div>
        ))} */}
        <img src={im1}  className="image slide"></img>
        <img src={im2}  className="image slide"></img>
        {/* <img src={exImg}  className="image slide"></img>
        <img src={exImg}  className="image slide"></img> */}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Slideshow;
