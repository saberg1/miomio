/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import styles from './carousel.module.css'

const image1 = '/images/carousel-images/1.jpg'
const image2 = 'images/carousel-images/2.jpg'
const image3 = 'images/carousel-images/3.jpg'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()
  const images = [image1,image2,image3]

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        {images.map((src, index) => (
          <div className={styles.embla__slide} key={index}>
            <img src={src} alt={`Slide ${index + 1}`} className={styles.carousel_image} />
          </div>
        ))} 
      </div>
    </div>
  )
}

export default EmblaCarousel;