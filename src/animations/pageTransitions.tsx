export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100%",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "100%",
  },
};

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6,
};

export const lineVariants = {
  closed: (i: number) => ({
    rotate: 0,
    translateY: i === 0 ? -5 : 5, // First line up, second line down
  }),
  open: (i: number) => ({
    rotate: i === 0 ? 45 : -45,
    translateY: 0, // Both lines centered
  }),
};

export const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.3,
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.3,
      staggerChildren: 0.09,
    },
  },
};

export const menuItemVariants = {
  closed: { opacity: 0, x: 20 },
  open: { opacity: 1, x: 0 },
};
