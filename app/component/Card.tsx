import { motion } from "framer-motion";
import { Montserrat } from "next/font/google";
import React from "react";
import { Burger } from "../store/useStore";
import Image from "next/image";
import { hover, itemVariants, transactionAnimate } from "../animation";
import { SetsType } from "../store/useSetsStore";
import { ReviewType } from "../store/useStoreReview";

const montserrat = Montserrat({
  weight: "700",
});

interface ItemProps {
  burgerData: Burger[] | SetsType[] | ReviewType[];
}

interface BurgerCardProps {
  data: Burger;
}

interface ReviewOrSetsCardProps {
  data: SetsType | ReviewType;
}

const BurgerCard: React.FC<BurgerCardProps> = ({ data }) => {
  return (
    <motion.div
      key={data.id}
      className="w-full p-6 bg-item rounded-lg relative flex justify-center flex-col items-center"
      variants={itemVariants[data.id]}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transactionAnimate}
    >
      <div className="absolute -top-32 left-1/2 transform -translate-x-1/2">
        <Image
          layout="intrinsic"
          src={data.img}
          alt="Testing"
          width={346}
          height={347}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-between items-start w-full">
        <div className="flex flex-col justify-start flex-wrap items-start mt-14">
          <h2 className="text-xl font-semibold">{data.name}</h2>
          <p className="text-sm opacity-55 text-[#FAF3E0] font-light my-2">
            {data.about}
          </p>
        </div>
        <div className="flex justify-between items-center w-full">
          <span className="text-lg font-semibold">{data.price}</span>
          <div className="flex flex-row justify-between items-center w-1/3">
            <span className="rounded-3xl bg-priceUnic text-xs font-light py-1 px-2">
              {data.time}
            </span>
            <Image
              layout="intrinsic"
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
    <>
      <motion.div
        key={data.id}
        className="w-auto h-auto p-8 bg-item rounded-xl relative flex justify-between flex-row items-center"
      >
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <Image
            layout="intrinsic"
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
            <h2 className="text-xl text-whiteSecond">{data.title}</h2>
            <p className="text-sm opacity-55 text-[#FAF3E0] my-2">
              {data.about}
            </p>
            {isReviewType(data) ? (
              <h2 className="text-xl text-whiteSecond">{data.name}</h2>
            ) : (
              <h2 className="text-redGemuany">{data.btn}</h2>
            )}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

const Card: React.FC<ItemProps> = ({ burgerData }) => {
  const data = burgerData.slice(0, 3);

  return (
    <div
      className={`${montserrat.className} w-full h-full mt-44 mb-10 text-whiteSecond rounded-lg shadow-lg relative grid grid-cols-3 gap-y-40 gap-x-20`}
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
    </div>
  );
};

export default Card;
