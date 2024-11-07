"use client";

import firstImg from "@/public/image 12 (2).png";
import secondImg from "@/public/image 14 (1).png";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const sliderData = [
  { id: 1, src: firstImg, alt: "Slider" },
  { id: 2, src: secondImg, alt: "Slider" },
  { id: 3, src: firstImg, alt: "Slider" },
  { id: 4, src: secondImg, alt: "Slider" },
  { id: 5, src: firstImg, alt: "Slider" },
  { id: 6, src: secondImg, alt: "Slider" },
];

const Slider = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const autoplay = useCallback(() => {
    if (timeoutId) clearTimeout(timeoutId);
    const currentIndex = embla?.selectedScrollSnap() ?? 0;

    const delay =
      sliderData[currentIndex].id === 1 || sliderData[currentIndex].id === 6
        ? 2500
        : 500;

    const id = setTimeout(() => {
      embla?.scrollNext();
    }, delay);

    setTimeoutId(id);
  }, [embla]);

  useEffect(() => {
    if (embla) {
      autoplay();
      embla.on("select", autoplay);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [embla]);

  return (
    <div className="overflow-hidden w-full h-[450px] my-10" ref={emblaRef}>
      <div className="flex w-full h-full">
        {sliderData.map((item) => (
          <div
            key={item.id}
            className="embla__slide w-full h-full flex-shrink-0 transition-transform duration-300 ease-in-out "
          >
            <div className="absolute inset-0 bg-black bg-opacity-20 z-10" />
            <Image
              src={item.src}
              alt={item.alt}
              layout="intrinsic"
              className="w-full h-full object-cover relative z-20"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
