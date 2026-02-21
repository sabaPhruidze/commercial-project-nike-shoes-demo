import { motion } from "framer-motion";
import { startAnimation, startItem } from "./HeroMotion";
import { statistics, Statistics } from "../constants/index";

const HeroStats = () => {
  return (
    <motion.div
      className="flex justify-start items-start flex-wrap w-full mt-20 gap-16"
      variants={startAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {statistics.map((data: Statistics, idx: number) => (
        <motion.div key={idx} variants={startItem}>
          <p className="text-4xl font-palanquin font-bold">{data.value}</p>
          <p className="leading-7 font-montserrat text-slate-gray">
            {data.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroStats;
