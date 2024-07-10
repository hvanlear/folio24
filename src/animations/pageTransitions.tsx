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

export const hamburgerVariants = {
  closed: (i: number) => ({
    rotate: 0,
    y: i * 5, // 0px for first line, 5px for second line
  }),
  open: (i: number) => ({
    rotate: i === 0 ? 45 : -45,
    y: i === 0 ? 11 : 5, // 11px for first line, 5px for second line
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
