import { useEffect, useState } from "react";

export const useDisableAnimation = (breakpoint: number = 768) => {
  const [disableAnimation, setDisableAnimation] = useState(false);

  useEffect(() => {
    const checkSettings = () => {
      const isMobile = window.innerWidth <= breakpoint;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      setDisableAnimation(isMobile || prefersReducedMotion);
    };

    checkSettings();
    window.addEventListener("resize", checkSettings);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    mediaQuery.addEventListener("change", checkSettings);

    return () => {
      window.removeEventListener("resize", checkSettings);
      mediaQuery.removeEventListener("change", checkSettings);
    };
  }, [breakpoint]);

  return disableAnimation;
};
