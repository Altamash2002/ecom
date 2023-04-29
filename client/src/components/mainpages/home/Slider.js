import React, { useState } from 'react';
import "./slider.css"
import chevronRight from "../../headers/icon/chevron-right.svg"
import chevronLeft from "../../headers/icon/chevron-left.svg"

const images = [
  {
    src: 'https://res.cloudinary.com/dmq0rgph0/image/upload/v1682684519/shoes_tx3ykr.jpg',
    alt: 'Shoes-image',
    caption: 'Premium Footwear'
  },
  {
    src: 'https://res.cloudinary.com/dmq0rgph0/image/upload/v1682684191/jeans_ucmxbc.jpg',
    alt: 'jeans-image',
    caption: 'Timeless Style'
  },
  {
    src: 'https://res.cloudinary.com/dmq0rgph0/image/upload/v1682684546/t-shirt_i1tmam.jpg',
    alt: 't-shirt-image',
    caption: 'Classic T-shirts'
  },
  {
    src: 'https://res.cloudinary.com/dmq0rgph0/image/upload/v1682685318/jackets_xx7xlz.jpg',
    alt: 'Jacket-image',
    caption: 'Confidently Cool'
  },
  {
    src: 'https://res.cloudinary.com/dmq0rgph0/image/upload/v1682686323/ladies_fxuw6t.jpg',
    alt: 'ladies-clothes-image',
    caption: "Women's Clothing"
  },


];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleArrowClick = (index) => {
    setActiveIndex((prevIndex) => {
      let newIndex = prevIndex + index;
      if (newIndex < 0) {
        newIndex = images.length - 1;
      } else if (newIndex >= images.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  return (
    <div id="container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slides ${index === activeIndex ? 'active' : ''}`}
        >
          <img src={image.src} alt={image.alt} />
          <div className="caption">{image.caption}</div>
        </div>
      ))}
      <span
        className="arrow"
        id="left"
        onClick={() => handleArrowClick(-1)}
      >
        <img src={chevronLeft} alt='pre'/>
      </span>
      <span
        className="arrow"
        id="right"
        onClick={() => handleArrowClick(1)}
      >
        <img src={chevronRight} alt='next'/>
      </span>
    </div>
  );
};

export default Slider;
