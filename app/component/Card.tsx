import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import React, { useState } from "react";
import { Burger } from "../store/useStore";
import Image from "next/image";
import { hover, itemVariants, transactionAnimate } from "../animation";
import { SetsType } from "../store/useSetsStore";
import { ReviewType } from "../store/useStoreReview";
import arrowShowMore from "@/public/mingcute_right-fill.svg";
import { useInView } from "react-intersection-observer";

const montserrat = Montserrat({
  subsets: ["latin"],
  preload: false,
});

interface ItemProps {
  burgerData: Burger[] | SetsType[] | ReviewType[];
  menuPage?: boolean;
}

interface BurgerCardProps {
  data: Burger;
}

interface ReviewOrSetsCardProps {
  data: SetsType | ReviewType;
}

const BurgerCard: React.FC<BurgerCardProps> = ({ data }) => {
const { ref } = useInView({
    triggerOnce: true, // Анимация только один раз
    threshold: 0.5, // 20% элемента должно быть видно
  });
  return (
    <motion.div
      key={data.id}
      ref={ref}
      className="w-full p-6 max-sm:p-4 bg-item rounded-lg relative flex justify-center flex-col items-center my-0 max-sm:my-10"
      variants={itemVariants[data.id - 1]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transactionAnimate}
      whileHover={hover}
      
      // style={{ transformStyle: "preserve-3d" }}
    >
      <div className="absolute lg:-top-32 max-sm:-top-24 left-1/2 transform -translate-x-1/2">
        <Image
          src={data.img}
          alt="Testing"
          width={346}
          height={347}
          className="rounded-full"
        />
      </div>
      <div
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transactionAnimate}
        whileHover={hover}
        // style={{ transformStyle: "preserve-3d" }}
        className="flex flex-col justify-between items-start w-full"
      >
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transactionAnimate}
          whileHover={hover}
          // style={{ transformStyle: "preserve-3d" }}
          className="flex flex-col justify-start flex-wrap items-start mt-14"
        >
          <h2 className="text-2xl font-semibold">{data.name}</h2>
          <p className="text-lg opacity-55 text-[#FAF3E0] font-light my-2">
            {data.about}
          </p>
        </motion.div>
        <div className="flex justify-between items-center w-full">
          <span className="text-lg font-semibold">{data.price}</span>
          <div className="flex flex-row justify-between items-center w-1/3">
            <span className="rounded-3xl bg-blackGray text-xs font-light py-1 px-2">
              {data.time}
            </span>
            <Image
              src={data.add_svg}
              alt={data.name}
              width={29}
              height={29}
              className="bg-green-500 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

function isReviewType(item: SetsType | ReviewType): item is ReviewType {
  return (item as ReviewType).name !== undefined;
}

const ReviewOrSetsCard: React.FC<ReviewOrSetsCardProps> = ({ data }) => {
  return (
    <div
      key={data.id}
      className="w-auto h-auto lg:p-8 max-sm:p-4 bg-item rounded-xl relative flex justify-between flex-row items-center"
    >
      <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
        <Image
          src={data.img}
          alt="Testing"
          width={113}
          height={113}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-between items-start w-full">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transactionAnimate}
          whileHover={hover}
          style={{ transformStyle: "preserve-3d" }}
          className="flex flex-col justify-start flex-wrap items-start mt-14"
        >
          <h2 className="text-xl max-sm:text-lg text-whiteSecond">
            {data.title}
          </h2>
          <p className="text-sm opacity-55 text-[#FAF3E0] my-2">{data.about}</p>
          {isReviewType(data) ? (
            <h2 className="text-xl max-sm:text-lg text-whiteSecond">
              {data.name}
            </h2>
          ) : (
            <h2 className="text-redGemuany">{data.btn}</h2>
          )}
        </motion.div>
      </div>
    </div>
  );
};

const Card: React.FC<ItemProps> = ({ burgerData, menuPage }) => {
  const [showAll, setShowAll] = useState(false);
  const getItemsToShow = () => {
    if (!menuPage) return 3;
    return showAll ? burgerData.length : 6;
  };
  const data = burgerData.slice(0, getItemsToShow());

  return (
    <div
      className={`${montserrat.className} w-full h-full lg:mt-44 max-sm:mt-32 mb-10 text-whiteSecond rounded-lg shadow-lg relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-40 gap-x-20 max-sm:gap-y-20 max-sm:gap-x-5`}
    >
      {data.map((item) =>
        "price" in item ? (
          <BurgerCard key={item.id} data={item as Burger} />
        ) : (
          <ReviewOrSetsCard
            key={item.id}
            data={item as SetsType | ReviewType}
          />
        )
      )}
      {menuPage && !showAll && (
        <button
          onClick={() => setShowAll(true)}
          className="col-start-2 max-sm:col-start-1 mx-auto flex justify-center items-center w-10 h-10 bg-[#75C644] text-white rounded-full"
        >
          <Image
            width={24}
            height={24}
            src={arrowShowMore}
            alt="arrow"
            className="object-cover"
          />
        </button>
      )}
    </div>
  );
};

export default Card;
