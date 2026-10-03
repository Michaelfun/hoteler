export const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
};

export const defaultEase = [0.22, 1, 0.36, 1] as const;

export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: defaultEase,
      when: "beforeChildren",
      staggerChildren: 0.1,
    }
  },
  exit: { 
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: defaultEase,
    }
  }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: defaultEase,
    }
  }
};

export const revealText = {
  initial: { y: "100%" },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: defaultEase,
    }
  }
};
