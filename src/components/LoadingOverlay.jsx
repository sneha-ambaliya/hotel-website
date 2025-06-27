import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const overlayVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: { opacity: 1, y: "0%" },
  exit: { opacity: 0, y: "-100%" },
};

const LoadingOverlay = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#9C005D] flex items-center justify-center text-white text-4xl font-bold"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      Loading...
    </motion.div>
  );
};

export default LoadingOverlay;
