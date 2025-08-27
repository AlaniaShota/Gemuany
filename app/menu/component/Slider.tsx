"use client";

import firstImg from "@/public/image 12 (2).png";
import secondImg from "@/public/image 14 (1).png";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const sliderData = [
  { id: 188, src: firstImg, alt: "Slider" },
  { id: 288, src: secondImg, alt: "Slider" },
  { id: 388, src: firstImg, alt: "Slider" },
  { id: 488, src: secondImg, alt: "Slider" },
  { id: 588, src: firstImg, alt: "Slider" },
  { id: 688, src: secondImg, alt: "Slider" },
];

const Slider = () => {
  const [emblaRef, embla] = useEmblaCarousel({
    loop: true,
    align: "start",
    duration: 15, // плавная прокрутка (чем выше, тем плавнее)
  });
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const autoplay = useCallback(() => {
    if (timeoutId) clearTimeout(timeoutId);
    const currentIndex = embla?.selectedScrollSnap() ?? 0;

    const delay =
      sliderData[currentIndex].id === 1 || sliderData[currentIndex].id === 6
        ? 6500
        : 5200;

    const id = setTimeout(() => {
      embla?.scrollNext();
    }, delay);

    setTimeoutId(id);
  }, [embla, timeoutId]);

  useEffect(() => {
    if (embla) {
      autoplay();
      embla.on("select", autoplay);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [embla, autoplay, timeoutId]);

  return (
    <div className="overflow-hidden w-full h-[493px] max-sm:h-screen my-10" ref={emblaRef}>
      <div className="flex w-full h-full">
        {sliderData.map((item) => (
         <div
         key={item.id}
         className="embla__slide w-full h-full flex-shrink-0 relative overflow-hidden"
       >
         <Image
           src={item.src}
           alt={item.alt}
           className="w-full h-full object-cover"
           priority
         />
         <div className="absolute inset-0 bg-black bg-opacity-45"></div>
       </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
