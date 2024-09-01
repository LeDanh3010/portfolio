export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const animationVariants = {
  initial: {
    rotateY: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  hover: {
    rotateY: 15,
    scale: 1.6,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  clicked: {
    rotateY: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, duration: 0.5 },
  },
};

export const textHoverVariant = {
  hover: {
    originX: 0,
    scale: [1.1, 1, 1.1, 1, 1.1, 1],
    transition: { duration: 1, ease: "linear" },
  },
  clicked: {
    scale: 1,
    color: "#ffff",
  },
};

export const backdropVariant = {
  hidden: { opacity: 0 },
  visible: {
    transition: { ease: "easeOut", duration: 0.5 },
    opacity: 1,
  },
};

export const modalVariant = {
  hidden: { opacity: 0, y: "-100vh" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", delay: 0.3, damping: 15, mass: 0.7 },
  },
  exit: {
    opacity: 0,
    y: "-100vh",
    transition: { ease: "easeOut", duration: 0.5 },
  },
};
