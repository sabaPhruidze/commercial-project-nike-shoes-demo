import { motion } from "framer-motion";
import { typingContainer, typingText } from "./HeroMotion";

type Props = {
  firstLine: string; // "The New Arrival"
  brand: string; // " Nike"
  product: string; // " Shoes"
};

const TypingText = ({ firstLine, brand, product }: Props) => {
  return (
    <motion.h1
      className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"
      variants={typingContainer}
      initial="hidden"
      animate="show"
    >
      <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
        {Array.from(firstLine).map((letter, i) => (
          <motion.span key={i} variants={typingText}>
            {letter}
          </motion.span>
        ))}
      </span>

      <br />

      {Array.from(brand).map((letter, i) => (
        <motion.span
          className="text-coral-red inline-block mt-3"
          key={i}
          variants={typingText}
        >
          {letter}
        </motion.span>
      ))}

      {Array.from(product).map((letter, i) => (
        <motion.span key={i} variants={typingText}>
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default TypingText;
