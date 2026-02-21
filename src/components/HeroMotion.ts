export const typingContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, ease: "easeInOut", delayChildren: 2.5 },
  },
};

export const typingText = {
  hidden: { opacity: 0, x: "-20px" },
  show: { opacity: 1, x: 0, transition: { ease: "easeInOut" } },
};

export const startAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, ease: "easeInOut", delayChildren: 0 },
  },
};

export const startItem = {
  hidden: { opacity: 0, x: "-100px" },
  show: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.2, duration: 1, ease: "easeInOut" },
  },
};
