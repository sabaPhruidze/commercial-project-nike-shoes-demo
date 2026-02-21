import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import Button from "../components/Button";
import ArrowRight from "../assets/icons/arrow-right.svg";
import bigShoe1 from "../assets/images/bigShoe1.png";
import { shoes } from "../constants";
import { usePreloadImages } from "../hooks/usePreloadImages";
import TypingText from "../components/TypingText";
import HeroStats from "../components/HeroStats";
import HeroShowcase from "../components/HeroShowCase";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState<string>(bigShoe1);

  const bigUrls = useMemo(() => shoes.map((s) => s.bigShoe), []);
  usePreloadImages(bigUrls);

  return (
    <section
      id="home"
      className="w-full flex flex-col justify-center xl:flex-row min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <motion.p
          className="text-xl font-montserrat text-coral-red"
          initial={{ opacity: 0, x: "-20px" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          Our Summer Collection
        </motion.p>

        <TypingText
          firstLine="The New Arrival"
          brand=" Nike"
          product=" Shoes"
        />

        <motion.p
          className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"
          initial={{ opacity: 0, x: "-20px" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 7.5, duration: 0.8 }}
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, x: "-20px" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 8, duration: 0.8 }}
        >
          <Button label="Shop now" iconURL={ArrowRight} />
        </motion.div>

        <HeroStats />
      </div>

      <HeroShowcase bigShoeImg={bigShoeImg} onChangeBigShoe={setBigShoeImg} />
    </section>
  );
};

export default Hero;
