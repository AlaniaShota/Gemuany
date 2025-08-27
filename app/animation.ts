import { Variants } from "framer-motion";

export const visibleExit: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const exitVisit: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

export const animationUpDown: Variants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 },
};

export const itemVariants: Variants[] = [
  { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  { initial: { y: -50, opacity: 0 }, animate: { y: 0, opacity: 1 } },
  { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
];

export const transactionAnimate = {
  type: "spring",
  duration: 0.4,
  stiffness: 300,
};

export const hover = {
  rotateY: 10,
  translateZ: 150,
  translateX: -1,
  transition: { type: "spring", stiffness: 300, duration: 0.3 },
};

export const motionProps = {
  visibleExit: {
    variants: visibleExit,
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    transition: transactionAnimate,
  },
  exitVisit: {
    variants: exitVisit,
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    transition: { ...transactionAnimate, delay: 2 },
  },
  upDown: {
    variants: animationUpDown,
    initial: "hidden",
    animate: "visible",
    exit: "exit",
    transition: transactionAnimate,
  },
};
