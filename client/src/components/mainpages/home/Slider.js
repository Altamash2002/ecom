import React, { useState } from 'react';
import "./slider.css"
import chevronRight from "../../headers/icon/chevron-right.svg"
import chevronLeft from "../../headers/icon/chevron-left.svg"

const images = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg',
    alt: 'image 1',
    caption: 'Caption Text 1'
  },
  {
    src: 'https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg',
    alt: 'image 2',
    caption: 'Caption Text 2'
  },
  {
    src: 'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg',
    alt: 'image 3',
    caption: 'Caption Text 3'
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg',
    alt: 'image 4',
    caption: 'Caption Text 4'
  }
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
