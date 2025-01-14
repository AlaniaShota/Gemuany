import React from "react";
import { Lobster, Montserrat } from "next/font/google";
import { motion, Variants } from "framer-motion"; // Import Variants
import { Button } from "../../Button";
import { useInView } from "react-intersection-observer";
import { ReadMore } from "../../navigation/ButtonLinks";
import { readMoreBtn } from "@/app/about/component/constanta";

interface BannerTextProps {
  title: string;
  description: string;
  aboutBtn?: string;
  animation?: Variants;
  isAboutPage?: boolean;
  isContactPage?: boolean;
  isBlogPage?: boolean;
  styleTextTitle?: string;
  styleTextAbout?: string;
  src?: string;
}

const lobster = Lobster({ weight: "400", subsets: ["latin"], preload: false });

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: false,
});

const BannerText: React.FC<BannerTextProps> = ({
  title,
  description,
  aboutBtn,
  animation,
  isAboutPage,
  isBlogPage,
  styleTextTitle,
  styleTextAbout,
  src,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="exit"
      variants={animation}
      custom={description.length}
      ref={ref}
      transition={{ type: "spring", duration: 0.4, delay: 0.1, stiffness: 300 }}
      className={`flex flex-col ${
        isAboutPage
          ? "justify-center items-center lg:mt-40 sm:mt-5 z-40"
          : isBlogPage
          ? "justify-evenly lg:w-1/2 max-sm:w-full lg:h-full sm:h-auto items-center text-center z-40"
          : "justify-center max-lg:items-center max-sm:items-center w-full lg:h-[393px] max-sm:h-[252px]"
      }`}
    >
      <h1 className={`${lobster.className} ${styleTextTitle} `}>{title}</h1>
      <h2
        className={`${montserrat.className}  ${styleTextAbout} ${
          isAboutPage || isBlogPage ? "w-2/3 text-center" : "w-full"
        }`}
      >
        {description}
      </h2>
      {aboutBtn && (
        <Button widthStyle="w-1/2">
          <span>{aboutBtn}</span>
        </Button>
      )}
      {src && <ReadMore src={src} readMoreBtn={readMoreBtn} />}
    </motion.div>
  );
};

export default BannerText;
// import React from "react";
// import { Lobster, Montserrat } from "next/font/google";
// import { motion, Variants } from "framer-motion"; // Import Variants
// import { Button } from "../../Button";
// import { useInView } from "react-intersection-observer";
// import { ReadMore } from "../../navigation/ButtonLinks";
// import { readMoreBtn } from "@/app/about/component/constanta";

// interface BannerTextProps {
//   title: string;
//   description: string;
//   aboutBtn?: string;
//   animation?: Variants;
//   isAboutPage?: boolean;
//   isContactPage?: boolean;
//   isBlogPage?: boolean;
//   styleTextTitle?: string;
//   styleTextAbout?: string;
//   src?: string;
// }

// const lobster = Lobster({ weight: "400", subsets: ["latin"], preload: false });

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   preload: false,
// });

// const BannerText: React.FC<BannerTextProps> = ({
//   title,
//   description,
//   aboutBtn,
//   animation,
//   isAboutPage,
//   isBlogPage,
//   styleTextTitle,
//   styleTextAbout,
//   src,
// }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 1,
//   });

//   return (
//     <motion.div
//       initial="hidden"
//       animate={inView ? "visible" : "hidden"}
//       exit="exit"
//       variants={animation}
//       custom={description.length}
//       ref={ref}
//       transition={{ type: "spring", duration: 0.4, delay: 0.1, stiffness: 300 }}
//       className={`flex flex-col ${
//         isAboutPage
//           ? "justify-center items-center lg:mt-40 sm:mt-5 z-40"
//           : isBlogPage
//           ? "justify-evenly lg:w-1/2 max-sm:w-full lg:h-full sm:h-auto items-center text-center z-40"
//           : "justify-around max-lg:items-center max-sm:items-center w-full lg:h-[393px] max-sm:absolute max-sm:top-0 max-sm:left-0 max-sm:w-full max-sm:h-[241px] max-sm:justify-center max-sm:text-white"
//       }`}
//     >
//       <h1
//         className={`${lobster.className} ${styleTextTitle} max-sm:text-xl z-50`}
//       >
//         {title}
//       </h1>
//       <h2
//         className={`${montserrat.className}  ${styleTextAbout} ${
//           isAboutPage || isBlogPage ? "w-2/3 text-center" : "w-full"
//         } max-sm:w-11/12 max-sm:text-sm z-50`}
//       >
//         {description}
//       </h2>
//       {aboutBtn && (
//         <Button widthStyle="w-1/2 z-50">
//           <span>{aboutBtn}</span>
//         </Button>
//       )}
//       {src && <ReadMore src={src} readMoreBtn={readMoreBtn} />}
//     </motion.div>
//   );
// };

// export default BannerText;
