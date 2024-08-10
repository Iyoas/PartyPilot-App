'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles/ImageSlider.module.css'; // Zorg ervoor dat dit pad correct is

const slides = [
  '/images/7fest2022.jpg',
  '/images/csc.jpg'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // 2000 ms = 2 seconden

    return () => clearInterval(interval); // Verwijder interval bij component unmount
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slides} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={styles.slide}
          >
            <Image
              src={slide}
              alt={`Slide ${index + 1}`}
              layout="intrinsic"
              className={styles.flyerImage}
              width={1200} // Geef hier een breedte op die je wilt
              height={800} // Geef hier een hoogte op die je wilt
            />
          </div>
        ))}
      </div>
      <div className={styles.indicators}>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
