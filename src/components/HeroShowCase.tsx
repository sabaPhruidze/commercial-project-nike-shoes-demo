import { motion } from "framer-motion";
import ShoeCard from "../components/ShoeCard";
import { shoes, Shoes } from "../constants/index";

type Props = {
  bigShoeImg: string;
  onChangeBigShoe: (img: string) => void;
};

const HeroShowcase = ({ bigShoeImg, onChangeBigShoe }: Props) => {
  return (
    <motion.div
      className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center"
      initial={{ opacity: 0, x: "200px" }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 2 }}
      viewport={{ once: true }}
    >
      <img
        src={bigShoeImg}
        alt="Nike shoe"
        width={610}
        height={500}
        className="object-contain z-10 relative w-[90%] max-w-[610px] h-auto"
      />

      {/* thumbnails — ფიქსიც აქვე გინდა (wrap + center) */}
      <div className="flex flex-wrap justify-center sm:gap-6 gap-4 absolute -bottom-[5%] left-1/2 -translate-x-1/2 w-full px-6">
        {shoes.map((data: Shoes) => (
          <div key={data.bigShoe}>
            <ShoeCard
              imgURL={data}
              changeBigShoeImage={onChangeBigShoe}
              bigShoeImg={bigShoeImg}
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroShowcase;
